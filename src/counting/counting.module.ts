import { Module } from '@nestjs/common';
import { CountingController } from './counting.controller';
import { CountingService } from './counting.service';
import { Counting } from './entity/counting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Counting])],
  exports: [TypeOrmModule],
  controllers: [CountingController],
  providers: [CountingService]
})
export class CountingModule {}
