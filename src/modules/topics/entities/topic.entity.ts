import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Admin } from '../../admins/entities/admin.entity';
import { Category } from '../../categories/entities/category.entity';

@Schema({ timestamps: true })
export class Topic extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop({
    type: [
      {
        type: Types.ObjectId,
        ref: Category.name,
      },
    ],
  })
  categories: Types.Array<Category>;

  @Prop()
  status: string;

  @Prop({ type: Types.ObjectId, ref: Admin.name, required: false })
  admin: Admin | Types.ObjectId;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
