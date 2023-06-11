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
    async updateExpense(@Body() expenseData: UpdateExpenseDto, @Param("id", ParseIntPipe) id: number){
        try {
            const updatedExpense = await this.expensesService.updateExpense(id, expenseData)
            return updatedExpense
        } catch (e) {
            console.log(e)
        }

    }

    @Delete(":id")
    deleteExpense(@Param("id", ParseIntPipe) id: number){
        try {
            return this.expensesService.deleteExpense(id)
        } catch (e) {
            console.log(e)
        }
    }



}
