import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class User {
    @ApiProperty({ example: 'Foo', description: 'User name' })
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'foo@bar.com', description: 'User email' })
    @IsString()
    readonly email: string;
}
