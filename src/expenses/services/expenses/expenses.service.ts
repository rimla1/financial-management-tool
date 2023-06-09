import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BalanceService } from 'src/balance/services/balance/balance.service';
import { CreditCardsService } from 'src/credit-cards/services/credit-cards/credit-cards.service';
import { Expense } from 'src/typeorm/entities/expense.entity';
import { Repository } from 'typeorm';

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

  async updateExpense(id, expenseData) {
    const expense = await this.expenseRepository.findOne({where: {id: id}})
    if(!expense){
      throw new Error("No Expense found!")
    }
    const creditCard = await this.creditCardsService.getCreditCard(expense.creditCardId)

    if(expenseData.creditCardId !== expense.creditCardId){
      return "Menjate expense sa jedne na drugu karticu!"
    } else {
      const newBalance = creditCard.amount + expense.amount - expenseData.amount
      await this.creditCardsService.updateCreditCardByExpense(creditCard.id, newBalance)
    }

    await this.expenseRepository.update({id}, {...expenseData})
    return 'Updated expense from service';
  }

  deleteExpense() {
    return 'Delete expense from service';
  }
}
