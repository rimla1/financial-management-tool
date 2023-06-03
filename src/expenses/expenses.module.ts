import { Module } from '@nestjs/common';
import { BalanceService } from 'src/balance/services/balance/balance.service';
import { ExpensesController } from './controllers/expenses/expenses.controller';
import { ExpensesService } from './services/expenses/expenses.service';

@Module({
    imports: [],
    controllers: [ExpensesController],
    providers: [ExpensesService, BalanceService],
})
export class ExpensesModule {}
