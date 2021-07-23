import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock, LoadingBlock } from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryesItems = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрыте",
];
const sortItems = [
  { name: "популярности", type: "rating", order: 'desc' },
  { name: "цене", type: "price", order: 'desc' },
  { name: "алфавиту", type: "name", order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy]);

  const onSelectCategoryes = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortType = React.useCallback((obj) => {
    dispatch(setSortBy(obj));
  }, [dispatch]);

  const handlePizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategoryes}
          items={categoryesItems}
        />
        <SortPopup
          onClickSortType={onSelectSortType}
          activeSortType={sortBy}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item, index) => (
              <PizzaBlock onClickAddPizza={handlePizzaToCart} key={item.id} addedCount={cartItems[item.id ] && cartItems[item.id].items.length} {...item} />
            ))
          : Array(12)
              .fill(0)
              .map((item, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
