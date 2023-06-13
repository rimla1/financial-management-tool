import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Credit_card } from './credit-card.entity';

@Entity()
export class Income {
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

    @ManyToOne(() => Credit_card, creditCard => creditCard.incomes)
    creditCard: Credit_card;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}