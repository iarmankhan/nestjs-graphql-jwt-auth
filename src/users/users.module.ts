import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from 'src/users/users.resolver';

@Module({
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
