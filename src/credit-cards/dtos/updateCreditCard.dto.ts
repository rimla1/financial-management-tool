import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateCreditCardDto {
    @IsString()
    @IsOptional()
    title: string

    @IsNumber()
    @IsOptional()
    amount: number
}