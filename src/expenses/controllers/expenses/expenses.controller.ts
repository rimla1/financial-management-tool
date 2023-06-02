import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateExpenseDto } from 'src/expenses/dtos/createExpense.dto';
import { UpdateExpenseDto } from 'src/expenses/dtos/updateExpense.dto';
import { ExpensesService } from 'src/expenses/services/expenses/expenses.service';

@Controller('expenses')
export class ExpensesController {

    constructor(private readonly expensesService: ExpensesService){}

    @Get()
    getExpenses(){
        try {
            return this.expensesService.getExpenses()
        } catch (e) {
            console.log(e)
        }
    }

    @Get(":id")
    getExpense(@Param("id") id: number){
        try {
            return this.expensesService.getExpense()
        } catch (e) {
            console.log(e)
        }

    }

    @Post()
    createExpense(@Body() expenseData: CreateExpenseDto){
        try {
            console.log(expenseData)
            return this.expensesService.createExpense(expenseData)
        } catch (e) {
            console.log(e)
        }
       
    }

    @Patch(":id")
    updateExpense(@Body() expenseData: UpdateExpenseDto, @Param("id") id: number){
        try {
            return this.expensesService.updateExpense()
        } catch (e) {
            console.log(e)
        }

    }

    @Delete(":id")
    deleteExpense(@Param("id") id: number){
        try {
            return this.expensesService.deleteExpense()
        } catch (e) {
            console.log(e)
        }
    }



}
