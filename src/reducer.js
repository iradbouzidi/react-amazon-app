import { StarRate } from "@material-ui/icons";

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //login for add to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //logic for remove from basket

      // we clone the basket
      let newBasket = [...state.basket];

      // we check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exist in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in basket.`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
