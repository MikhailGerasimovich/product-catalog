import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

import { CreateProductDto, FindProductDto, UpdateProductDto } from './dto';
import { ProductService } from './product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query('findAllProducts')
  async findAllProducts(@Args('input') findProductDto: FindProductDto) {
    const products = await this.productService.findAll(findProductDto);
    return products;
  }

  @Query('findOneProduct')
  async findOneProduct(@Args('id', ParseIntPipe) id: number) {
    const product = await this.productService.fundOne(id);
    return product;
  }

  @Mutation('createProduct')
  async createProduct(@Args('input') createProductDto: CreateProductDto) {
    const product = await this.productService.create(createProductDto);
    return product;
  }

  @Mutation('updateProduct')
  async updateProduct(
    @Args('id', ParseIntPipe) id: number,
    @Args('input') updateProductDto: UpdateProductDto,
  ) {
    const product = await this.productService.update(id, updateProductDto);
    return product;
  }

  @Mutation('deleteProduct')
  async deleteProduct(@Args('id', ParseIntPipe) id: number) {
    return await this.productService.delete(id);
  }
}
