import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRoles } from '../dto/create-user.dto';

@Schema()
export class UserDocument extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: UserRoles.USER })
    role: UserRoles
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
