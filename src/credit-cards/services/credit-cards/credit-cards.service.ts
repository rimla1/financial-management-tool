import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditCardsService {

    constructor(){}

    getCreditCards(){
        const creditCards = [{title: "Credit Card X", balance: 750}, {title: "Credit Card O", balance: 1000}]
        return creditCards
    }

    getCreditCard(id){
        console.log("service", id, typeof(id))
        const creditCard = {title: "Credit Card X", balance: 750}
        return creditCard
    }

    createCreditCard(creditCardInfo){
        const creditCard = {title: "Credit Card P", balance: 1000}
        return creditCard
    }

    updateCreditCard(id: number, creditCardInfo: any){
        console.log("Service: ", id, typeof(id), creditCardInfo, typeof(creditCardInfo))
        const creditCard = {title: "Credit Card P", balance: 15000}
        return creditCard
    }

    deleteCreditCard(id: number){
        const creditCard = {title: "Credit Card P", balance: 1000}
        return creditCard
    }
}
