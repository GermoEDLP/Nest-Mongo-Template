import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { EnumToString } from 'src/common/helpers/enumToString';

export enum TOPIC_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
}

export class CreateTopicDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  desc: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @IsEnum(TOPIC_STATUS, {
    message: `Status is invalid. It must be one of the following: ${EnumToString(
      TOPIC_STATUS,
    )}`,
  })
  status: string;

  @IsString()
  @IsOptional()
  admin: string;
}
