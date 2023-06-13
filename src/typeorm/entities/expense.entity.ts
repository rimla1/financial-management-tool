import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Credit_card } from './credit-card.entity';

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

    @ManyToOne(() => Credit_card, creditCard => creditCard.expenses)
    creditCard: Credit_card

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}