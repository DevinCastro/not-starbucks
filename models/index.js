const Bean = require('./Bean.js')
const Syrup = require('./Syrup.js')
const Topping = require('./Topping.js')
const Drink = require('./Drink.js')


Bean.hasMany(Drink)
Syrup.hasMany(Drink)
Topping.hasMany(Drink)

Drink.belongsTo(Bean)
Drink.belongsTo(Syrup)
Drink.belongsTo(Topping)





module.exports = { Drink, Bean, Syrup, Topping }