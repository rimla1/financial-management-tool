import { Controller, Get } from '@nestjs/common';

@Controller('expenses')
export class ExpensesController {
    @Get()
    getExpenses(){
        return "All Expneses"
    }
}
