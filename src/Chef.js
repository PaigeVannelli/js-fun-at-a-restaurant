class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(name, morning) {
    if (morning === true) {
      return 'Good morning, ' + name + '!'
    }
    return 'Hello, ' + name + '!'
  }

  // checkForFood(foodItem){
  //   if (foodItem.type === 'breakfast' && this.restaurant.menus.breakfast.includes(foodItem)) {
  //     return 'Yes, we\'re serving ' + foodItem.name + ' today!'
  //   } else if (foodItem.type === 'lunch' && this.restaurant.menus.lunch.includes(foodItem)) {
  //     return 'Yes, we\'re serving ' + foodItem.name + ' today!'
  //   } else if (foodItem.type === 'dinner' && this.restaurant.menus.dinner.includes(foodItem)) {
  //     return 'Yes, we\'re serving ' + foodItem.name + ' today!'
  //   } else {
  //     return 'Sorry, we aren\'t serving ' + foodItem.name + ' today.'
  //   }
  // }

  // checkForFood(foodItem){
  //   if (foodItem['type'] === 'breakfast' && this.restaurant['menus']['breakfast'].includes(foodItem)) {
  //     return 'Yes, we\'re serving ' + foodItem.name + ' today!'
  //   } else if (foodItem['type'] === 'lunch' && this.restaurant['menus']['lunch'].includes(foodItem)) {
  //     return 'Yes, we\'re serving ' + foodItem.name + ' today!'
  //   } else if (foodItem['type'] === 'dinner' && this.restaurant['menus']['dinner'].includes(foodItem)) {
  //     return 'Yes, we\'re serving ' + foodItem.name + ' today!'
  //   } else {
  //     return 'Sorry, we aren\'t serving ' + foodItem.name + ' today.'
  //   }
  // }

  checkForFood(foodItem){
    if (this.restaurant['menus'][foodItem.type].includes(foodItem)) {
      return 'Yes, we\'re serving ' + foodItem.name + ' today!'
    } else {
      return 'Sorry, we aren\'t serving ' + foodItem.name + ' today.'
    }
  }
}

module.exports = Chef;
