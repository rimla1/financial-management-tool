import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCreditCardDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsNumber()
    amount: number
}