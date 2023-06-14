import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateIncomeDto } from 'src/incomes/dtos/createIncome.dto';
import { UpdateIncomeDto } from 'src/incomes/dtos/updateIncome.dto';
import { IncomesService } from 'src/incomes/services/incomes/incomes.service';

@Controller('incomes')
export class IncomesController {

    constructor(private readonly incomesService: IncomesService){}

    @Get()
    async getIncomes(){
        try {
            const incomes = await this.incomesService.getIncomes()
            if(!incomes){
                throw new NotFoundException("Incomes not found!")
            }
            return incomes
        } catch (e) {
            console.log(e)
        }
    }


    @Get(":id")
    async getIncome(@Param("id", ParseIntPipe) id: number){
        try {
            const income = await this.incomesService.getIncome(id)
            return income
        } catch (e) {
            console.log(e)
        }
    }

    @Post()
    async createIncome(@Body() incomeData: CreateIncomeDto){
        try {
            const income = await this.incomesService.createIncome(incomeData)
            return income
        } catch (e) {
            console.log(e)
        }
    }

    @Patch(":id")
    async updateIncome(@Body() incomeData: UpdateIncomeDto, @Param("id", ParseIntPipe) id: number){
        try {
            const income = await this.incomesService.updateIncome(id, incomeData)
            return income
        } catch (e) {
            console.log(e)
        }
    }

    @Delete(":id")
    async deleteIncome(@Param("id", ParseIntPipe) id: number ){
        try {
            const income = await this.incomesService.deleteIncome(id)
            return income
        } catch (e) {
            console.log(e)
        }
    }

}
