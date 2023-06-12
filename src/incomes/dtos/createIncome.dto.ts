import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateIncomeDto {
    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsNumber()
    amount: number

    @IsNotEmpty()
    @IsNumber()
    creditCardId: number

    @IsNotEmpty()
    @IsString()
    description: string
}