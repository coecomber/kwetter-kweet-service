import { Module } from '@nestjs/common';
import { KweetController } from './kweet.controller';
import { KweetService } from './kweet.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Kweet from './Kweet/entities/kweet.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([
      Kweet
    ]),
    TypeOrmModule.forRoot(),
  ],
  controllers: [KweetController],
  providers: [KweetService],
})
export class KweetModule {}
