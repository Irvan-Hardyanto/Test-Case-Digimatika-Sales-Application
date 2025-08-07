import { Global, Module } from "@nestjs/common";
import { AuthService } from '../services/auth.service';
import { AuthController } from "src/controllers/auth.controller";
import { UserService } from "src/services/user.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/models/user.entity";
import { AccessTokenJWT, RefreshTokenJWT } from "src/strategies";


@Global()
@Module({
  imports:[TypeOrmModule.forFeature([User]),JwtModule.register({})],
  providers: [AuthService,JwtService,UserService,AccessTokenJWT,RefreshTokenJWT],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule{};