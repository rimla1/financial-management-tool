import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit_card } from 'src/typeorm/entities/credit-card.entity';
import { CreditCardsController } from './controllers/credit-cards/credit-cards.controller';
import { CreditCardsService } from './services/credit-cards/credit-cards.service';

@Module({
  imports: [TypeOrmModule.forFeature([Credit_card])],
  controllers: [CreditCardsController],
  providers: [CreditCardsService]
})
export class CreditCardsModule {}
