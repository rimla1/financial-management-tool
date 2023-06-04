import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Balance } from 'src/typeorm/entities/balance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BalanceService {

    constructor(@InjectRepository(Balance) private balanceRepository: Repository<Balance>){}

    async getBalance(){
        const balance = await this.balanceRepository.find()
        console.log(balance[0], "Balance je ovoliko")
        return 500
    }

    setBalance(balance): number {
        console.log(balance, typeof(balance))
        return balance
    }
}
