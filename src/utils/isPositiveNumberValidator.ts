import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'positiveNumber', async: false })
export class PositiveNumberConstraint implements ValidatorConstraintInterface {
  validate(value: number) {
    return value > 0;
  }

  defaultMessage() {
    return 'Amount must be a positive number';
  }
}