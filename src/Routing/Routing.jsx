import React,{useState, useEffect} from "react";
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom'
import Navbar from "../component/Navbar/navbar";
import Home from "../component/Home/home";
import Footer from "../component/Footer/footer";
import About from "../component/About/about";
import Contact from "../component/Contact/contact";
import NotFound from "../component/NotFound";

function ScrollToTop(){
    const {pathname} = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])
    return null
}

 
const Routing =()=>{

    let [ cart, setCart] = useState([])
    return <BrowserRouter>
    <ScrollToTop/>
    <Navbar cart ={cart} setCart={setCart}/>
    <Routes>
        <Route path='/' element={<Home cart ={cart} setCart={setCart}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="*" element={<NotFound/>} > </Route>
      

    </Routes>
    <Footer/>
    
    </BrowserRouter>

}
export default Routing