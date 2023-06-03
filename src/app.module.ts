import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { BalanceModule } from './balance/balance.module';


@Module({
  imports: [ExpensesModule, BalanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
