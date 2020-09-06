
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TripDocument extends Document {
    @Prop({ required: true })
    origin: string;

    @Prop({ required: true })
    destination: string;
}

export const TripSchema = SchemaFactory.createForClass(TripDocument);
