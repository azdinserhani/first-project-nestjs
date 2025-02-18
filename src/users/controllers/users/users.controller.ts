import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {


    @Post()
    createUser(@Body() createUser: CreateUserDto) { 
        
        
    }
    
    @Get()
    getUsers() { }
    
    @Get()
    getUserByID() { }
    

}
