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

function addMenuItem(name, itemName) {
// 1. basedon the type add it to the array in the restauarnt
  var mealType = itemName.type
  if (mealType = 'lunch') {
    name.menus.lunch.push(itemName)
  } else if (mealType = 'breakfast') {
    name.menus.breakfast.push(itemName)
  } else if (mealType = 'dinner') {
    name.menus.dinner.push(itemName)
  }
// you need to push it to name.menus.(itemName.type)
// declare a variable and set it equal to itemName.type
// if it's equal then you push to x
//name.push(itemName)


}
module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
