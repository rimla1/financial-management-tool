import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Expense } from './expense.entity';
import { Income } from './income.entity';


@Entity()
export class Credit_card {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    amount: number

    @OneToMany(() => Income, income => income.creditCard)
    incomes: Income[];

    @OneToMany(() => Expense, expense => expense.creditCard)
    expenses: Expense[];

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}