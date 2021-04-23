import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from 'src/auth/auth.repository';
import { AuthCredentialsInput } from 'src/auth/auth-credentials.input';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private authRepository: AuthRepository,

    private usersService: UsersService,
  ) {}

  async login(credentials: AuthCredentialsInput) {
    return this.authRepository.validateUserPassword(credentials);
  }
}
