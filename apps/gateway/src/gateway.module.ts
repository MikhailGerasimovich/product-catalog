import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

const envFilePath = './apps/gateway/.env';

const DefinitionConfigModule = ConfigModule.forRoot({
  envFilePath: envFilePath,
});

const DefinitionGraphQLModule =
  GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
    imports: [ConfigModule],
    driver: ApolloGatewayDriver,
    useFactory: (config: ConfigService) => ({
      server: {},
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: config.get('CATALOGS_NAME'),
              url: config.get('CATALOGS_URL'),
            },
          ],
        }),
      },
    }),
    inject: [ConfigService],
  });

@Module({
  imports: [DefinitionConfigModule, DefinitionGraphQLModule],
  controllers: [],
  providers: [],
})
export class GatewayModule {}
