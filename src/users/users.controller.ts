import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument } from './schemas/users.schema';
import { ApiTags } from '@nestjs/swagger';
import { USER_COLLECTION_NAME } from './users.constants';

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
}
