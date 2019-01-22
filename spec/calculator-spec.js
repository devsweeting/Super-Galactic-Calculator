import { planetAge } from './../src/calculator.js';

describe('planetAge', function() {

  it('it will calculate a users age', function() {
    const userBirthday = ('March 14, 1995 03:24:00')
    const user = new planetAge(userBirthday);
    const age = user.calcAge()
    expect(age).toEqual(23)
  });

  it('it will calculate a users age on Mercury', function() {
    const userBirthday = ('03-14-1995')
    const birthday = new Date(userBirthday)
    const birthdayObj = new planetAge(birthday);
    const planet = .24
    const ageMercury = birthdayObj.calcPlanetAge(planet)
    expect(ageMercury).toEqual('95.83')
  })

  it('it will calculate a users age on Venus', function() {
    const userBirthday = ('03-14-1995')
    const birthday = new Date(userBirthday)
    const birthdayObj = new planetAge(birthday);
    const planet = .62
    const ageVenus = birthdayObj.calcPlanetAge(planet)
    expect(ageVenus).toEqual('37.10')
  })

  it('it will calculate a users age on Mars', function() {
    const userBirthday = ('03-14-1995')
    const birthday = new Date(userBirthday)
    const birthdayObj = new planetAge(birthday);
    const planet = 1.88
    const ageMars = birthdayObj.calcPlanetAge(planet)
    expect(ageMars).toEqual('12.23')
  })

  it('it will calculate a users age on Jupiter', function() {
    const userBirthday = ('03-14-1995')
    const birthday = new Date(userBirthday)
    const birthdayObj = new planetAge(birthday);
    const planet = 11.68
    const ageJupiter = birthdayObj.calcPlanetAge(planet)
    expect(ageJupiter).toEqual('1.97')
  })

  it('it will calculate a users life expectancy on Mercury', function() {
    const userBirthday = ('03-14-1995')
    const birthday = new Date(userBirthday)
    const birthdayObj = new planetAge(birthday);
    const planet = .24;
    const gender = 78.7;
    const ageJupiter = birthdayObj.calcPlanetAge(planet);
    const planetLifeExpect = birthdayObj.planetLifeExpectancy(planet, gender);
    expect(planetLifeExpect).toEqual('232.08');
  })

  it('it will calculate a users life expectancy on Venus if gender option niether is chosen', function() {
    const userBirthday = ('03-14-1995');
    const birthday = new Date(userBirthday);
    const birthdayObj = new planetAge(birthday);
    const planet = .62;
    const gender = 78.7;
    const planetLifeExpect = birthdayObj.planetLifeExpectancy(planet, gender);
    expect(planetLifeExpect).toEqual('89.84');
  })

  it('it will calculate a users life expectancy on Mars', function() {
    const userBirthday = ('03-14-1995');
    const birthday = new Date(userBirthday);
    const birthdayObj = new planetAge(birthday);
    const planet = 1.88;
    const gender = 78.7;
    const planetLifeExpect = birthdayObj.planetLifeExpectancy(planet, gender);
    expect(planetLifeExpect).toEqual('29.63');
  })

  it('it will calculate a users life expectancy on Jupiter', function() {
    const userBirthday = ('03-14-1995');
    const birthday = new Date(userBirthday);
    const birthdayObj = new planetAge(birthday);
    const planet = 11.68;
    const gender = 78.7;
    const planetLifeExpect = birthdayObj.planetLifeExpectancy(planet, gender);
    expect(planetLifeExpect).toEqual('4.77');
  });
});
