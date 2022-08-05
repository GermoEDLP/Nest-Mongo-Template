import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { QueryFindAllDto } from 'src/common/dtos';

export class QueryFindAllPushDto extends QueryFindAllDto {
  @ApiProperty({
    description: 'Identificador del afiliado',
    required: false,
  })
  @IsString()
  @IsOptional()
  afiId: string;

  @ApiProperty({
    description: 'Topic',
    required: false,
  })
  @IsString()
  @IsOptional()
  topic: string;
}
