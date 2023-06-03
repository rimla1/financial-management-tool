import { Body, Controller, Get, Put } from '@nestjs/common';
import { BalanceService } from 'src/balance/services/balance/balance.service';

@Controller('balance')
export class BalanceController {

    constructor(private readonly balanceService: BalanceService){}

    @Get()
    getBalance(): number{
        return this.balanceService.getBalance()
    }

    @Put()
    createBalance(@Body("balance") balance: number){
        return this.balanceService.updateBalance(balance)
    }
    
}
