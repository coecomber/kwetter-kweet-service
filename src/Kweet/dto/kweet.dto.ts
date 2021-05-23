import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateKweet {
  @IsString()
  @ApiProperty({ type: String })
  kweet: string;

  @IsString()
  @ApiProperty({ type: String })
  ownerId: string;
}