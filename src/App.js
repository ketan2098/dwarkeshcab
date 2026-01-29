// import Navbar from "./components/Navbar";
// import Home from "./Page/Home";
// import ContactUs from "./Page/ContactUs";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/booking" element={<ContactUs />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
