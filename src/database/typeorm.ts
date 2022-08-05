import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_MONGO_DB,
  DB_MONGO_HOST,
  DB_MONGO_PASSWORD,
  DB_MONGO_PORT,
  DB_MONGO_USER,
  NOTI_DB,
} from 'src/config/constants';

export const typeormDatabaseInfo = [
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    name: process.env[NOTI_DB],
    useFactory: (configService: ConfigService) => ({
      type: 'mongodb',
      host: configService.get<string>(DB_MONGO_HOST),
      port: parseInt(configService.get<string>(DB_MONGO_PORT), 10),
      username: configService.get<string>(DB_MONGO_USER),
      password: configService.get<string>(DB_MONGO_PASSWORD),
      database: configService.get<string>(DB_MONGO_DB),
      entities: ['dist/**/noti/*.entity{.ts,.js}'],
      useUnifiedTopology: true,
      synchronize: false,
    }),
  }),
  // TypeOrmModule.forRootAsync({
  //   inject: [ConfigService],
  //   imports: [ConfigModule],
  //   name: 'tmed',
  //   useFactory: (configService: ConfigService) => ({
  //     type: 'oracle',
  //     host: configService.get<string>(DB_ORACLE_HOST),
  //     sid: configService.get<string>(DB_ORACLE_SID),
  //     port: parseInt(configService.get<string>(DB_ORACLE_PORT), 10),
  //     username: configService.get<string>(DB_ORACLE_USER),
  //     password: configService.get<string>(DB_ORACLE_PASSWORD),
  //     database: configService.get<string>(DB_ORACLE_DB),
  //     entities: ['dist/**/mps.entity{.ts,.js}'],
  //     synchronize: false,
  //   }),
  // }),
];
