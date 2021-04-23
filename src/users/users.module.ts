import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from 'src/users/users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
