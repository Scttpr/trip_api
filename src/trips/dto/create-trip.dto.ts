import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class Trip {
    @ApiProperty({ example: '18 rue de Paris, 75000 Paris', description: 'Trip origin address' })
    @IsString()
    readonly origin: string;

    @ApiProperty({ example: '45 rue de Paris, 75000 Paris', description: 'Trip destination address' })
    @IsString()
    readonly destination: string;
}
