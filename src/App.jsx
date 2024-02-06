// Untuk menggunakan dependencies React di pembuatan component menggunakan Class Component
import React from "react";
import Button from "./components/Elements/Button";

// Pembuatan Component menggunakan Class Component
// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white"
//         type="submit"
//       >
//         Buy now
//       </button>
//     );
//   }
// }

// Pembuatan Component menggunakan Function Component
// function ButtonBlack() {
//   return (
//     <button
//       className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//       type="submit"
//     >
//       Buy now
//     </button>
//   );
// }

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-red-700">Login</Button>
        <Button variant="bg-slate-700">Logout</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
