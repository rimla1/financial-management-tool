import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credit_card } from 'src/typeorm/entities/credit-card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreditCardsService {
  constructor(
    @InjectRepository(Credit_card)
    private creditCardRepository: Repository<Credit_card>,
  ) {}

  async getCreditCards() {
    const creditCard = await this.creditCardRepository.find();
    if(!creditCard){
      throw new Error("No credit card found!")
    }
    return creditCard
  }

  async getCreditCard(id: number) {
    const creditCard = await this.creditCardRepository.findOne({
      where: { id: id },
    });
    if(!creditCard){
      throw new HttpException("No Credit Card found!", HttpStatus.NOT_FOUND)
    }
    return creditCard;
  }

  async createCreditCard(creditCardInfo) {
    const creditCard = this.creditCardRepository.create(creditCardInfo);
    return await this.creditCardRepository.save(creditCard);
  }

  async updateCreditCard(id: number, creditCardInfo: any) {
    const creditCard = await this.creditCardRepository.update(
      { id },
      { ...creditCardInfo },
    );
    return creditCard;
  }

  async updateCreditCardByExpense(id: number, amount: number){
    const creditCard = await this.creditCardRepository.update(
      { id },
      { amount },
    );
    return creditCard
  }

  // async updateCreditCardByUpdatedExpense(id: number, amount: number){

  // }

  deleteCreditCard(id: number) {
    return this.creditCardRepository.delete({ id });
  }

  // helper method
  async sumOfAllAmountsOfCards() {
    const balance = await this.creditCardRepository.sum('amount');
    return balance;
  }

  async substractFromCreditCard(id: number, amount: number) {
    const creditCard = await this.getCreditCard(id);
    if (!creditCard) {
      throw new Error('No credit card found');
    }
    const newBalance = creditCard.amount - amount;
    await this.updateCreditCardByExpense(id, newBalance);
    return 'CreditCard Updated!';
  }
}
