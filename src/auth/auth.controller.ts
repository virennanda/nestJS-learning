import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto) {
    console.log(authCredentialsDto);
  }
}
