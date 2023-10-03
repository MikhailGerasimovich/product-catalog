import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
} from 'class-validator';

import { CreateProductInput } from '../../classes';

export class CreateProductDto extends CreateProductInput {
  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  title: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  price: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 15)
  currency: string;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  quantity: number;
}
