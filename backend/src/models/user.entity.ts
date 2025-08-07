import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("users")

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false })
  is_deleted: boolean;

  @Column()
  email: string;

  @Column()
  password: string;

  // @Column()
  // profilePicture: string;

  @CreateDateColumn({default: Date.now()})
  created_at: Date;

  @UpdateDateColumn({default: Date.now()})
  updated_at: Date;

  @Column()
  deleted_at: Date;
}