import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credit_card } from 'src/typeorm/entities/credit-card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreditCardsService {

    constructor(@InjectRepository(Credit_card) private creditCardRepository: Repository<Credit_card>){}

    getCreditCards(){
        return this.creditCardRepository.find() 
    }

    getCreditCard(id){
        console.log("service", id, typeof(id))
        const creditCard = {title: "Credit Card X", balance: 750}
        return creditCard
    }

    async createCreditCard(creditCardInfo){
        const creditCard = this.creditCardRepository.create(creditCardInfo)
        return await this.creditCardRepository.save(creditCard)
    }

    updateCreditCard(id: number, creditCardInfo: any){
        console.log("Service: ", id, typeof(id), creditCardInfo, typeof(creditCardInfo))
        const creditCard = {title: "Credit Card P", balance: 15000}
        return creditCard
    }

    deleteCreditCard(id: number){
        return this.creditCardRepository.delete({id})
    }

    // helper method
    async sumOfAllAmountsOfCards(){
        const balance = await this.creditCardRepository.sum("amount")
        return balance
    }

}
