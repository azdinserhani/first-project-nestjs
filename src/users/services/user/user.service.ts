import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      username: 'JohnDoe',
      email: 'john.doe@example.com',
      age: 30,
      phone: 1234567890,
      password: 'password123',
    },
    {
      id: 2,
      username: 'JaneSmith',
      email: 'jane.smith@example.com',
      age: 25,
      phone: 2345678901,
      password: 'password456',
    },
    {
      id: 3,
      username: 'AliceJohnson',
      email: 'alice.johnson@example.com',
      age: 28,
      phone: 3456789012,
      password: 'password789',
    },
  ];

  createUser(newUser: CreateUserType) {
    return this.users.push(newUser);
  }
}
