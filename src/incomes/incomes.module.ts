import { Module } from '@nestjs/common';
import { IncomesController } from './controllers/incomes/incomes.controller';

@Module({
  controllers: [IncomesController]
})
export class IncomesModule {}
