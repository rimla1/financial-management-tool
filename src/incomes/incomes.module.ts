import { Module } from '@nestjs/common';
import { IncomesController } from './controllers/incomes/incomes.controller';
import { IncomesService } from './services/incomes/incomes.service';

@Module({
  controllers: [IncomesController],
  providers: [IncomesService]
})
export class IncomesModule {}
