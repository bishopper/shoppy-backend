import { UsersService } from './users.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  createUser(@Body() request: CreateUserRequest) {
    return this.UsersService.createUser(request);
  }
}
