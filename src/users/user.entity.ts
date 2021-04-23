import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from 'src/entities/timestamp.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 75,
  })
  firstName: string;

  @Column({ type: 'varchar', length: 75 })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  mobile: string;

  @Column({ default: false })
  isActive: boolean;

  @Column(() => Timestamp)
  date: Timestamp;
}
