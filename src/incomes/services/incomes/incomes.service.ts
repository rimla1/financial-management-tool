import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from 'src/typeorm/entities/income.entity';
import { CreateIncomeParams, UpdateIncomeParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class IncomesService {

    constructor(@InjectRepository(Income) private readonly incomeRepository: Repository<Income>){}

    async getIncomes(){
        try {
            const incomes = await this.incomeRepository.find()
            return incomes
        } catch (e) {
            console.log(e)
        }
    }



    getIncome(id: number){
        try {
            const income = `SERVICE: one single income with id: ${id} and typeof is: ${typeof(id)}`
            return income
        } catch (e) {
            console.log(e)
        }
    }


    async createIncome(incomeData: CreateIncomeParams){
        try {
            const income = await this.incomeRepository.create(incomeData)
            await this.incomeRepository.save(income)
            return income
        } catch (e) {
            console.log(e)
        }
    }


    updateIncome(id: number, incomeData: UpdateIncomeParams){
        try {
            const income = `SERVICE: updated income with id: ${id}, type for id is: ${typeof(id)}, incomeData: ${incomeData}`
            return income
        } catch (e) {
            console.log(e)
        }
    }


    deleteIncome( id: number ){
        try {
            const income = `SERVICE: deleted income with id: ${id}, type for id is: ${typeof(id)}`
            return income
        } catch (e) {
            console.log(e)
        }
    }
}