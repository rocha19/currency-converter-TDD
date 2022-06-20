import { Euro } from '@/use-cases';

describe('Euro', () => {
  it('Should return 10 when five euros are multiplied by two and 15 when miltiplier by three', () => {
    const five = new Euro(5);
    expect(five.times(2).equals(new Euro(10))).toBeTruthy();
    expect(five.times(3).equals(new Euro(15))).toBeTruthy();
  });
});
