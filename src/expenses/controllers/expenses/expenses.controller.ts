import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ExpensesService } from 'src/expenses/services/expenses/expenses.service';

@Controller('expenses')
export class ExpensesController {

    constructor(private readonly expensesService: ExpensesService){}

    @Get()
    getExpenses(){
        return this.expensesService.getExpenses()
    }

    @Get(":id")
    getExpense(@Param("id") id: number){
        return this.expensesService.getExpense()
    }

    @Post()
    createExpense(@Body() expenseData){
        const {title, amount, description} = expenseData
        console.log(title, amount, description)
        return this.expensesService.createExpense()
    }

    @Patch(":id")
    updateExpense(@Body() updateExpenseData, @Param("id") id: number){
        const {type, amount, description} = updateExpenseData
        console.log(type, amount, description, id)
        return this.expensesService.updateExpense()
    }

    @Delete(":id")
    deleteExpense(@Param("id") id: number){
        console.log(id)
        return this.expensesService.deleteExpense()
    }

    

}
