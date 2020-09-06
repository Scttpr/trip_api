import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';

import { TripsService } from './trips.service';
import { Trip } from './dto/create-trip.dto';
import { TripDocument } from './schemas/trips.schema';

@Controller('trips')
export class TripsController {
    constructor(private readonly tripsService: TripsService) {}

    @Post()
    @HttpCode(204)
    async create(@Body() trip: Trip) {
        await this.tripsService.create(trip);
    }

    @Get()
    async findAll(): Promise<TripDocument[]> {
        return this.tripsService.findAll();
    }
}
