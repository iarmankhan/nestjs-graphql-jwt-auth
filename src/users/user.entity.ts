import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from 'src/entities/timestamp.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  mobile: string;

  @Column({ default: false })
  isActive: boolean;

  @Column(() => Timestamp)
  date: Timestamp;
}
