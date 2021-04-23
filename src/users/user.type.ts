import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('user')
export class UserType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
