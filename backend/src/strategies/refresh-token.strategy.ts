import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TJwtPayload } from "src/types";

@Injectable()
export class RefreshTokenJWT extends PassportStrategy(Strategy,"jwt-refresh") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_REFRESH_KEY,
      passReqToCallback: true//keep the refresh token on the payload
    });
  }
  
  //payload is the object from decoded accesstoken
  validate(req: Request, payload: TJwtPayload) {
    const refreshToken = req.get('authorization').replace('Bearer','').trim();
    return {
      ...payload,
      refreshToken
    };
  }
}