import { IsEmail, IsEnum, IsString, ValidateIf } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export enum UserRoles {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

export class CreateUserDto {
    @ApiProperty({ example: 'Foo', description: 'User name' })
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'foo@bar.com', description: 'User email' })
    @IsEmail()
    readonly email: string;

    @ApiProperty({ example: 'sFi@15jsHDF5adf', description: 'User password' })
    @IsString()
    readonly password: string;

    @ApiProperty({ example: 'USER', description: 'User role' })
    @ValidateIf(({ role }) => role)
    @IsEnum(UserRoles)
    readonly role?: UserRoles
}
