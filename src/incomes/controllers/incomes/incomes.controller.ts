import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

@Controller('incomes')
export class IncomesController {
    @Get()
    getIncomes(){
        try {
            const incomes = "All incomes"
            return incomes
        } catch (e) {
            console.log(e)
        }
    }


    @Get(":id")
    getIncome(@Param("id", ParseIntPipe) id: number){
        try {
            const income = `"one single income with id: ${id} and typeof is: ${typeof(id)}"`
            return income
        } catch (e) {
            console.log(e)
        }
    }

    @Post()
    createIncome(@Body() incomeData){
        try {
            const income = `create income with body request: ${incomeData}`
            return income
        } catch (e) {
            console.log(e)
        }
    }

    @Patch()
    updateIncome(@Body() incomeData){
        try {
            const income = "update income"
            return income
        } catch (e) {
            console.log(e)
        }
    }

    @Delete(":id")
    deleteIncome(@Param("id", ParseIntPipe) id: number ){
        try {
            const income = `deleted income with id: ${id}, type for id is: ${typeof(id)}`
            return income
        } catch (e) {
            console.log(e)
        }
    }

}
