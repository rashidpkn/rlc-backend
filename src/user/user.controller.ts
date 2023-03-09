import { Controller, Post, Body, Get } from '@nestjs/common';
import { User } from 'src/database/model/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/signup')
  create(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: string
  ) {
    return this.userService.create(username, email, password, role)
  }

  @Post('/signin')
  login(
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    return this.userService.login(email, password)
  }

  @Post('/delete')
  delete() {
    return this.userService.delete()
  }

  @Post('/verify')
  Verify() {
    return this.userService.verify()
  }

  @Get('')
  getAllUsers(){
    return User.findAll()
  }

}
