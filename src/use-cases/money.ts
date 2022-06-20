export class Money {
  public amount: number;
  equals(other: Money) {
    if (this.constructor !== other.constructor) {
      return false;
    }
    return this.amount === other.amount;
  }
}
