import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument } from './schemas/users.schema';
import { ApiTags } from '@nestjs/swagger';
import { USER_COLLECTION_NAME, PARAM_NAME } from './users.constants';

const PARAM_ENDPOINT = `:${PARAM_NAME}`;

@ApiTags(USER_COLLECTION_NAME)
@Controller(USER_COLLECTION_NAME)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @HttpCode(204)
    async create(@Body() user: CreateUserDto) {
        await this.usersService.create(user);
    }

    @Get()
    async findAll(): Promise<UserDocument[]> {
        return this.usersService.findAll();
    }

    @Get(PARAM_ENDPOINT)
    async findOne(@Param(PARAM_NAME) userId:string): Promise<UserDocument> {
        console.log(userId);
        return this.usersService.findOne(userId)
    }

    @Patch(PARAM_ENDPOINT)
    // @todo build a type for partial data payload
    async updateOne(@Param(PARAM_NAME) userId: string, @Body() payload: unknown): Promise<UserDocument> {
        return this.usersService.updateOne(userId, payload);
    }

    @Delete(PARAM_ENDPOINT)
    @HttpCode(204)
    async deleteOne(@Param(PARAM_NAME) userId: string) {
        return this.usersService.deleteOne(userId)
    }
}
