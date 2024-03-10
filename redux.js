import { legacy_createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    //   kalau tidak ada action type nya, maka yg di return adalah berupa state
    default:
      return state;
  }
};

// store
const store = legacy_createStore(cartReducer); //reducer yg tadi dibuat dimasukan ke dalam store
console.log("oncreate store : ", store.getState()); // jadi tampilkan state yg ada di dalam store, ketika sudah selesai membuat storenya

// subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 10, qty: 5 } };
store.dispatch(action2);

// flow :
// reducer -> store -> subscribe -> dispatch
// reducer untuk menampung/membuat/initiate state yg ingin dibuat, reducer juga menerima action, action digunakan agar state dapat diperlakukan seperti apa sesuai actionnya
// store sebagai wadah dari state tadi, jadi untuk menyimpan statenya

// INTINYA buat reducer lalu isi dengan state dan tentukan type nya untuk action,
// lalu masukan reducer ke store
// lalu buat action dan dispatch ke store
// jika ingin melihat inisialisasi isi state awal, langsung saja store.getState()
// nah tapi kalau mau lihat perubahan yg ada di state setelah action di dispatch ke store, maka gunakan
// store.subscribe() lalu langsung store.getState() lagi.
