import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { BalanceModule } from './balance/balance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Balance } from './typeorm/entities/balance.entity';
import { CreditCardsModule } from './credit-cards/credit-cards.module';
import { Credit_card } from './typeorm/entities/credit-card.entity';
import { Expense } from './typeorm/entities/expense.entity';
import { IncomesModule } from './incomes/incomes.module';
import { Income } from './typeorm/entities/income.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres', 
    host: 'localhost', 
    port: 5432, 
    username: 'almirmuminovic', 
    password: 'pass123', 
    database: 'financial-managment-tool', 
    entities: [Balance, Credit_card, Expense, Income],
    synchronize: true,
  }),ExpensesModule, BalanceModule, CreditCardsModule, IncomesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
