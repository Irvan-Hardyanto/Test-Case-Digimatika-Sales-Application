import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "src/controllers/user.controller";
import { User } from "src/models/user.entity";
import { AuthService } from "src/services/auth.service";
import { UserService } from "src/services/user.service";

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [UserService,AuthService],
  controllers: [UserController]
})
export class UserModule {}