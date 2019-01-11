import { planetAge } from './../src/calculator.js';

describe('planetAge', function() {

//   it('creates a user class of planetAge', function(){
//     const userBirthday = ('March 14, 1995 03:24:00');
//     const userBirthday = new Date;
//     const user = new planetAge(userBirthday);
//     expect(user.birthday).toEqual(userBirthday);
// });

  it('it will calculate a users age', function() {
    const userBirthday = ('March 14, 1995 03:24:00')
    const user = new planetAge(userBirthday);
    let age = user.calcAge()
    expect(age).toEqual(23)
  })
})
