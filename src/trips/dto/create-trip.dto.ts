import { IsDate, IsEnum, IsString, Min, Max, IsNumber, ValidateIf, IsBoolean, Length } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

enum Modes {
    WALK = 'WALK',
    BICYCLE = 'BICYCLE',
    MOTORBIKE = 'MOTORBIKE',
    CAR = 'CAR',
    PUBLIC_TRANSPORT = 'PUBLIC_TRANSPORT',
    TRAIN = 'TRAIN',
    PLANE = 'PLANE',
}

enum Weather {
    DRY = 'DRY',
    RAINY = 'RAINY',
}

export class CreateTripDto {
    @ApiProperty({ example: '18 rue de Paris, 75000 Paris', description: 'Trip origin address' })
    @IsString()
    readonly origin: string;

    @ApiProperty({ example: '45 rue de Paris, 75000 Paris', description: 'Trip destination address' })
    @IsString()
    readonly destination: string;

    @ApiProperty({ description: 'Trip start date'})
    @IsDate()
    readonly date: Date;

    @ApiProperty({ example: Modes.BICYCLE, description: 'Most used mode during trip'})
    @IsEnum(Modes)
    readonly heaviestMode: Modes;

    @ApiProperty({ example: [Modes.BICYCLE, Modes.PUBLIC_TRANSPORT, Modes.BICYCLE], description: 'Ordered list of all nodes during trips, from origin to destination' })
    // @todo add validation
    readonly modes: Array<Modes>;

    @ApiProperty({ example: 7, description: '???'})
    @Min(0)
    @Max(9)
    readonly motive9: number;

    @ApiProperty({ example: 11, description: '???' })
    // @todo add validation
    readonly motive38: number;

    @ApiProperty({ example: 3.4, description: 'Total distance in kilometers' })
    @IsNumber()
    readonly totalDistance: number;

    @ApiProperty({ example: [0.3, 1.4, 0.2], description: 'Ordered list of all distances per mode, from origin to destination' })
    // @todo add validation
    readonly distances: Array<number>

    // @todo ask for R/V data

    @ApiProperty({ example: 1, description: '???' })
    @IsNumber()
    @Max(200) // @todo define max
    readonly fillingRate: number;

    @ApiProperty({ example: true, description: 'Wether or not driver was the driver during the trip'})
    @ValidateIf(({ isDriver }) => isDriver)
    @IsBoolean()
    readonly isDriver: boolean;

    @ApiProperty({ example: Weather.DRY, description: 'Wether or not it was rainy during trip', required: false })
    @ValidateIf(({ weather }) => weather)
    @IsEnum(Weather)
    readonly weather?: Weather;

    @ApiProperty({ example: 'Some dummy comments', description: 'Comments about the trip', required: false })
    @ValidateIf(({ weather }) => weather)
    @IsString()
    @Length(1, 100)
    readonly comments?: string;

    // @todo ask about 4 last datas
}
