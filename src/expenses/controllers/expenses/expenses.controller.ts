import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
    getExpense(@Param("id", ParseIntPipe) id: number){
        try {
            return this.expensesService.getExpense(id)
        } catch (e) {
            console.log(e)
        }

    }

    @Post()
    async createExpense(@Body() expenseData: CreateExpenseDto){
        try {
            const expense = await this.expensesService.createExpense(expenseData)
            return expense
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
