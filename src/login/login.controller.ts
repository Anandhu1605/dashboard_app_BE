import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/create-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }

  @Post('register')
  async register(@Body() loginDto: LoginDto) {
    return this.loginService.createUser(loginDto);
  }
}
