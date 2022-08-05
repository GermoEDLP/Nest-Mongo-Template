import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { Lote } from './entities';

@Injectable()
export class LotesService {
  constructor(@InjectModel(Lote.name) private loteModel: Model<Lote>) {}

  create(createLoteDto: CreateLoteDto) {
    const lote = new this.loteModel({
      ...createLoteDto,
      createdAt: new Date(),
    });
    return lote.save();
  }

  findAll() {
    return this.loteModel.find().exec();
  }

  findOne(id: string) {
    return this.loteModel.findById(id).exec();
  }

  update(id: string, updateLoteDto: UpdateLoteDto) {
    return this.loteModel
      .findByIdAndUpdate(
        id,
        {
          $set: updateLoteDto,
        },
        { new: true },
      )
      .exec();
  }

  remove(id: string) {
    return this.loteModel.findByIdAndRemove(id).exec();
  }
}
