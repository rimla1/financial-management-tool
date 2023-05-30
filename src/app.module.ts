import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesController } from './expenses/controllers/expenses/expenses.controller';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [ExpensesModule],
  controllers: [AppController, ExpensesController],
  providers: [AppService],
})
export class AppModule {}
