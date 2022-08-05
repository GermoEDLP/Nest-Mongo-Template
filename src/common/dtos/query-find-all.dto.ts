import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryFindAllDto {
  @ApiProperty({
    description:
      'Campos a popular. Separados pos comas. Ej: "admin,categories"',
    required: false,
  })
  @IsString()
  @IsOptional()
  populate: string;

  @ApiProperty({
    description: 'Pagina a mostrar. Ej: "1"',
    default: 0,
    required: false,
  })
  @IsOptional()
  page: number;

  @ApiProperty({
    description: 'Cantidad de elementos por pagina. Ej: "10"',
    default: 10,
    required: false,
  })
  @IsOptional()
  perPage: number;
}
