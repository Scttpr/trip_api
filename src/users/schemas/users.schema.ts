
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserDocument extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);