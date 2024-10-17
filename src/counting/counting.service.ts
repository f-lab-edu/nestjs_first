import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Counting } from './entity/counting.entity';
import { CountingDTO } from './dto/counting.dto';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class CountingService {
    constructor(
        @InjectRepository(Counting)
        private countingRepository: Repository<Counting>,
      ) {}

    count(options: FindManyOptions<CountingDTO>): Promise<number>{
        return this.countingRepository.count(options);
    }

    async create(counting: CountingDTO): Promise<void> {
        await this.countingRepository.save(counting);
      }
}
