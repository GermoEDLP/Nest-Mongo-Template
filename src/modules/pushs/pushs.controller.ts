import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PushsService } from './pushs.service';
import { CreatePushDto } from './dto/create-push.dto';
import { UpdatePushDto } from './dto/update-push.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryFindAllPushDto } from './dto/query-find-all.dto';

@Controller('push')
@ApiTags('Pushs')
export class PushsController {
  constructor(private readonly pushsService: PushsService) {}

  @Post()
  create(@Body() createPushDto: CreatePushDto) {
    return this.pushsService.create(createPushDto);
  }

  @Get()
  findAll(@Query() query: QueryFindAllPushDto) {
    return this.pushsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pushsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePushDto: UpdatePushDto) {
    return this.pushsService.update(id, updatePushDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pushsService.remove(id);
  }
}
