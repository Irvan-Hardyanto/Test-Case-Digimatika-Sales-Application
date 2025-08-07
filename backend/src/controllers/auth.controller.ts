import { Body, Controller, Post } from "@nestjs/common";
import { SignInDto } from "src/payloads/auth/signin.dto";
import { AuthService } from "src/services/auth.service";
import { SignUpDto } from "src/payloads/auth/signup.dto";
import { TTokens } from "src/types";

@Controller("auth")
export class AuthController{
  constructor(private authService: AuthService){}
  @Post("signup")

  signup(@Body() request: SignUpDto): Promise<TTokens>{
    return this.authService.signUp(request);
  }

  @Post("signin")
  signin(@Body() request: SignInDto){
    this.authService.signIn(request.email,request.password);
  }
  @Post("logout")
  logout(){
    this.authService.logout();
  }
  @Post("refresh")
  refreshToken(){
    this.authService.refreshToken();
  }
}