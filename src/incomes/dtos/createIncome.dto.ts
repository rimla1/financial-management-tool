import { IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator'
import { PositiveNumberConstraint } from 'src/utils/isPositiveNumberValidator'

export class CreateIncomeDto {
    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsNumber()
    @Validate(PositiveNumberConstraint)
    amount: number

    @IsNotEmpty()
    @IsNumber()
    baklava: number

    @IsNotEmpty()
    @IsString()
    description: string
}