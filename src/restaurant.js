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
}
module.exports = {
  createRestaurant,
  // addMenuItem,
  // removeMenuItem
}
