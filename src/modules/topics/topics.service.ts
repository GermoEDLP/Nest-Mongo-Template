import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueryFindAllTopicDto } from './dto';
import { CreateTopicDto, TOPIC_STATUS } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topic, TopicSchema } from './entities/topic.entity';
import { populateQuery } from '../../common/helpers/populateParams';

@Injectable()
export class TopicsService {
  constructor(@InjectModel(Topic.name) private topicModel: Model<Topic>) {}
  create(createTopicDto: CreateTopicDto) {
    const topic = new this.topicModel({
      ...createTopicDto,
      status: createTopicDto.status || TOPIC_STATUS.ACTIVE,
    });
    return topic.save();
  }

  async findAll(q: QueryFindAllTopicDto) {
    const { page, perPage, populate } = q;

    const p = populateQuery(populate, TopicSchema);
    const options = {
      limit: perPage || 10,
      skip: page * perPage || 0,
      sort: {
        createdAt: -1,
      },
    };
    const filters = {
      status: { $ne: TOPIC_STATUS.DELETED },
    };
    const [total, data] = await Promise.all([
      this.topicModel.countDocuments(filters),
      this.topicModel.find(filters, null, options).populate(p),
    ]);

    return {
      page,
      perPage,
      total,
      data,
    };
  }

  findOne(id: string) {
    return this.topicModel.findById(id).exec();
  }

  update(id: string, updateTopicDto: UpdateTopicDto) {
    return this.topicModel.findByIdAndUpdate(
      id,
      {
        $set: updateTopicDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.update(id, { status: TOPIC_STATUS.DELETED });
  }
}
