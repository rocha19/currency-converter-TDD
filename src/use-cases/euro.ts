export class Euro {
  constructor(private readonly amount: number) {}
  times(multiplier: number): Euro {
    return new Euro(this.amount * multiplier);
  }
  equals(other: Euro) {
    return this.amount === other.amount;
  }
}