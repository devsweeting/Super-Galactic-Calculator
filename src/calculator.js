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

  lifeExpectancy(gender) {
    var age = this.calcAge();
    let averageLifeExpectancyInYears = gender
    let lifeExpect = (averageLifeExpectancyInYears - age);
    return lifeExpect
  }

  planetLifeExpectancy(planet, gender) {
    var lifeExpect = this.lifeExpectancy(gender);
    var planetLifeExpect = (lifeExpect / planet).toFixed(2);
    return planetLifeExpect
  }
}

export { planetAge };
