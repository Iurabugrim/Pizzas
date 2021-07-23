const {Router} = require('express');
const Pizzas = require('../models/Pizzas')
const router = Router();

router.get('/', async (req, res) => {
    const pizza  = new Pizzas();
    
    res.send(await pizza.PizzasAll(req.query.category, req.query.sort))
})

module.exports = router