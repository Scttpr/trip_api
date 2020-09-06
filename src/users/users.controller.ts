import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './dto/create-user.dto';
import { UserDocument } from './schemas/users.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @HttpCode(204)
    async create(@Body() user: User) {
        await this.usersService.create(user);
    }

    @Get()
    async findAll(): Promise<UserDocument[]> {
        return this.usersService.findAll();
    }
}
