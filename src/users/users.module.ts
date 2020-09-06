
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MODEL_NAME } from "./users.constants";
import { UserSchema } from "./schemas/users.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: MODEL_NAME, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersModule {}
