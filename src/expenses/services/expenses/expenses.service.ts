import { Injectable } from '@nestjs/common';

const expenses = [
  {
    type: 'Household',
    amount: 200,
    description: 'Groceries',
  },
  {
    type: 'Household',
    amount: 30,
    description: 'Fresh Water',
  },
  {
    type: 'Party',
    amount: 500,
    description: 'Friday night party out with friends',
  },
  {
    type: 'School',
    amount: 100,
    description: 'Students loan',
  },
];

let balance = 1000

@Injectable()
export class ExpensesService {
  getExpenses() {
    return expenses;
  }

  getExpense() {
    return expenses[0];
  }

  createExpense() {
    let amount = 100
    
    return 'Create Expense from service';
  }

  updateExpense() {
    return 'Updated expense from service';
  }

  deleteExpense() {
    return 'Delete expense from service';
  }
}
