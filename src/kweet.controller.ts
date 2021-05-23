import { Body, Controller, Get, Logger, Param, Post, Req } from '@nestjs/common';
import { KweetService } from './kweet.service';
import Kweet from './Kweet/entities/kweet.entity';
import { CreateKweet } from './Kweet/dto/kweet.dto';

@Controller('api/kweet')
export class KweetController {
  constructor(
    private readonly kweetService: KweetService
  ) { }

  private readonly logger = new Logger(KweetController.name);

  @Get(':id')
  async getOneKweetById(@Param('id') id): Promise<Kweet> {
    return await this.kweetService.getOneKweetById(id);
  }

  @Get('/kweets/:pageNumber')
  async getAllKweetsBasedOnPageNumber(@Param('pageNumber') pageNumber: number){
    return this.kweetService.getAllKweetsBasedOnPageNumber(pageNumber);
  }

  @Post()
  async createKweet(
    @Body() kweetDto: CreateKweet,
  ): Promise<Kweet> {
    const kweet: Kweet = { ...kweetDto }
    console.log(kweet)
    return await this.kweetService.createKweet(kweet);
  }
}