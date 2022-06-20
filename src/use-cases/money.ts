export class Money {
  public amount: number;
  equals(other: Money) {
    return this.amount === other.amount;
  }
}
