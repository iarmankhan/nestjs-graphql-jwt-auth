import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthCredentialsInput } from 'src/auth/auth-credentials.input';
import { AuthService } from 'src/auth/auth.service';

@Resolver(() => String)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  async login(@Args('credentials') credentials: AuthCredentialsInput) {
    return this.authService.login(credentials);
  }

  @Mutation(() => String)
  async register(@Args('credentials') credentials: AuthCredentialsInput) {
    return this.authService.register(credentials);
  }
}
