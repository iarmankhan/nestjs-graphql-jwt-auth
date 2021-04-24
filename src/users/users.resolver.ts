import { Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { UserEntity } from 'src/users/user.entity';

@Resolver()
export class UsersResolver {
  @Query(() => String)
  @UseGuards(JwtAuthGuard)
  async hello(@CurrentUser() user: UserEntity) {
    return `hello 👋🏻 ${user.email}`;
  }
}
