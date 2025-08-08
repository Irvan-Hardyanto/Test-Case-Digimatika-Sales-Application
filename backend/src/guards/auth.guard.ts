import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, 
ForbiddenException,} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      //access the incoming request using context.switchToHttp().getRequest() method.
      const request = context.switchToHttp().getRequest();
      //get the authorization request header
      const { authorization }: any = request.headers;
      if (!authorization || authorization.trim() === '') {
        throw new UnauthorizedException('please provide token');
      }
      const authToken = authorization.replace(/bearer/gim, '').trim();

      const resp = await this.authService.validateToken(authToken);
      request.decodedData = resp;
      return true;
    } catch (error){
      if (error instanceof UnauthorizedException) {
        throw error; // preserve 401
      }
        console.error('auth error - ', error.message);
        throw new ForbiddenException(error.message || 'session expired! Please sign In');
    }
  }
}