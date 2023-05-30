import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('expenses')
export class ExpensesController {
    @Get()
    getExpenses(){
        return "All Expneses"
    }

    @Get(":id")
    getExpense(@Param("id") id: string){
        return `Single Expense ${id}`
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
