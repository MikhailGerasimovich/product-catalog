import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

import { CreateProductDto, FindProductDto, UpdateProductDto } from './dto';
import { ProductService } from './product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query('findAll')
  async findAll(@Args('input') findProductDto: FindProductDto) {
    const products = await this.productService.findAll(findProductDto);
    return products;
  }

  @Query('findOne')
  async findOne(@Args('id', ParseIntPipe) id: number) {
    const product = await this.productService.fundOne(id);
    return product;
  }

  @Mutation('create')
  async create(@Args('input') createProductDto: CreateProductDto) {
    const product = await this.productService.create(createProductDto);
    return product;
  }

  @Mutation('update')
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('input') updateProductDto: UpdateProductDto,
  ) {
    const product = await this.productService.update(id, updateProductDto);
    return product;
  }

  @Mutation('delete')
  async delete(@Args('id', ParseIntPipe) id: number) {
    return await this.productService.delete(id);
  }
}
