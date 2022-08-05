import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { EnumToString } from 'src/common/helpers/enumToString';
import { PushData } from '../entities/push.entity';

export enum PUSH_STATUS {
  INIT = 'init',
  SEND = 'send',
  READ = 'read',
  UNREAD = 'unread',
  DELETED = 'deleted',
}
export class CreatePushDto {
  @IsNotEmpty()
  @IsObject()
  data: PushData;

  @IsString({ each: true })
  @IsArray()
  categories: string[];

  @IsString()
  affiliate: string;

  @IsOptional()
  @IsString()
  lote: string;

  @IsString()
  admin: string;

  @IsOptional()
  @IsString()
  topic: string;

  @IsOptional()
  @IsEnum(PUSH_STATUS, {
    message: `El valor debe ser uno de los siguientes: ${EnumToString(
      PUSH_STATUS,
    )}`,
  })
  status: string;
}
