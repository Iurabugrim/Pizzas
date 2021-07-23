require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const PizzasRouter = require('./Routes/pizzasRouter')
const OrderRouter = require('./Routes/orderRouter')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;



app.use('/pizzas', PizzasRouter)
app.use('/order', OrderRouter)



app.listen(PORT, () => {
    console.log(`Server started in the ${PORT} port`)
})