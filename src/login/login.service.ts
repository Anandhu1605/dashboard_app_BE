import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from './schemas/login.schema';
import { LoginDto } from './dto/create-login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(Login.name) private readonly loginModel: Model<Login>,
  ) {}

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    // Find user in the database
    const user = await this.loginModel.findOne({ username }).exec();

    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid username or password');
    }

    return { message: 'Login successful', user: { username: user.username } };
  }

  async createUser(loginDto: LoginDto) {
    const newUser = new this.loginModel(loginDto);
    return await newUser.save();
  }
}
