import { ageCalc } from './calculator.js';

describe('ageCalc', function() {

  it('it will return the users age in Mercury Years', function() {
    const userAge = 20
    const age = new ageCalc(userAge)
    const planetAge = calcMercuryAge(age)
    expect(planetAge).toEqual()
  })
})
