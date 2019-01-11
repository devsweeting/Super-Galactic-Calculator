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
    var planetAge = (planet / .24).toFixed(2);
    return planetAge;
  }

  calcMercury() {
    var age = this.calcAge();
    var ageMercury = (age / .24).toFixed(2);
    return ageMercury;
  }

  calcVenus() {
    var age = this.calcAge();
    var ageVenus = (age / .62).toFixed(2);
    return ageVenus;
  }

  calcMars() {
    var age = this.calcAge();
    var ageMars = (age / 1.88).toFixed(2);
    return ageMars;
  }

  calcJupiter() {
    var age = this.calcAge();
    var ageJupiter = (age / 11.86).toFixed(2);
    return ageJupiter;
  }

  lifeExpectancy() {
    const averageLifeExpectancyInYears = 78.7
  }
}

export { planetAge };
