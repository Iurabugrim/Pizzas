const { Router } = require("express");
const router = Router();

router.post("/", (req, res) => {
  const { FullName, City, Phone, MailNumber, Payment } = req.body;
  const RecipientData = `Данные получателя : ФИО:${FullName}, Город:${City}, Телефон:${Phone}, Отделение Новой почты:${MailNumber}, Спопсоб оплаты:${Payment},`;

  const CartItems = Object.values(JSON.parse(req.body.items));
  const orederItems = CartItems.map((itemsOfOneID) => {
    return itemsOfOneID.items.map((item) => ({
      "NamePizzas": item.name,
      "TypePizzas": item.type,
      "SizePizzas": item.size,
      "PricePizzas": item.price,
    }));
  });


  let orderData = '';
  let id = 1;
  orederItems.forEach(itemType => {
    itemType.forEach(item => {
      orderData += `${id} Пицца:${item.NamePizzas}, тип:${item.TypePizzas}, размер:${item.SizePizzas}, цена:${item.SizePizzas} <br>`
      id++
    })
  })

  console.log(orderData.split('<br>'), RecipientData);
  res.redirect("/");
});

module.exports = router;
