
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class FindUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
}

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

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
}

export abstract class IQuery {
    abstract findOneUser(id: number): User | Promise<User>;

    abstract findAllUsers(input?: Nullable<FindUserInput>): Nullable<User[]> | Promise<Nullable<User[]>>;

    abstract findOneProduct(id: number): Product | Promise<Product>;

    abstract findAllProducts(input?: Nullable<FindProductInput>): Nullable<Product[]> | Promise<Nullable<Product[]>>;
}

export class Product {
    id: number;
    title: string;
    price: number;
    currency: string;
    quantity: number;
}

export abstract class IMutation {
    abstract createProduct(input: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(id: number, input?: Nullable<UpdateProductInput>): Product | Promise<Product>;

    abstract deleteProduct(id: number): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
