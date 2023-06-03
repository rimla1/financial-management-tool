import { IsNotEmpty, IsNumber } from 'class-validator';

export class SetBalanceDto{
    @IsNumber()
    @IsNotEmpty()
    balance: number
}