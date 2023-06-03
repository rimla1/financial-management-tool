import { Module } from '@nestjs/common';
import { BalanceController } from './controllers/balance/balance.controller';
import { BalanceService } from './services/balance/balance.service';

@Module({
  controllers: [BalanceController],
  providers: [BalanceService]
})
export class BalanceModule {}
