class planetAge {
  constructor(birthday) {
    this.birthday = new Date(birthday)
}

  calcAge() {
    var today = Date.now()
    return ~~((today - this.birthday) / (31557600000));
  }
}

export { planetAge };
