import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Balance {
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: 0})
    balance: number
}