import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private users = [
    { username: 'John Doe', email: 'john.doe@example.com' },
    { username: 'Jane Smith', email: 'jane.smith@example.com' },
    { username: 'Alice Johnson', email: 'alice.johnson@example.com' },
  ];

  fetchUsers() {
    return this.users;
  }
  createUser(userDetails: CreateUserType) {
    this.users.push(userDetails);
  }
  fetchUserById(id: number) {
    return this.users[id];
  }
}
