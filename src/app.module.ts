import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { env, EnvironmentVariablesKeys } from './services/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TripsModule } from "./trips/trips.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    MongooseModule.forRoot(env.get(EnvironmentVariablesKeys.mongoUri), { useFindAndModify: false }),
    TripsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
