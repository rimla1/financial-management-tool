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



@Injectable()
export class ExpensesService {
  getExpenses() {
    return expenses;
  }

  getExpense() {
    return expenses[0];
  }

  createExpense(expenseData: any) {
    // Get Balance from database
    let balance = 1000
    // Balance - Expense amount 
    let newBalance = balance - expenseData.amount
    console.log(`service ${newBalance}`)

    // Update Balance

    // Create Expense
    
    return 'Create Expense from service';
  }

  updateExpense() {
    return 'Updated expense from service';
  }

  deleteExpense() {
    return 'Delete expense from service';
  }
}
