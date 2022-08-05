/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DB_MONGO_PASSWORD,
  DB_MONGO_USER,
  DB_MONGO_CONNECTION,
  DB_MONGO_HOST,
  DB_MONGO_DB,
} from './../config/constants';
import { MongooseModule } from '@nestjs/mongoose';

export const mongooseDatabaseInfo = [
  MongooseModule.forRoot(
    `${process.env.DB_MONGO_CONNECTION}://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PASSWORD}@${process.env.DB_MONGO_HOST}/${process.env.DB_MONGO_DB}`,
  ),
];
