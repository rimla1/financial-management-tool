import { IsOptional } from 'class-validator'

export class UpdateExpenseDto {
    type?: string
    amount?: number
    description?: string

}