import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
//import { JWT_SECRET } from 'src/config/constants';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'local' }),
    TypeOrmModule.forFeature([User], 'mongo'),
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    //     secret: configService.get(configKey.JWT_SECRET),
    //     signOptions: {
    //       expiresIn: '1d',
    //     },
    //   }),
    // }),
  ],
  controllers: [],
  providers: [AuthService],
  exports: [
    PassportModule,
    TypeOrmModule.forFeature([User], 'mongo'),
    AuthService,
  ],
})
export class AuthModule {}
