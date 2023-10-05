import { Resolver, Query, Args } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('User')
export class UserResolver {
  constructor() {}

  @Query('findAllUsers')
  async findAllUsers(@Args('input') findUserDto) {
    return [{ id: 10 }];
  }

  @Query('findOneUser')
  async findOneUser(@Args('id', ParseIntPipe) id: number) {}
}
