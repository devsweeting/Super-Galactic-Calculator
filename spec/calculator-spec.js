import { planetAge } from './../src/calculator.js';

describe('planetAge', function() {

  it('it will calculate a users age', function() {
    let userBirthday = ('March 14, 1995 03:24:00')
    let user = new planetAge(userBirthday);
    let age = user.calcAge()
    expect(age).toEqual(23)
  });

  it('it will calculate a users age on Mercury', function() {
    let userBirthday = ('03-14-1995')
    let birthday = new Date(userBirthday)
    let birthdayObj = new planetAge(birthday);
    let planet = .24
    let ageMercury = birthdayObj.calcPlanetAge(planet)
    expect(ageMercury).toEqual('95.83')
  })

  it('it will calculate a users age on Venus', function() {
    let userBirthday = ('03-14-1995')
    let birthday = new Date(userBirthday)
    let birthdayObj = new planetAge(birthday);
    let planet = .62
    let ageVenus = birthdayObj.calcPlanetAge(planet)
    expect(ageVenus).toEqual('37.10')
  })

  it('it will calculate a users age on Mars', function() {
    let userBirthday = ('03-14-1995')
    let birthday = new Date(userBirthday)
    let birthdayObj = new planetAge(birthday);
    let planet = 1.88
    let ageMars = birthdayObj.calcPlanetAge(planet)
    expect(ageMars).toEqual('12.23')
  })

  it('it will calculate a users age on Jupiter', function() {
    let userBirthday = ('03-14-1995')
    let birthday = new Date(userBirthday)
    let birthdayObj = new planetAge(birthday);
    let planet = 11.68
    let ageJupiter = birthdayObj.calcPlanetAge(planet)
    expect(ageJupiter).toEqual('1.97')
  })

  it('it will calculate a users life expectancy on Mercury', function() {
    let userBirthday = ('03-14-1995')
    let birthday = new Date(userBirthday)
    let birthdayObj = new planetAge(birthday);
    let planet = .24;
    let ageJupiter = birthdayObj.calcPlanetAge(planet)
    const planetLifeExpect = birthdayObj.planetLifeExpectancy(planet);
    expect(planetLifeExpect).toEqual('232.08')
  })

  it('it will calculate a users life expectancy on Venus', function() {
    let userBirthday = ('03-14-1995')
    let birthday = new Date(userBirthday)
    let birthdayObj = new planetAge(birthday);
    let planet = .62
    const planetLifeExpect = birthdayObj.planetLifeExpectancy(planet);
    expect(planetLifeExpect).toEqual('89.84')
  })

  it('it will calculate a users life expectancy on Mars', function() {
    let userBirthday = ('03-14-1995')
    let birthday = new Date(userBirthday)
    let birthdayObj = new planetAge(birthday);
    let planet = 1.88
    const planetLifeExpect = birthdayObj.planetLifeExpectancy(planet);
    expect(planetLifeExpect).toEqual('29.63')
  })

  it('it will calculate a users life expectancy on Jupiter', function() {
    let userBirthday = ('03-14-1995')
    let birthday = new Date(userBirthday);
    let birthdayObj = new planetAge(birthday);
    let planet = 11.68;
    const planetLifeExpect = birthdayObj.planetLifeExpectancy(planet);
    expect(planetLifeExpect).toEqual('4.77')
  })
})
