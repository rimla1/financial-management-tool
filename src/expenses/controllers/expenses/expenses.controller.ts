import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('expenses')
export class ExpensesController {
    @Get()
    getExpenses(){
        return "All Expneses"
    }

    @Post()
    createExpense(){
        return "Create Expense"
    }

    @Patch()
    updateExpense(){
        return "Updated expense"
    }

    @Delete()
    deleteExpense(){
        return "Delete expense"
    }



}
