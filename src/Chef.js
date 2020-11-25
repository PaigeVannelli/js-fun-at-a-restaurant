class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(name, morning) {
    if (morning === true) {
      return 'Good morning, ' + name + '!'
    }
    return 'Hello, ' + name + '!'}

  checkForFood(foodItem){
    return 'Yes, we\'re serving ' + foodItem.name + ' today!'
  }
}

module.exports = Chef;
