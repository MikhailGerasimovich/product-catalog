import { ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CoreModule } from './core/core.module';

const envFilePath = './apps/catalogs/.env';
const gqlClassesPath = './apps/catalogs/src/core/classes/gql.classes.ts';

const DefinitionConfigModule = ConfigModule.forRoot({
  envFilePath: envFilePath,
});

const DefinitionGraphQLModule = GraphQLModule.forRoot({
  typePaths: ['./**/*.graphql'],
  driver: ApolloFederationDriver,
  context: ({ req }: any) => ({ req }),
  definitions: {
    path: gqlClassesPath,
    outputAs: 'class',
  },
});

const DefinitionTypeOrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
  }),
  inject: [ConfigService],
});

@Module({
  imports: [
    DefinitionConfigModule,
    DefinitionGraphQLModule,
    DefinitionTypeOrmModule,
    CoreModule,
  ],
  controllers: [],
  providers: [],
})
export class CatalogsModule {}
