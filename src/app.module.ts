import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule } from './config/customConfig.module';
import { DatabaseModule } from './database/database.module';
import { AffiliatesModule } from './modules/affiliates/affiliates.module';
import { AdminsModule } from './modules/admins/admins.module';
import { PushsModule } from './modules/pushs/pushs.module';
import { LotesModule } from './modules/lotes/lotes.module';
import { TopicsModule } from './modules/topics/topics.module';
import { ServicesModule } from './services/services.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [
    CustomConfigModule,
    DatabaseModule,
    AffiliatesModule,
    AdminsModule,
    PushsModule,
    LotesModule,
    TopicsModule,
    ServicesModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
