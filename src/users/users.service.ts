
import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserDocument } from "./schemas/users.schema";
import { User } from './dto/create-user.dto';
import { MODEL_NAME } from "./users.constants";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(MODEL_NAME)
        private readonly  userModel: Model<UserDocument>,
    ) {}

    async create(user: User): Promise<UserDocument> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async findAll(): Promise<UserDocument[]> {
        return this.userModel.find().exec();
    }
}
