export abstract class Money {
  public amount: number;
  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }
  static euro(amount: number): Money {
    return new Euro(amount);
  }
  equals(other: Money) {
    if (this.constructor !== other.constructor) {
      return false;
    }
    return this.amount === other.amount;
  }
  abstract times(multiplier: number): Money;
}

export class Dollar extends Money {
  constructor(amount: number) {
    super();
    super.amount = amount;
  }
  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}

export class Euro extends Money {
  constructor(amount: number) {
    super();
    super.amount = amount;
  }
  times(multiplier: number): Euro {
    return new Euro(this.amount * multiplier);
  }
}
