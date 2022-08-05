import { Injectable } from '@nestjs/common';
import { CreatePushDto, PUSH_STATUS } from './dto/create-push.dto';
import { UpdatePushDto } from './dto/update-push.dto';
import { QueryFindAllPushDto } from './dto/query-find-all.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Push, PushSchema } from './entities/push.entity';
import { Model } from 'mongoose';
import { populateQuery } from 'src/common/helpers/populateParams';

@Injectable()
export class PushsService {
  constructor(
    @InjectModel(Push.name) private readonly pushModel: Model<Push>,
  ) {}
  async create(createPushDto: CreatePushDto) {
    return {
      data: await this.pushModel.create({
        ...createPushDto,
        status: createPushDto.status || PUSH_STATUS.INIT,
      }),
    };
  }

  async findAll(query: QueryFindAllPushDto) {
    const { page, perPage, populate, topic, afiId } = query;
    const p = populateQuery(populate, PushSchema);
    const options = {
      limit: perPage || 10,
      skip: page * perPage || 0,
      sort: {
        createdAt: -1,
      },
    };
    const filters = {
      where: {
        status: { $ne: PUSH_STATUS.DELETED },
        ...(topic ? { topic: { $ne: topic } } : {}),
        ...(afiId ? { afiId } : {}),
      },
    };
    console.log(filters);

    const [total, data] = await Promise.all([
      this.pushModel.countDocuments(filters),
      this.pushModel.find(filters, null, options).populate(p),
    ]);

    return {
      page,
      perPage,
      total,
      data,
    };
  }

  async findOne(id: string) {
    return { data: await this.pushModel.findById(id) };
  }

  async update(id: string, updatePushDto: UpdatePushDto) {
    return {
      data: await this.pushModel.findByIdAndUpdate(
        id,
        { $set: updatePushDto },
        { new: true },
      ),
    };
  }

  async remove(id: string) {
    return {
      data: await this.update(id, { status: PUSH_STATUS.DELETED }),
    };
  }
}
