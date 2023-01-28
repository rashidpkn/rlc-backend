import { Controller, Post,Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post('/signup')
  create(
    @Body('username') username :string,
    @Body('email') email : string,
    @Body('password') password : string
  ){
    return this.userService.create(username,email,password)
  }

  @Post('/signin')
  login(){
    return this.userService.login()
  }

  @Post('/delete')
  delete(){
    return this.userService.delete() 
  }

  @Post('/verify')
  Verify(){
    return this.userService.verify()
  }

}
