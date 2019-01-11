class planetAge {
  constructor(birthday) {
    this.birthday = new Date(birthday);
}

  calcAge() {
    const today = Date.now();
    return ~~((today - this.birthday) / (31557600000));
  }

  calcPlanetAge(planet) {
    var age = this.calcAge();
    var planetAge = (age / planet).toFixed(2);
    return planetAge;
  }

  lifeExpectancy() {
    var age = this.calcAge();
    const averageLifeExpectancyInYears = 78.7
    let lifeExpect = (averageLifeExpectancyInYears - age);
    return lifeExpect
  }

  planetLifeExpectancy(planet) {
    var lifeExpect = this.lifeExpectancy();
    var planetLifeExpect = (lifeExpect / planet).toFixed(2);
    return planetLifeExpect
  }
}

export { planetAge };
