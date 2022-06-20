export abstract class Money {
  public amount: number;
  public _currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }
  static dollar(amount: number): Dollar {
    return new Dollar(amount, 'USD');
  }
  static euro(amount: number): Money {
    return new Euro(amount, 'EUR');
  }
  equals(other: Money) {
    if (this.constructor !== other.constructor) {
      return false;
    }
    return this.amount === other.amount;
  }
  abstract times(multiplier: number): Money;
  currency(): string {
    return this._currency;
  }
}

export class Dollar extends Money {
  times(multiplier: number): Dollar {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Euro extends Money {
  times(multiplier: number): Euro {
    return Money.euro(this.amount * multiplier);
  }
}
