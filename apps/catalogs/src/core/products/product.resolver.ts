import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

import { CreateProductDto, FindProductDto, UpdateProductDto } from './dto';

@Resolver('Product')
export class ProductResolver {
  constructor() {}

  @Query('findAll')
  async findAll(@Args('input') findProductDto: FindProductDto) {}

  @Query('findOne')
  async findOne(@Args('id', ParseIntPipe) id: number) {}

  @Mutation('create')
  async create(@Args('input') createProductDto: CreateProductDto) {
    console.log(createProductDto.title);
  }

  @Mutation('update')
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('input') updateProductDto: UpdateProductDto,
  ) {}

  @Mutation('delete')
  async delete(@Args('id', ParseIntPipe) id: number) {}
}
