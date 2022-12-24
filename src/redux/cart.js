import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartitem: localStorage.getItem("CartitemInfo")
    ? JSON.parse(localStorage.getItem("CartitemInfo"))
    : [],
  state: null,
};

// const initialState = {
//   value: 0,
// };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // if the item id is already in the cart, increase the quantity by 1
      // else add the item to the cart
      const itemIndex = state.cartitem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartitem[itemIndex].cartQuantity += 1;

        toast.info(` ${action.payload.title}'s Quantity increased`, {
          position: "top-right",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartitem.push(tempProduct);
      }
      localStorage.setItem("CartitemInfo", JSON.stringify(state.cartitem));
      // poopin notification using toastify
      toast.success(`${action.payload.title} added successfully`, {
        position: "top-right",
      });
    },

    // clear cart
    clearCart(state, action) {
      state.cartitem = [];
      toast.error(`ALL items are cleared`, {
        position: "top-right",
      });
      localStorage.setItem("CartitemInfo", JSON.stringify(state.cartitem));
    },

    // to delete an item from the cart
    deleteItem(state, action) {
      const nextCartItem = state.cartitem.filter(
        (cartRemoveItem) => cartRemoveItem.id !== action.payload.id
      );
      state.cartitem = nextCartItem;
      localStorage.setItem("CartitemInfo", JSON.stringify(state.cartitem));
      // send notification in topright with item title
      toast.error(`${action.payload.title} removed successfully`, {
        position: "top-right",
      });
    },

    // increase the quantity of an item in the cart by 1 if it is already in the cart
    increaseQuantity(state, action) {
      const itemIndex = state.cartitem.findIndex(
        (cartitem) => cartitem.id === action.payload.id
      );
      if (state.cartitem[itemIndex].cartQuantity >= 1) {
        state.cartitem[itemIndex].cartQuantity += 1;
      }
      localStorage.setItem("CartitemInfo", JSON.stringify(state.cartitem));
    },

    // decrease the quantity of an item in the cart by 1 if it is already in the cart
    decreaseQuantity(state, action) {
      const itemIndex = state.cartitem.findIndex(
        (cartitem) => cartitem.id === action.payload.id
      );
      if (state.cartitem[itemIndex].cartQuantity > 1) {
        state.cartitem[itemIndex].cartQuantity -= 1;
      }
      localStorage.setItem("CartitemInfo", JSON.stringify(state.cartitem));
    },
  },
});

// exporting the action
export const {
  addToCart,
  clearCart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  increment,
} = cartSlice.actions;

// exporting the reducer
export default cartSlice.reducer;
