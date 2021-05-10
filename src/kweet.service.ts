import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Kweet from './Kweet/entities/kweet.entity';

@Injectable()
export class KweetService {
    private readonly logger = new Logger(KweetService.name);
    
    constructor(
        @InjectRepository(Kweet)
        private kweetRepository: Repository<Kweet>,
    ) {}

    async getAllKweets(): Promise<Kweet[]> {
        return this.kweetRepository.find();
    }

    async getOneKweetById(id: string): Promise<Kweet> {
        return await this.kweetRepository.findOne(id);
    }

    async getAllKweetsBasedOnPageNumber(pageNumber: number){
      const take = 10;
      const skip = pageNumber * 10;
  
      const [result, total] = await this.kweetRepository.findAndCount(
        {
            take: take,
            skip: skip
        }
    );
  
      return {data: result, count: total};
    }

    async createKweet(kweet: Kweet): Promise<Kweet> {
      return await this.kweetRepository.save(kweet);
    }

    getHello(): any {
      return this.kweetRepository.find({
        where: { id: 1 }
      });
    }
}
