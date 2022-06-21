import { Expression } from './expressiton'
import { Sum } from './sum'

export class Money implements Expression {
  private readonly _amount: number
  private readonly _currency: string
  constructor(amount: number, currency: string) {
    this._amount = amount
    this._currency = currency
  }
  static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }
  static euro(amount: number): Money {
    return new Money(amount, 'EUR')
  }
  equals(other: Money) {
    if (this._currency !== other._currency) {
      return false
    }
    return this.amount === other.amount
  }
  times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency)
  }
  plus(addend: Money): Expression {
    return new Sum(this, addend)
  }
  reduce(to: string): Money {
    return this
  }
  currency(): string {
    return this._currency
  }

  amount(): number {
    return this._amount
  }
}
