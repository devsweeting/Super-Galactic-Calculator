class planetAge {
  constructor(birthday) {
    this.birthday = new Date(birthday);
  }

  calcAge() {
    const today = Date.now();
    return ~~((today - this.birthday) / (31557600000));
  }

  calcPlanetAge(planet) {
    const age = this.calcAge();
    const planetAge = (age / planet).toFixed(2);
    return planetAge;
  }

  lifeExpectancy(gender) {
    const age = this.calcAge();
    let averageLifeExpectancyInYears = gender
    let lifeExpect = (averageLifeExpectancyInYears - age);
    return lifeExpect
  }

  planetLifeExpectancy(planet, gender) {
    const lifeExpect = this.lifeExpectancy(gender);
    const planetLifeExpect = (lifeExpect / planet).toFixed(2);
    return planetLifeExpect
  }
}

export { planetAge };
