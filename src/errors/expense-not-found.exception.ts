import { NotFoundException } from '@nestjs/common';

export class ExpenseNotFoundException extends NotFoundException {
    constructor() {
        super('Expense not found');
      }
}