import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TJwtPayload } from "src/types";

@Injectable()
export class AccessTokenJWT extends PassportStrategy(Strategy,'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY
    });
  }

  //payload is the object from decoded accesstoken
  validate(payload: TJwtPayload) {
    console.log("payload are: ",payload);
    return payload;
  }
}