import { Module } from '@nestjs/common';
import { ExpensesController } from './controllers/expenses/expenses.controller';

@Module({
    imports: [],
    controllers: [ExpensesController],
    providers: [],
})
export class ExpensesModule {}
