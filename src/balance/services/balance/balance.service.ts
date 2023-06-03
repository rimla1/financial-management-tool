import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Balance } from 'src/typeorm/entities/balance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BalanceService {

    constructor(@InjectRepository(Balance) private balanceRepository: Repository<Balance>){}

    getBalance(): number{
        return 500
    }

    setBalance(balance): number {
        console.log(balance, typeof(balance))
        return balance
    }
}
