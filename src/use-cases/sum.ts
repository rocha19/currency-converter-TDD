import { Bank } from './bank'
import { Expression } from './expressiton'
import { Money } from './money'

export class Sum implements Expression {
  augend: Expression
  addend: Expression
  constructor(augend: Expression, addend: Expression) {
    this.augend = augend
    this.addend = addend
  }
  plus(addend: Expression): Expression {
    return new Sum(this, addend)
  }
  reduce(bank: Bank, to: string): Money {
    const amount =
      this.augend.reduce(bank, to).amount() +
      this.addend.reduce(bank, to).amount()
    return new Money(amount, to)
  }
  times(multiplier: number): Expression {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
  }
}
