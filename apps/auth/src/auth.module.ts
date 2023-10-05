import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CoreModule } from './core/core.module';

const envFilePath = './apps/auth/.env';
const gqlClassesPath = './apps/auth/src/core/classes/gql.classes.ts';

const DefinitionConfigModule = ConfigModule.forRoot({
  envFilePath: envFilePath,
});

const DefinitionGraphQLModule =
  GraphQLModule.forRoot<ApolloFederationDriverConfig>({
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
  useFactory: (config: ConfigService) => ({
    type: 'postgres',
    host: config.get('DB_HOST'),
    port: +config.get('DB_PORT'),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    database: config.get('DB_NAME'),
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
    // DefinitionTypeOrmModule,
    CoreModule,
  ],
})
export class AuthModule {}
