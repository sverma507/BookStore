import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;









// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./home/Home";
// import Courses from "./courses/Courses";
// import Signup from "./components/Signup";
// import Navbar from "./components/Navbar";
// import Freebook from "./components/Freebook";
// import { Toaster } from "react-hot-toast";
// import { useAuth } from "./context/AuthProvider";
// import { CartProvider } from "./components/CartContext";
// import FloatingCartIcon from "./components/FloatingCartIcon";

// function App() {
//   const [authUser, setAuthUser] = useAuth();
//   console.log(authUser);

//   return (
//     <CartProvider>
//       <div className="dark:bg-slate-900 dark:text-white min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/course"
//               element={authUser ? <Courses /> : <Navigate to="/signup" />}
//             />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//         </main>
//         <FloatingCartIcon />
//         <Toaster />
//       </div>
//     </CartProvider>
//   );
// }

// export default App;

