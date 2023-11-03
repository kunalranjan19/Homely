import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import data from './food'
import Food from "./pages/Food";




const App = () => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (<div>
        <div className="bg-slate-900">
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </div>
        <Routes>
          
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path="/food" element={<Food/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Home/>
          </PrivateRoute>}/>
        </Routes>
  </div>)
};

export default App;
