import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Medicus {
  expiration_date: string;
  refresh_token: string;
  afi_id: string;
  expires_in: number;
  access_token: string;
  token_type: string;
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: '_id' })
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'medicus' })
  medicus: Medicus;
}
