
import { IsString, MinLength, MaxLength } from 'class-validator'; // Import decorators for validation

export class LoginDto {
  @IsString() // Ensures the username is a string
  @MinLength(3, { message: 'Username must be at least 3 characters long' }) // Minimum length for username
  @MaxLength(20, { message: 'Username must not exceed 20 characters' }) // Maximum length for username
  username: string;

  @IsString() // Ensures the password is a string
  @MinLength(6, { message: 'Password must be at least 6 characters long' }) // Minimum length for password
  password: string;
}