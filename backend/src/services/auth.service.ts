import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/payloads/user/create-user.dto';
import { UserService } from './user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TTokens } from 'src/types';

@Injectable()
export class AuthService {
  saltOrRounds: number = 10;

  constructor(private userService: UserService,private readonly jwtServ: JwtService) {}

  hashData(data: string) {
    return bcrypt.hash(data,this.saltOrRounds);
  }

  //sign the JWT Token with userId and email
  //caveat: JWT should be signed with informations that are okay to be publicly accessible.
  async getTokens(userId: number,email: string) {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtServ.signAsync({
        userId,
        email
      }, {
        secret: process.env.JWT_SECRET_KEY,
        expiresIn: 60*15
      }),
      this.jwtServ.signAsync({
        userId,
        email
      }, {
        secret: process.env.JWT_SECRET_REFRESH_KEY,
        expiresIn: 60*60*24*7
      })
    ]);

    return {
      access_token,
      refresh_token
    };
  }

  async updateRtHash(userId: number, rt: string) {
    const hash = await this.hashData(rt);
    this.userService.updateHashedRefreshToken(userId,hash);
  }

  async signUp(payload: CreateUserDto): Promise<TTokens> {
    const hashPass = await this.hashData(payload.password);

    let data = {
      ...payload,
      password: hashPass
    }

    const newUser = await this.userService.create(data);

    const tokens = await this.getTokens(newUser.id,newUser.email);

    return tokens
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

  async logout() {

  }

  async refreshToken() {

  }
}