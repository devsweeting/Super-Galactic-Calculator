class ageCalc {
constructor(birthday) {
  this.birthday = new Date(birthday)
}

calcAge() {
  var today = Date.now()
  return ~~((today - this.birthday) / (31557600000));
}


}

birthday = ('March 14, 1995 03:24:00')
birthday = new ageCalc(birthday)
dansBirthday = ("April 26, 1982 07:00:00")
dansBirthday = new ageCalc(dansBirthday)
