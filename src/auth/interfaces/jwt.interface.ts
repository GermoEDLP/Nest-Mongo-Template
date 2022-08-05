import { ObjectID } from 'typeorm';

export interface IJwt {
  id: ObjectID;
  username: string;
  name: string;
  iat?: Date;
}
