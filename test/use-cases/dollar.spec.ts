import { Dollar } from '@/use-cases';

describe('Dollar', () => {
  it('Should return 10 when five dollars are multiplied by two', () => {
    const five = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
  });
  it('should return thre when dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});
