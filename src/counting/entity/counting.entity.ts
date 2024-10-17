import {Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Counting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp',precision:2, default: () =>'CURRENT_TIMESTAMP(2)' })
  create_dt: Date;
}