class planetAge {
  constructor(birthday) {
    this.birthday = new Date(birthday);
}

  calcAge() {
    const today = Date.now();
    return ~~((today - this.birthday) / (31557600000));
  }

  calcMercury() {
    var age = this.calcAge();
    var ageMercury = (age / .24).toFixed(2);
    return ageMercury;
  }

  calcMercury() {
    var age = this.calcAge();
    var ageMercury = (age / .62).toFixed(2);
    return ageMercury;
  }
}

export { planetAge };