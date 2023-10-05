import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

import { CreateProductDto, FindProductDto, UpdateProductDto } from './dto';
// import { ProductService } from './product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(/*private readonly productService: ProductService*/) {}

  @Query('findAllProducts')
  async findAllProducts(@Args('input') findProductDto: FindProductDto) {
    // const products = await this.productService.findAll(findProductDto);
    // return products;
    return [
      {
        id: 1,
        title: 'playstation',
        price: 1000,
        currency: 'USD',
        quantity: 10,
      },
    ];
  }

  @Query('findOneProduct')
  async findOneProduct(@Args('id', ParseIntPipe) id: number) {
    // const product = await this.productService.fundOne(id);
    // return product;
    return {
      id: 1,
      title: 'playstation',
      price: 1000,
      currency: 'USD',
      quantity: 10,
    };
  }

  @Mutation('createProduct')
  async createProduct(@Args('input') createProductDto: CreateProductDto) {
    // const product = await this.productService.create(createProductDto);
    // return product;
    console.log('product created');
    return {
      id: 1,
      title: 'playstation',
      price: 1000,
      currency: 'USD',
      quantity: 10,
    };
  }

  @Mutation('updateProduct')
  async updateProduct(
    @Args('id', ParseIntPipe) id: number,
    @Args('input') updateProductDto: UpdateProductDto,
  ) {
    // const product = await this.productService.update(id, updateProductDto);
    // return product;
    console.log('Product updated');
    return {
      id: 1,
      title: 'playstation',
      price: 1000,
      currency: 'USD',
      quantity: 10,
    };
  }

  @Mutation('deleteProduct')
  async deleteProduct(@Args('id', ParseIntPipe) id: number) {
    // return await this.productService.delete(id);
    console.log('Product deleted');

    return true;
  }
}
