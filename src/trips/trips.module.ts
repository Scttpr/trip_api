import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';
import { TRIPS_MODEL_NAME } from "./trips.constants";
import { TripSchema } from "./schemas/trips.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: TRIPS_MODEL_NAME, schema: TripSchema }])],
    controllers: [TripsController],
    providers: [TripsService],
})

export class TripsModule {}
