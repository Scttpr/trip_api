
import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { TripDocument } from "./schemas/trips.schema";
import { Trip } from './dto/create-trip.dto';
import { MODEL_NAME } from "./trips.constants";

@Injectable()
export class TripsService {
    constructor(
        @InjectModel(MODEL_NAME)
        private readonly  tripModel: Model<TripDocument>,
    ) {}

    async create(trip: Trip): Promise<TripDocument> {
        const createdTrip = new this.tripModel(trip);
        return createdTrip.save();
    }

    async findAll(): Promise<TripDocument[]> {
        return this.tripModel.find().exec();
    }
}
