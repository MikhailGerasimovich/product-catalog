import {
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

import { FindProductInput } from '../../classes';

export class FindProductDto extends FindProductInput {
  @IsString()
  @IsOptional()
  @IsDefined()
  @Length(2, 20)
  title?: string;

  @IsNumber()
  @IsOptional()
  @IsDefined()
  @Min(0)
  price?: number;

  @IsString()
  @IsOptional()
  @IsDefined()
  @Length(1, 15)
  currency?: string;

  @IsNumber()
  @IsOptional()
  @IsDefined()
  @Min(0)
  quantity?: number;
}
