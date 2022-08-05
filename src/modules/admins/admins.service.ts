import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminsService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async create(createAdminDto: CreateAdminDto) {
    const user = this.adminModel.findOne({ username: createAdminDto.username });
    if (user) {
      throw new BadRequestException('Username already exists');
    }
    const admin = new this.adminModel({
      ...createAdminDto,
      password: await bcrypt.hash(createAdminDto.password, 10),
      status: createAdminDto.status ?? 'active',
    });
    return admin.save();
  }

  findAll() {
    return this.adminModel.find().exec();
  }

  findOne(id: string) {
    return this.adminModel.findById(id).exec();
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminModel
      .findByIdAndUpdate(id, { $set: updateAdminDto }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.adminModel.findByIdAndRemove(id).exec();
  }
}
