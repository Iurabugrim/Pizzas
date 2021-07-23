const { v4: uuidv4 } = require("uuid");
const Date = require("./dataProcessing")

class Pizzas {
  constructor(imageUrl, name, types, sizes, price, category, rating) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.types = types;
    this.sizes = sizes;
    this.price = price;
    this.category = category;
    this.rating = rating;
    this.id = uuidv4();
  }


  // toJSON() {
  //   return {
  //     imageUrl = this.imageUrl,
  //     name = this.name,
  //     types = this.types,
  //     sizes = this.sizes,
  //     price = this.price,
  //     category = this.category,
  //     rating =this.rating,
  //     id = this.id
  //   }
  // }


  async PizzasAll(filterBy, sortBy) {
    const DB = new Date();
    const pizzas = await DB.TakeDate(filterBy, sortBy)
    return pizzas
  }

}

module.exports = Pizzas;
