import { UsersService } from './users.service';
import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() request: CreateUserRequest) {
    return this.UsersService.createUser(request);
  }
}
