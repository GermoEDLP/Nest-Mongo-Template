import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Admin {
  @Prop()
  id: string;

  @Prop()
  status: ADMIN_STATUS;

  @Prop()
  desc: string;

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  role: ADMIN_ROLES[];

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

export enum ADMIN_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
}

export enum ADMIN_ROLES {
  SUPER_ADMIN = 'super',
  ADMIN = 'admin',
  USER = 'user',
  VIEWER = 'viewer',
}
