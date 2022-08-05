import { LoteType } from 'src/config/constants';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Topic } from '../../topics/entities/topic.entity';
import { Admin } from 'src/modules/admins/entities/admin.entity';

@Schema()
export class Lote extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop({ type: Types.ObjectId, ref: Admin.name, required: false })
  admin: Admin | Types.ObjectId;

  @Prop()
  cant: number;

  @Prop({ type: Types.ObjectId, ref: Topic.name, required: false })
  topic: Topic | Types.ObjectId;

  @Prop({
    type: String,
    enum: LoteType,
  })
  type: LoteType;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const LoteSchema = SchemaFactory.createForClass(Lote);
