import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10, { message: 'username is too long' })
  username: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsNumber()
  phone: number;

  @IsString()
  password: string;
}
