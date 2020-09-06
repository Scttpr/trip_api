import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { TripDocument } from './schemas/trips.schema';
import { TRIPS_COLLECTION_NAME } from './trips.constants';

@ApiTags(TRIPS_COLLECTION_NAME)
@Controller(TRIPS_COLLECTION_NAME)
export class TripsController {
    constructor(private readonly tripsService: TripsService) {}

    @Post()
    @HttpCode(204)
    async create(@Body() trip: CreateTripDto) {
        await this.tripsService.create(trip);
    }

    @Get()
    async findAll(): Promise<TripDocument[]> {
        return this.tripsService.findAll();
    }
}
