import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from "@nestjs/common";
import { SignInDto } from "src/payloads/auth/signin.dto";
import { AuthService } from "src/services/auth.service";
import { SignUpDto } from "src/payloads/auth/signup.dto";
import { TJwtPayload, TTokens } from "src/types";
import { AuthGuard } from "@nestjs/passport";
import type { Request } from "express";
import { Logger } from '@nestjs/common';

@Controller("auth")
export class AuthController{
  constructor(private authService: AuthService){}

  @Post("signup")
  @HttpCode(HttpStatus.CREATED)
  signup(@Body() request: SignUpDto): Promise<TTokens>{
    return this.authService.signUp(request);
  }

  @Post("signin")
  @HttpCode(HttpStatus.OK)
  signin(@Body() request: SignInDto): Promise<TTokens>{
    return this.authService.signIn(request.email,request.password);
  }

  @Post("logout")
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  logout(@Req() request: Request){
    const user = request.user;
    this.authService.logout(user['userId']);
  }
  @Post("refresh")
  @UseGuards(AuthGuard('jwt-refresh'))
  @HttpCode(HttpStatus.OK)
  refreshToken(@Req() request: Request){
    this.authService.refreshToken();
  }
}