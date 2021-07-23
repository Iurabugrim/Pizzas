// const fs = require("fs");
// const path = require("path");
// const DB = require('./data/ConnectDB')
// const { v4: uuidv4 } = require("uuid");

// const  pizzas =  new Promise((resolve, reject) => {
//   fs.readFile(
//     path.join(__dirname, "data", "dataPizzas.json"),
//     "utf-8",
//     (err, data) => {
//       if (err) reject(err);
//       resolve(data)
//     }
//   );
// }).then((data) => JSON.parse(data))


//  async function app (){
//     let Pizzas = await pizzas
//     Pizzas.pizzas.forEach(pizza => {
//         let post = {
//             id: uuidv4(), 
//             imageUrl: pizza.imageUrl,
//             name: pizza.name, 
//             types: pizza.types.join(','),
//             sizes: pizza.sizes.join(',') ,
//             price: pizza.price, 
//             category: pizza.category,  
//             rating: pizza.rating,  
//             count: 50
//         }

//         let sql = `INSERT INTO pizzas (id, imageUrl, name, types, sizes, price, category, rating, count) VALUES ('${post.id}','${post.imageUrl}','${post.name}','${post.types}','${post.sizes}',${post.price},${post.category},${post.rating},${post.count})`

//         DB.query(sql ,  function(err, result) {
//             if(err){
//                 console.log(err)
//             }
//             console.log(result)
//         });
//     })
// }

// app()