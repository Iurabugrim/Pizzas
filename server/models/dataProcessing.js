const DB = require("../data/ConnectDB");

class Date {
  async TakeDate(filterBy, sortBy) {
    const DB = await Date.ConnectDB();

    DB.map((e) => {
      e.types = Date.TransformType(e.types);
      e.sizes = Date.TransformType(e.sizes);
    });

    let pizzas = Date.filterCategory(DB, filterBy);
    pizzas = Date.sortPizzas(pizzas, sortBy);

    return pizzas;
  }

  static ConnectDB() {
    return new Promise((resolve, reject) => {
      DB.query("SELECT * FROM pizzas", (err, res, find) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  static filterCategory(arr, filterBy) {
    if (!arr) {
      return [];
    } else if (filterBy == null) {
      return arr;
    }
    return arr.filter((item) => item.category == filterBy);
  }

  static sortPizzas(arr, sortBy) {
    if (sortBy == "price") {
      return arr.sort((a, b) => b.price - a.price);
    } else if (sortBy == "rating") {
      return arr.sort((a, b) => b.rating - a.rating);
    } else if (sortBy == "name") {
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    }
    return arr;
  }

  static TransformType(str) {
    return str.split(",").map((e) => {
      return (e = Number(e));
    });
  }
}

module.exports = Date;
