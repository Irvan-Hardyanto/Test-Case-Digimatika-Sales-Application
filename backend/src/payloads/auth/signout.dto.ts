import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignOutDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  access_token: string;
}