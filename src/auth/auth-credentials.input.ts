import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class AuthCredentialsInput {
  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Field()
  password: string;
}
