import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from 'src/users/user.entity';

import * as bcrypt from 'bcrypt';
import { AuthCredentialsInput } from 'src/auth/auth-credentials.input';

@EntityRepository(UserEntity)
export class AuthRepository extends Repository<UserEntity> {
  async validateUserPassword(credentials: AuthCredentialsInput) {
    const { email, password } = credentials;
    const user = await this.findOne({ email });

    if (user && (await user.validatePassword(password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, salt, ...newUser } = user;
      return newUser;
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
