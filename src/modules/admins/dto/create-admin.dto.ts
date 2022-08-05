import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { EnumToString } from 'src/common/helpers/enumToString';
import { ADMIN_ROLES, ADMIN_STATUS } from '../entities/admin.entity';

export class CreateAdminDto {
  @IsString()
  @IsEnum(ADMIN_STATUS, {
    message: `The type must be one of the following: ${EnumToString(
      ADMIN_STATUS,
    )}`,
  })
  @IsOptional()
  status: ADMIN_STATUS;

  @IsString()
  desc: string;

  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @ApiProperty({
    description: 'List of enums',
    isArray: true,
    enum: ADMIN_ROLES,
  })
  @IsEnum(ADMIN_ROLES, { each: true })
  role: ADMIN_ROLES[];
}
