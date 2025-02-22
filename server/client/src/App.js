import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Services from "./pages/Services";
import UserContextProvider from "./context/UserContext";
import Profile from "./pages/Profile";
import BookingPage from "./pages/BookingPage";
import CreateSalon from "./pages/CreateSalon";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Payment from "./utils/Payment";
// import Navbar from "./Layout/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <div style={{ height: "63px" }}></div>
          <ToastContainer />
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/create-salon" element={<CreateSalon />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
