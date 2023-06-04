import { Body, Controller, Get, Put } from '@nestjs/common';
import { SetBalanceDto } from 'src/balance/dtos/setBalance.dto';
import { BalanceService } from 'src/balance/services/balance/balance.service';

@Controller('balance')
export class BalanceController {

    constructor(private readonly balanceService: BalanceService){}

    @Get()
    async getBalance(){
        return this.balanceService.getBalance()
    }

    @Put()
    setBalance(@Body() balanceData: SetBalanceDto){
        const {balance} = balanceData
        return this.balanceService.setBalance(balance)
    }

}
