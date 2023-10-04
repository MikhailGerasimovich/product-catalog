import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { ProductEntity } from './entity';
import { CreateProductDto, FindProductDto, UpdateProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
  ) {}

  async findAll(findProductDto: FindProductDto) {
    const findEntity = this.productRepo.create(findProductDto);
    const products = await this.productRepo.find({
      where: {
        ...findEntity,
      },
    });

    return products;
  }

  async fundOne(id: number) {
    const product = await this.productRepo.findOne({ where: { id } });
    return product;
  }

  async create(createProductDto: CreateProductDto) {
    const productEntity = this.productRepo.create(createProductDto);
    const savedProduct = await this.productRepo.save(productEntity);
    return savedProduct;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const existingProduct = await this.fundOne(id);
    const productEntity = this.productRepo.create(updateProductDto);

    const updatedProduct = await this.productRepo.save({
      ...existingProduct,
      ...productEntity,
    });
    return updatedProduct;
  }

  async delete(id: number): Promise<boolean> {
    const data = await this.productRepo.delete(id);
    return data && data.affected > 0;
  }
}
