import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { AUTH_DTO_INFO } from '../constants';

export class SignInDto {
  @ApiProperty(AUTH_DTO_INFO.USERNAME)
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty(AUTH_DTO_INFO.PASSWORD)
  @IsNotEmpty()
  @IsString()
  password: string;
}
