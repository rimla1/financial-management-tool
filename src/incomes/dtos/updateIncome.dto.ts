import { PartialType } from '@nestjs/mapped-types'
import { CreateIncomeDto } from './createIncome.dto'

export class UpdateIncomeDto extends PartialType(CreateIncomeDto){}