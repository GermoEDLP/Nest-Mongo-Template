import { IsEnum, IsNumber, IsString } from 'class-validator';
import { EnumToString } from 'src/common/helpers/enumToString';
import { LoteType } from 'src/config/constants';
export class CreateLoteDto {
  @IsString()
  name: string;

  @IsString()
  desc: string;

  @IsString()
  @IsEnum(LoteType, {
    message: `The type must be one of the following: ${EnumToString(LoteType)}`,
  })
  type: LoteType;

  @IsString()
  admin: string;

  @IsNumber()
  cant: number;

  @IsString()
  topic: string;
}
