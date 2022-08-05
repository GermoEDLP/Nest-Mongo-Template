import { Module } from '@nestjs/common';
import { LotesService } from './lotes.service';
import { LotesController } from './lotes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Lote, LoteSchema } from './entities';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Lote.name,
        schema: LoteSchema,
      },
    ]),
  ],
  controllers: [LotesController],
  providers: [LotesService],
})
export class LotesModule {}
