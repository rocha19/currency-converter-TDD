import { Dollar, Euro } from '@/use-cases';

describe('Money', () => {
  it('Should return 10 when five dollars are multiplied by two and 15 when miltiplier by three', () => {
    const five = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
  });
  it('Should return 10 when five euros are multiplied by two and 15 when miltiplier by three', () => {
    const five = new Euro(5);
    expect(five.times(2).equals(new Euro(10))).toBeTruthy();
    expect(five.times(3).equals(new Euro(15))).toBeTruthy();
  });
  it('should return thre when dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});
