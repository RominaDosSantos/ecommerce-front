import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProductCart: (state, action) => {
      const { productName, id, price, image } = action.payload;
      const product = {
        id,
        productName,
        price,
        image: image[0].imageOne,
        quantity: 1,
      };

      const duplicateProduct = state.cart.find((productCart) => {
        return productCart.id === action.payload.id;
      });

      if (!duplicateProduct) {
        state.cart.push(product);
      }
    },
    deleteProductCart: (state, action) => {
      const filteredProduct = state.cart.filter((product) => {
        return product.id !== action.payload;
      });
      state.cart = filteredProduct;
    },
    incrementQuantity: (state, action) => {
      const searchProduct = state.cart.findIndex((product) => {
        return product.id === action.payload.productId;
      });
      state.cart[searchProduct].quantity++;
      console.log(searchProduct);
    },
    decrementQuantity: (state, action) => {
      const searchProduct = state.cart.findIndex((product) => {
        return product.id === action.payload.productId;
      });
      if (state.cart[searchProduct].quantity > 1) {
        state.cart[searchProduct].quantity--;
      }
      console.log(searchProduct);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addProductCart, deleteProductCart, incrementQuantity, decrementQuantity } = actions;
export default reducer;
