const registeredHomes = [];  // keep array here

module.exports = class Home {
  constructor(house, price, location, rating, photoURL) {
    this.houseName = house;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
  }

  save() {
    registeredHomes.push(this);
  }

  static fetchAll() {
    return registeredHomes;
  }
};
