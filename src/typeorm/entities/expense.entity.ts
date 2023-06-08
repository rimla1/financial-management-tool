import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @Column()
    amount: number

    @Column()
    description: string

    @Column()
    creditCardId: number

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}