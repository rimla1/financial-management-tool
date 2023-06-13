import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from 'src/typeorm/entities/income.entity';
import { IncomesController } from './controllers/incomes/incomes.controller';
import { IncomesService } from './services/incomes/incomes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  controllers: [IncomesController],
  providers: [IncomesService]
})
export class IncomesModule {}
