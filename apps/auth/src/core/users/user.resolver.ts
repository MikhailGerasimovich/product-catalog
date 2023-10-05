import { Resolver, Query, Args } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('User')
export class UserResolver {
  constructor() {}

  @Query('findAllUsers')
  async findAllUsers(@Args('input') findUserDto) {
    return [
      {
        id: 10,
        username: 'Misha',
        email: 'ger.misha_2002@mail.ru',
        password: 'qwerty',
      },
    ];
  }

  @Query('findOneUser')
  async findOneUser(@Args('id', ParseIntPipe) id: number) {
    return {
      id: 10,
      username: 'Misha',
      email: 'ger.misha_2002@mail.ru',
      password: 'qwerty',
    };
  }
}
