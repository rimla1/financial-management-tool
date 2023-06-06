import { Module } from '@nestjs/common';
import { CreditCardsController } from './controllers/credit-cards/credit-cards.controller';
import { CreditCardsService } from './services/credit-cards/credit-cards.service';

@Module({
  controllers: [CreditCardsController],
  providers: [CreditCardsService]
})
export class CreditCardsModule {}
