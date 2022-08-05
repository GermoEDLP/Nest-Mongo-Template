import { Module } from '@nestjs/common';
import { PushsService } from './pushs.service';
import { PushsController } from './pushs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Push, PushSchema } from './entities/push.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Push.name, schema: PushSchema }]),
  ],
  controllers: [PushsController],
  providers: [PushsService],
})
export class PushsModule {}
