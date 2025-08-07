import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/payloads/user/create-user.dto';
import { UserService } from './user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  saltOrRounds: number = 10;

  constructor(private userService: UserService,private readonly jwtServ: JwtService) {}

  async signUp(payload: CreateUserDto) {
    const hashPass = await bcrypt.hash(payload.password,this.saltOrRounds);

    let data = {
      ...payload,
      password: hashPass
    }

    this.userService.create(data);
  }

  async signIn(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);

    const isMatch = await bcrypt.compare(password,user?.password);


  }

  async validateToken(token: string){
    return this.jwtServ.verify(token, {
      secret: process.env.JWT_SECRET_KEY
    });
  }
}