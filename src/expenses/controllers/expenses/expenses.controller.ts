import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ExpensesService } from 'src/expenses/services/expenses/expenses.service';

@Controller('expenses')
export class ExpensesController {

    constructor(private readonly expensesService: ExpensesService){}

    @Get()
    getExpenses(){
        return this.expensesService.getExpenses()
    }

    @Get(":id")
    getExpense(@Param("id") id: string){
        return this.expensesService.getExpense()
    }

    @Post()
    createExpense(){
        return this.expensesService.createExpense()
    }

    @Patch()
    updateExpense(){
        return this.expensesService.updateExpense()
    }

    @Delete()
    deleteExpense(){
        return this.expensesService.deleteExpense()
    }



}
