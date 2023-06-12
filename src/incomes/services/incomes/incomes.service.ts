import { Injectable } from '@nestjs/common';
import { CreateIncomeParams, UpdateIncomeParams } from 'src/utils/types';

@Injectable()
export class IncomesService {

    getIncomes(){
        try {
            const incomes = "SERVICE: All incomes"
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


    createIncome(incomeData: CreateIncomeParams){
        try {
            const income = `SERVICE: create income with body request: ${incomeData}`
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
