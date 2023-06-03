import { Injectable } from '@nestjs/common';

@Injectable()
export class BalanceService {
    getBalance(): number{
        return 500
    }

    updateBalance(balance): number {
        console.log(balance, typeof(balance))
        return balance
    }
}
