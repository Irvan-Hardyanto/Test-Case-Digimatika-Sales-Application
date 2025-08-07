import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/payloads/user/create-user.dto';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
@Controller('users')
export class UserController {
  constructor(private authService: AuthService) {}

  @Post()
  async create(@Body() request: CreateUserDto) {
    try {
      await this.authService.signUp(request);
      return {
        message: "user created!",
        status: HttpStatus.CREATED
      }
    } catch (error){
      let msg = "An Error has been occured";

      console.error(error);
      if (error.code === '23505') {
        msg = "this email is already used!"
      }
      throw new HttpException(msg,HttpStatus.BAD_REQUEST);
    }
  }
}