import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateIncomeDto {
    @IsOptional()
    @IsString()
    type: string

    @IsOptional()
    @IsNumber()
    amount: number

    @IsOptional()
    @IsNumber()
    creditCardId: number

    @IsOptional()
    @IsString()
    description: string
}