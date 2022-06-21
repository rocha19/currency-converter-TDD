import { Bank, Expression, Money, Sum } from '@/use-cases'

describe('Money', () => {
  it('Should handle dollar multiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2)).toEqual(Money.dollar(10))
    expect(five.times(3)).toEqual(Money.dollar(15))
  })
  it('should handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual('USD')
    expect(Money.euro(1).currency()).toEqual('EUR')
  })
  it('should return a sum when plus is used', () => {
    const five = Money.dollar(5)
    const result: Expression = five.plus(five)
    const sum = result as Sum
    expect(sum.augend).toEqual(five)
    expect(sum.addend).toEqual(five)
  })
  it('should reduce a sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4))
    const bank = new Bank()
    const result = bank.reduce(sum, 'USD')
    expect(result).toEqual(Money.dollar(7))
  })
  it('should reduce from a money', () => {
    const bank = new Bank()
    const result: Money = bank.reduce(Money.dollar(1), 'USD')
    expect(result).toEqual(Money.dollar(1))
  })
  it('should reduce from different currencies', () => {
    const bank = new Bank()
    bank.addRate('EUR', 'USD', 2)
    const result = bank.reduce(Money.euro(2), 'USD')
    expect(result).toEqual(Money.dollar(1))
  })
  it('should handle identity rate', () => {
    expect(new Bank().rate('USD', 'USD')).toEqual(1)
  })
  it('should handle mixed addition', () => {
    const fiveBucks: Money = Money.dollar(5)
    const tenEuro: Expression = Money.euro(10)
    const bank = new Bank()
    bank.addRate('EUR', 'USD', 2)
    const result = bank.reduce(fiveBucks.plus(tenEuro), 'USD')
    expect(result).toEqual(Money.dollar(10))
  })
  it('should handle the plus operation in a sum', () => {
    const fiveBucks: Money = Money.dollar(5)
    const tenEuro: Expression = Money.euro(10)
    const bank = new Bank()
    bank.addRate('EUR', 'USD', 2)
    const sum: Expression = new Sum(fiveBucks, tenEuro).plus(fiveBucks)
    const result: Money = bank.reduce(sum, 'USD')
    expect(result).toEqual(Money.dollar(15))
  })
  it('should handle the times operation in a sum', () => {
    const fiveBucks: Money = Money.dollar(5)
    const tenEuro: Expression = Money.euro(10)
    const bank = new Bank()
    bank.addRate('EUR', 'USD', 2)
    const sum: Expression = new Sum(fiveBucks, tenEuro).times(2)
    const result: Money = bank.reduce(sum, 'USD')
    expect(result).toEqual(Money.dollar(20))
  })
})
