import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceService } from 'src/balance/services/balance/balance.service';
import { CreditCardsService } from 'src/credit-cards/services/credit-cards/credit-cards.service';
import { Balance } from 'src/typeorm/entities/balance.entity';
import { Credit_card } from 'src/typeorm/entities/credit-card.entity';
import { Expense } from 'src/typeorm/entities/expense.entity';
import { ExpensesController } from './controllers/expenses/expenses.controller';
import { ExpensesService } from './services/expenses/expenses.service';

@Module({
    imports: [TypeOrmModule.forFeature([Balance, Credit_card, Expense])],
    controllers: [ExpensesController],
    providers: [ExpensesService, BalanceService, CreditCardsService],
})
export class ExpensesModule {}
