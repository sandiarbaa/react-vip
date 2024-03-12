// ini versi lama, udah ga work kalau masih di pakai
// import toolkit from "@reduxjs/toolkit";
// const { configureStore, createSlice } = toolkit;

// import @reduxjs/toolkit versi terbaru (2.2.1), jadi work nya pakai yg ini
import { configureStore, createSlice } from "@reduxjs/toolkit"; // sama dengan yg baru

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));

// ini hanya coba-coba aja bikin sendiri, mencoba melihat isi dari cartSlice ketika di luar dispatch
// lalu mencoba membuat dispatch lagi untuk melihat perubahan di state cart
// store.dispatch(cartSlice)
// console.log(cartSlice.actions.addToCart({ sandi: "sandi", id: 3, qty: 15 }));
// store.dispatch(
//   cartSlice.actions.addToCart({
//     nama: "sandi",
//     umur: "19",
//     hobi: ["ngoding", "olahraga"],
//   })
// );

// ========================================================================================================
// ini code dari dokumentasi asli, di sini lebih simpel karena pakai slice, jadi reducer dan action jadi 1
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });

// const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//   },
// });

// console.log("oncreate store : ", store.getState());

// store.subscribe(() => {
//   console.log("STORE CHANGE : ", store.getState());
// });

// store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 }));
// store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));
