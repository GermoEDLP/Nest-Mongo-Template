import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Lote } from 'src/modules/lotes/entities';
import { Topic } from 'src/modules/topics/entities/topic.entity';
import { Admin } from '../../admins/entities/admin.entity';
import { Category } from '../../categories/entities/category.entity';
import { Affiliate } from '../../affiliates/entities/affiliate.entity';

export class PushData {
  title: string;

  body: string;

  url: string;
}

@Schema()
export class Push extends Document {
  @Prop()
  id: string;

  @Prop({ type: Types.ObjectId, ref: Affiliate.name, required: true })
  affiliate: Affiliate | Types.ObjectId;

  @Prop({ type: PushData, required: true })
  data: PushData;

  @Prop({
    type: [
      {
        type: Types.ObjectId,
        ref: Category.name,
      },
    ],
    required: false,
  })
  categories: Types.Array<Category>;

  @Prop({ type: Types.ObjectId, ref: Lote.name, required: false })
  lote: Lote | Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Admin.name, required: false })
  admin: Admin | Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Topic.name, required: false })
  topic: Topic | Types.ObjectId;

  @Prop()
  status: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const PushSchema = SchemaFactory.createForClass(Push);
