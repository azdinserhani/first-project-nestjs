import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { UserService } from './user.service';
import { UsersMiddleware } from './users.middleware';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
      .forRoutes({ path: 'users/*splat', method: RequestMethod.POST });
  }
}
