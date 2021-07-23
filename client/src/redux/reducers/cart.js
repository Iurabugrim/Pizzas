const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const getTotalPrice = (arr) => {
  return arr.reduce((sum, obj) => obj.price + sum, 0);
};

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };

    case "PLUS_ITEM": {
      const NewItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: NewItems,
            totalPrice: getTotalPrice(NewItems),
          },
        },
        totalPrice: state.totalPrice + state.items[action.payload].items[0].price,
        itemsCount: state.itemsCount + 1
      };
    }

    case "MINUS_ITEM": {
      const NewItems = state.items[action.payload].items.length > 1 ?  state.items[action.payload].items.slice(1) : state.items[action.payload].items;
      if(state.items[action.payload].items.length > 1){
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload]: {
              items: NewItems,
              totalPrice: getTotalPrice(NewItems),
            },
          },
          totalPrice: state.totalPrice - state.items[action.payload].items[0].price,
          itemsCount: state.itemsCount - 1
        };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: NewItems,
            totalPrice: getTotalPrice(NewItems),
          },
        },
        totalPrice: state.totalPrice ,
        itemsCount: state.itemsCount 
      };
      
    }

    case "SET_ITEMS_COUNT":
      return {
        ...state,
        itemsCount: action.payload,
      };

    case "CLEAR_CART":
      return {
        items: {},
        totalPrice: 0,
        itemsCount: 0,
      };

    case "REMOVE_CART_ITEM":
      const newItems = {
        ...state.items,
      };
      const courrentTotalPrice = newItems[action.payload].totalPrice;
      const courrentItemsCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - courrentTotalPrice,
        itemsCount: state.itemsCount - courrentItemsCount,
      };

    case "ADD_PIZZAS_CART": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      return {
        ...state,
        items: newItems,
        itemsCount: getTotalSum(newItems, "items.length"),
        totalPrice: getTotalSum(newItems, "totalPrice"),
      };
    }
    default:
      return state;
  }
};

export default cart;
