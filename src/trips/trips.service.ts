import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { TripDocument } from "./schemas/trips.schema";
import { CreateTripDto } from './dto/create-trip.dto';
import { TRIPS_MODEL_NAME } from "./trips.constants";

@Injectable()
export class TripsService {
    constructor(
        @InjectModel(TRIPS_MODEL_NAME)
        private readonly  tripModel: Model<TripDocument>,
    ) {}

    async create(trip: CreateTripDto): Promise<TripDocument> {
        const createdTrip = new this.tripModel(trip);
        return createdTrip.save();
    }

    async findAll(): Promise<TripDocument[]> {
        return this.tripModel.find().exec();
    }
}
