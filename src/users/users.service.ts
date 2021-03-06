import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserDocument } from "./schemas/users.schema";
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_NAME } from "./users.constants";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(USER_MODEL_NAME)
        private readonly  userModel: Model<UserDocument>,
    ) {}

    async create(user: CreateUserDto): Promise<UserDocument> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async findAll(): Promise<UserDocument[]> {
        return this.userModel.find().exec();
    }

    async findOne(userId: string): Promise<UserDocument> {

        return this.userModel.findById(userId);
    }

    async updateOne(userId: string, payload: unknown): Promise<UserDocument> {
        return this.userModel.findOneAndUpdate({ _id: userId }, payload);
    }

    async deleteOne(userId: string) {
        return this.userModel.findOneAndRemove({ _id: userId});
    }
}
