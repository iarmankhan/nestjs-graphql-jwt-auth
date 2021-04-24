import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from 'src/users/user.entity';

import * as bcrypt from 'bcrypt';
import { AuthCredentialsInput } from 'src/auth/auth-credentials.input';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(UserEntity)
export class AuthRepository extends Repository<UserEntity> {
  async register(credentials: AuthCredentialsInput): Promise<string> {
    const { email, password } = credentials;

    const user = new UserEntity();
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await AuthRepository.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }

    return email;
  }

  async validateUserPassword(
    credentials: AuthCredentialsInput,
  ): Promise<string> {
    const { email, password } = credentials;
    const user = await this.findOne({ email });

    if (user && (await user.validatePassword(password))) {
      return user.email;
    }

    return null;
  }

  private static async hashPassword(
    password: string,
    salt: string,
  ): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
