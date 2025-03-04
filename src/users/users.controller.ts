import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UserService } from 'src/users/user.service';
import { ValidationLog } from 'src/users/Validations/validationLog.pipe';
import { Roles } from 'src/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    return {
      msg: 'user has been created',
    };
  }

  @Get(':id')
  getUsers(@Param('id', ValidationLog) id: number) {
    console.log('this is lo-2', id);

    return this.userService.getUsers();
  }

  @Get()
  @Roles(['admin', 'user', 'superadmin'])
  getUserByID() {}
}
