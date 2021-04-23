import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from 'src/config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UsersModule],
})
export class AppModule {}
