import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpensesService {

    getExpenses(){
        return "All Expneses from service"
    }


    getExpense(){
        return `Single Expense from service`
    }


    createExpense(){
        return "Create Expense from service"
    }


    updateExpense(){
        return "Updated expense from service"
    }


    deleteExpense(){
        return "Delete expense from service"
    }
}
