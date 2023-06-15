import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditCardsService } from 'src/credit-cards/services/credit-cards/credit-cards.service';
import { Credit_card } from 'src/typeorm/entities/credit-card.entity';
import { Income } from 'src/typeorm/entities/income.entity';
import { IncomesController } from './controllers/incomes/incomes.controller';
import { IncomesService } from './services/incomes/incomes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Income, Credit_card])],
  controllers: [IncomesController],
  providers: [IncomesService, CreditCardsService]
})
export class IncomesModule {}
