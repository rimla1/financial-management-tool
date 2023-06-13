import { IsIn, IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator'
import { PositiveNumberConstraint } from 'src/utils/isPositiveNumberValidator'

export class CreateIncomeDto {
    @IsNotEmpty()
    @IsString()
    @IsIn(['Job', 'Part Time Job', 'Side Hustle', 'Gift', 'Other'])
    type: string

    @IsNotEmpty()
    @IsNumber()
    @Validate(PositiveNumberConstraint)
    amount: number

    @IsNotEmpty()
    @IsNumber()
    creditCardId: number

    @IsNotEmpty()
    @IsString()
    description: string
}