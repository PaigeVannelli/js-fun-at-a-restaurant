// function createRestaurant(name) {
//   //Input is a string and outpout is an object with a name
//   //create an object with a porperty of name
//   //you should ne able ot input any name
//
//   var pizzaRestaurant = {
//     name: name
// }


function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant
}

function addMenuItem(restaurant, itemName) {
  var mealType = itemName.type
  if (mealType === 'lunch' && !restaurant.menus.lunch.includes(itemName)) {
    restaurant.menus.lunch.push(itemName)
  } else if (mealType === 'breakfast' && !restaurant.menus.breakfast.includes(itemName)) {
    restaurant.menus.breakfast.push(itemName)
  } else if (mealType === 'dinner' && !restaurant.menus.dinner.includes(itemName)) {
    restaurant.menus.dinner.push(itemName)
  }
}

function removeMenuItem(restaurant, foodName, type) {
  if (type === 'breakfast') {
    for (i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (restaurant.menus.breakfast[i].name === foodName) {
        restaurant.menus.breakfast.splice(i, 1)
        return 'No one is eating our ' + foodName + ' - it has been removed from the ' + type + ' menu!'
      }
    }
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
