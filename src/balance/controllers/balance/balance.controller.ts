import { Controller, Get  } from '@nestjs/common';
import { BalanceService } from 'src/balance/services/balance/balance.service';


@Controller('balance')
export class BalanceController {

    constructor(private readonly balanceService: BalanceService){}

    @Get()
    async getBalance(){
        try {
            const balance = await this.balanceService.getBalance()
            return balance
        } catch (e) {
            console.log(e)
        }
    }


}
