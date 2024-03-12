// ini versi lama, udah ga work kalau masih di pakai
// import toolkit from "@reduxjs/toolkit";
const { configureStore, createAction, createReducer } = toolkit;

// import @reduxjs/toolkit versi terbaru (2.2.1), jadi work nya pakai yg ini
import {
  configureStore,
  createAction,
  createReducer,
  createSlice, // ini butuh untuk code yg baru dari dokumentasi asli
} from "@reduxjs/toolkit";

// ini membuat action addToCart
const addToCart = createAction("ADD_TO_CART");

// const initialState = {
//   cart: [],
// };

// buat reducer cartReducer, dan memasukan action addToCart
const cartReducer = createReducer([], (builder) => {
  // builder.addCase("ADD_TO_CART", (state, action) => { // ini kalau tidak pakai function createAction
  builder.addCase(addToCart, (state, action) => {
    // ini ada juga untuk reducer handler nya yaitu state dan action
    // state.cart = [...state.cart, action.payload];
    // state.cart.push(action.payload); // untuk 1 reducer, misal hanya ada 1 reducer cart
    state.push(action.payload);
  });
});

// ini membuat action login
const login = createAction("CREATE_SESSION");

// membuat reducer loginReducer
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    // state. state ini di ambil dari patameter pertama yg function createReducer
    // karena parameter pertama dari function createReducer adalah untuk state
    // jadi si state yg ada di parameter pertama di createReducer itu bisa di panggil ketika ingin..
    // mengubah state dengan menggunakan action / payload dibawah ini
    state.status = true;
  });
});

// dan ini adalah store nya, tempat dimana reducer di simpan, semua reducer di masukan ke store ini
const store = configureStore({
  // ini kalau hanya 1 reducer
  // reducer: cartReducer,

  // ini reducer nya lebih dari 1, reducer login dan cart
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
// ini untuk melihat initial state (state awalnya)
console.log("oncreate store : ", store.getState());

// ini untuk melihat ketika ada perubahan yg terjadi di statenya
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// lalu action yg tadi dibuat di atas dimasukkan ke dalam store dengan method dispatch,
// kalau perlu masukan juga payload (data yg dikirim untuk mengubah state) jika diperlukan
// const action1 = addToCart({ id: 1, qty: 20 });
store.dispatch(addToCart({ id: 1, qty: 20 })); // mengirmkan payload ketika dispatch
store.dispatch(addToCart({ id: 1, qty: 10 })); // mengirmkan payload ketika dispatch
store.dispatch(login()); // ini juga menunjukan kalau tidak ada payload yg di kirim jg tidak apa-apa

// ========================================================================================================
// ini code dari dokumentasi asli, di sini lebih simpel karena pakai slice, jadi reducer dan action jadi 1
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// // Define initial state
// const initialState = {
//   cart: [],
//   login: { status: false },
// };

// // Create slice for cart
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: initialState.cart,
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });

// // Create slice for login
// const loginSlice = createSlice({
//   name: "login",
//   initialState: initialState.login,
//   reducers: {
//     loginCuy: (state) => {
//       state.status = true;
//     },
//   },
// });

// // Export actions
// export const { addToCart } = cartSlice.actions;
// export const { loginCuy } = loginSlice.actions;

// // Combine reducers
// const reducer = {
//   cart: cartSlice.reducer,
//   login: loginSlice.reducer,
// };

// // Create store
// export const store = configureStore({
//   reducer,
// });

// // Log initial store state
// console.log("oncreate store : ", store.getState());

// // Subscribe to store changes
// store.subscribe(() => {
//   console.log("STORE CHANGE : ", store.getState());
// });

// // Dispatch actions
// store.dispatch(addToCart({ id: 1, qty: 20 }));
// store.dispatch(addToCart({ id: 1, qty: 10 }));
// store.dispatch(loginCuy());
