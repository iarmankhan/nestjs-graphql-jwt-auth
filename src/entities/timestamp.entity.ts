import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class Timestamp {
  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
