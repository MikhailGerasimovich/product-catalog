
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateProductInput {
    title: string;
    price: number;
    currency: string;
    quantity: number;
}

export class UpdateProductInput {
    title?: Nullable<string>;
    price?: Nullable<number>;
    currency?: Nullable<string>;
    quantity?: Nullable<number>;
}

export class FindProductInput {
    title?: Nullable<string>;
    price?: Nullable<number>;
    currency?: Nullable<string>;
    quantity?: Nullable<number>;
}

export class Product {
    id: number;
    title: string;
    price: number;
    currency: string;
    quantity: number;
}

export abstract class IQuery {
    abstract findOne(id: number): Product | Promise<Product>;

    abstract findAll(input?: Nullable<FindProductInput>): Nullable<Product[]> | Promise<Nullable<Product[]>>;
}

export abstract class IMutation {
    abstract create(input: CreateProductInput): Product | Promise<Product>;

    abstract update(id: number, input?: Nullable<UpdateProductInput>): Product | Promise<Product>;

    abstract delete(id: number): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
