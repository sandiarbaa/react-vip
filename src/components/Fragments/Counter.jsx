import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  componentDidMount() {
    this.setState({ count: 1 });
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.count === 10) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;

// Konsep Dasar LifeCycle pada sebuah Class Component

// 1. Mounting
// Pertama akan ke CONSTRUCTOR(penentuan nilai awal state, kalau memang ada state yg di buat), lalu ke RENDER elemen jsx nya, lalu kalau ada perubahan state maka akan ke COMPONENTDIDMOUNT baru perubahan akan di render lagi, karena dia akan mendeteksi perubahan pada state.

// jadi apa yg ada di constructor akan di timpa oleh componentDidMount
// ini biasanya berhubungan dengan pengambilan data lewat API,
// jadi setelah di definisikan sebuah state lalu kita misalkan mengambil data lewat API, nah mengambil data lewat API itu tidak dilakukan di constructor, melainkan di componentDidMount

// render akan terjadi ketika component di mounting atau ada update baru.

// 2. Updating
// componentDidUpdate dia akan mencoba melihat perubahan yg terjadi pada component tersebut.

// berbeda dengan componentDidMount, kalau componentDidMount dia hanya akan dijalankan sekali ketika component pertama kali di render, lalu ketika ada perubahan maka baru componentDidUpdate akan dijalankan, seperti misal ada perubahan state atau ada penambahan props baru, dll.

// 3. Unmounting
// ketika component dihancurkan/tidak di pakai lagi atau dihilangkan dari website nya, maka itu termasuk ke dalam unmount.
