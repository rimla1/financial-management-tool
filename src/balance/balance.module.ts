import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Balance } from 'src/typeorm/entities/balance.entity';
import { BalanceController } from './controllers/balance/balance.controller';
import { BalanceService } from './services/balance/balance.service';

@Module({
  imports: [TypeOrmModule.forFeature([Balance])],
  controllers: [BalanceController],
  providers: [BalanceService]
})
export class BalanceModule {}
