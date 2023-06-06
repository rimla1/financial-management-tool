import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditCardsService } from 'src/credit-cards/services/credit-cards/credit-cards.service';
import { Balance } from 'src/typeorm/entities/balance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(Balance) private balanceRepository: Repository<Balance>,
    private readonly creditCardsService: CreditCardsService
  ) {}

  async getBalance() {
    const balance = await this.creditCardsService.sumOfAllAmountsOfCards()
    if(!balance){
      return 0
    }
    return balance;
  }
}
