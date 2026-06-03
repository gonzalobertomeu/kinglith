import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ default: true })
  isActive: boolean;
  @Column({ default: false })
  isValidated: boolean;
  @Column({ default: new Date() })
  createdAt: Date;
}
