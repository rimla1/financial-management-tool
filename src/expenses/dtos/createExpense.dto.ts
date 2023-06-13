import { IsIn, IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator'
import { PositiveNumberConstraint } from 'src/utils/isPositiveNumberValidator'



export class CreateExpenseDto {
    @IsNotEmpty()
    @IsString()
    @IsIn(['Groceries', 'Gym', 'Apartment', 'Holiday', 'Party', 'Other'])
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