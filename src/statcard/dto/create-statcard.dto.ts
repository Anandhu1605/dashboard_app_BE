import { IsString, IsNotEmpty } from 'class-validator';

export class CreateStatCardDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
     value: string | number; // value can be either string or number

  @IsString()
  @IsNotEmpty()
   icon: string; // The icon name (e.g., 'Zap', 'Users', etc.)

  @IsString()
  @IsNotEmpty()
   color: string; // Hex color value
}
