import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import {Provider } from "react-redux";
import store from "./store";
import ProfileCard from './ProfileCard'
import GridView from './GridView'
import Todo from './Todo'
const profilelist = {
  name: "Nigeshwar",
  department: "AI&DS",
  year: "2nd year",
  phone: "1234567890", 
  address: "sulur ,coimbatore",
  pincode: "123456",
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="/todo" element={<Provider store={store}><Todo /></Provider>} />
        <Route path="/profilecard" element={<ProfileCard profile={profilelist}/>} />
        <Route path="/gridview" element={<GridView />} />

       
      </Routes>
    </BrowserRouter> 
    {/* <ProfileCard  profile={ profilelist}/>
    <GridView/>
    <Todo/> */}
    </>
  );
}

export default App;



