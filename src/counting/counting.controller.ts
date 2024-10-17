import { Controller, Get, Post,Body } from '@nestjs/common';
import { CountingService } from './counting.service';
import { CountingDTO } from './dto/counting.dto';
import { FindManyOptions } from 'typeorm';

@Controller('counting')
export class CountingController {
    constructor(private countingService: CountingService){};

    @Get()
    count(options: FindManyOptions<CountingDTO>): Promise<number>{
        return this.countingService.count(options);
    }
    
    @Post()
    create(@Body() counting: CountingDTO) {
        this.countingService.create(counting);
    }
}
