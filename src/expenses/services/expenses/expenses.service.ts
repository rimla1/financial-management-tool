import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BalanceService } from 'src/balance/services/balance/balance.service';
import { CreditCardsService } from 'src/credit-cards/services/credit-cards/credit-cards.service';
import { Expense } from 'src/typeorm/entities/expense.entity';
import { Repository } from 'typeorm';

// const expenses = [
//   {
//     type: 'Household',
//     amount: 200,
//     description: 'Groceries',
//   },
//   {
//     type: 'Household',
//     amount: 30,
//     description: 'Fresh Water',
//   },
//   {
//     type: 'Party',
//     amount: 500,
//     description: 'Friday night party out with friends',
//   },
//   {
//     type: 'School',
//     amount: 100,
//     description: 'Students loan',
//   },
// ];

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense) private expenseRepository: Repository<Expense>,
    private creditCardsService: CreditCardsService
  ) {}

  async getExpenses() {
    const expenses = await this.expenseRepository.find();
    return expenses;
  }

  async getExpense(id) {
    const expense = await this.expenseRepository.findOne({ where: { id: id } });
    return expense
  }

  async createExpense(expenseData: any) {
    // create expense
    const newExpense = await this.expenseRepository.create(expenseData);

    // substract from amount of creditCard
    await this.creditCardsService.substractFromCreditCard(expenseData.creditCardId, expenseData.amount)

    // save expense
    await this.expenseRepository.save(newExpense)

    return newExpense;
  }

  updateExpense() {
    return 'Updated expense from service';
  }

  deleteExpense() {
    return 'Delete expense from service';
  }
}
