import { Module } from '@nestjs/common';

import { UsersController } from './users/controllers/users/users.controller';
import { UserService } from './users/services/user/user.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService],
})
export class AppModule {}
