import React from "react";
import {useSelector} from 'react-redux'
import { Button } from "../components";

function Order() {
    
    const {items} = useSelector(state => state.cart)



  return (
    <div className="order">
      <div className="order__block">
        <h2 className="order__title">
          Заполните данные для оформления заказа
        </h2>
        <form className="order__form" method="POST" action="">
          <input type="hidden" name="items" value={JSON.stringify(items)} />
          <input
            name="FullName"
            type="text"
            className="order__input"
            placeholder="ФИО "
          />
          <input
            name="City"
            type="text"
            className="order__input"
            placeholder="Город "
          />
          <input
            name="Phone"
            type="text"
            className="order__input"
            placeholder="Телефон"
          />
          <input
            name="MailNumber"
            type="number"
            min="1"
            className="order__input"
            placeholder="Отделение новой почты"
          />
          <select name="Payment" id="Payment">
            <option defaultValue value="Card">На карту</option>
            <option value="Mail">При получении на почте</option>
          </select>
          <Button className="order__button">Заказать</Button>
        </form>
      </div>
    </div>
  );
}

export default Order;