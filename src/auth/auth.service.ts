import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from 'src/auth/auth.repository';
import { AuthCredentialsInput } from 'src/auth/auth-credentials.input';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async login(credentials: AuthCredentialsInput): Promise<string> {
    const user = await this.authRepository.validateUserPassword(credentials);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { user };
    return this.jwtService.sign(payload);
  }

  async register(credentials: AuthCredentialsInput): Promise<string> {
    return this.authRepository.register(credentials);
  }
}
