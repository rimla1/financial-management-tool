import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditCardsService } from 'src/credit-cards/services/credit-cards/credit-cards.service';
import { Balance } from 'src/typeorm/entities/balance.entity';
import { Credit_card } from 'src/typeorm/entities/credit-card.entity';
import { BalanceController } from './controllers/balance/balance.controller';
import { BalanceService } from './services/balance/balance.service';

@Module({
  imports: [TypeOrmModule.forFeature([Balance, Credit_card])],
  controllers: [BalanceController],
  providers: [BalanceService, CreditCardsService]
})
export class BalanceModule {}
