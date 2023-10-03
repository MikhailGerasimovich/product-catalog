import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

import { UpdateProductInput } from '../../classes';

export class UpdateProductDto extends UpdateProductInput {
  @IsString()
  @IsOptional()
  @Length(2, 20)
  title?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  price?: number;

  @IsString()
  @IsOptional()
  @Length(1, 15)
  currency?: string;

  @IsInt()
  @IsOptional()
  @Min(0)
  quantity?: number;
}
