import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceService } from 'src/balance/services/balance/balance.service';
import { Balance } from 'src/typeorm/entities/balance.entity';
import { ExpensesController } from './controllers/expenses/expenses.controller';
import { ExpensesService } from './services/expenses/expenses.service';

@Module({
    imports: [TypeOrmModule.forFeature([Balance])],
    controllers: [ExpensesController],
    providers: [ExpensesService, BalanceService],
})
export class ExpensesModule {}
