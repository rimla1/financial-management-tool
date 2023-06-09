import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditCardsService } from 'src/credit-cards/services/credit-cards/credit-cards.service';
import { ExpenseNotFoundException } from 'src/errors/expense-not-found.exception';
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

    const newExpense = await this.expenseRepository.create(expenseData);
    await this.creditCardsService.substractFromCreditCard(expenseData.creditCardId, expenseData.amount)
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
      const balanceOfOldCreditCard = creditCard.amount + expense.amount
      await this.creditCardsService.updateCreditCardByAmount(creditCard.id, balanceOfOldCreditCard)
      const differentCreditCard = await this.creditCardsService.getCreditCard(expenseData.creditCardId)
      const balanceOfNewCreditCard = differentCreditCard.amount - expenseData.amount
      await this.creditCardsService.updateCreditCardByAmount(differentCreditCard.id, balanceOfNewCreditCard)
    } else {
      const newBalance = creditCard.amount + expense.amount - expenseData.amount
      await this.creditCardsService.updateCreditCardByAmount(creditCard.id, newBalance)
    }

    await this.expenseRepository.update({id}, {...expenseData})
    return 'Updated expense from service';
  }

  async deleteExpense(id: number) {
    const expense = await this.expenseRepository.findOne({where: {id: id}})
    if(!expense){
      throw new ExpenseNotFoundException()
    }
    const creditCard = await this.creditCardsService.getCreditCard(expense.creditCardId)
    const newCreditCardBalance = creditCard.amount + expense.amount
    await this.creditCardsService.updateCreditCardByAmount(creditCard.id, newCreditCardBalance)
    await this.expenseRepository.delete({id})
    return 'Delete expense from service';
  }
}
