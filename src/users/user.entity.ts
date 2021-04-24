import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from 'src/entities/timestamp.entity';

import * as bcrypt from 'bcrypt';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 75,
    nullable: true,
  })
  firstName: string;

  @Column({ type: 'varchar', length: 75, nullable: true })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  mobile: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ default: false })
  isActive: boolean;

  @Column(() => Timestamp)
  date: Timestamp;

  public get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return this.password === hash;
  }
}
