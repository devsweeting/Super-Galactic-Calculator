import { planetAge } from './../src/calculator.js';

describe('planetAge', function() {

//   it('creates a user class of planetAge', function(){
//     var userBirthday = ('March 14, 1995 03:24:00');
//     var userBirthday = new Date;
//     var user = new planetAge(userBirthday);
//     expect(user.birthday).toEqual(userBirthday);
// });

  it('it will calculate a users age', function() {
    var userBirthday = ('March 14, 1995 03:24:00')
    var user = new planetAge(userBirthday);
    let age = user.calcAge()
    expect(age).toEqual(23)
  });

  it('it will calculate a users age on Mercury', function() {
    var userBirthday = ('March 14, 1995 03:24:00')
    var birthday = new planetAge(userBirthday);
    let ageMercury = birthday.calcMercury()
    expect(ageMercury).toEqual('95.83')
  })

  it('it will calculate a users age on Venus', function() {
    var userBirthday = ('March 14, 1995 03:24:00')
    var birthday = new planetAge(userBirthday);
    let ageVenus = birthday.calcVenus()
    expect(ageVenus).toEqual('37.10')
  })

  it('it will calculate a users age on Jupiter', function() {
    var userBirthday = ('March 14, 1995 03:24:00')
    var birthday = new planetAge(userBirthday);
    let ageJupiter = birthday.calcJupiter()
    expect(ageJupiter).toEqual('1.94')
  })
})
