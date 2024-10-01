import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Layout/Navbar'

import { BrowserRouter,Routes,Route } from "react-router-dom"
import VitaminB12 from './Layout/Component/VitaminB12'
import Foundation from './Layout/Component/Foundation'
import CardLayout from './Layout/Component/LayoutComponent/CardLayout'
import Joinus from './Layout/Component/LayoutComponent/Joinus'

import MySwiper from './Swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Map from './Layout/Component/LayoutComponent/Map'
import Footer from './Layout/Component/LayoutComponent/Footer'
import WhoWeAre from './WhoWeAre'
import Help from './Help'
import Home from './Home'
import WHOWEARE from './Layout/Component/LayoutComponent/WHOWEARE'
import Programs from './Layout/Component/LayoutComponent/Programs'
import About from './About'




function App() {
  

  return (
    <>
      {/* <Routers>

        <Navbar></Navbar>
        <VitaminB12/>
        <Foundation></Foundation>
        <CardLayout></CardLayout>
        <Joinus></Joinus>
        <MySwiper></MySwiper>
        <Map></Map>
        <Footer></Footer>
        
      
      <Routes>
        <Route path='/WhoWeAre' element={<WhoWeAre/>} />
        
      </Routes>
      </Routers> */}


      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/WHOWEARE' element={<WHOWEARE/>} />
          <Route path='/Programs' element={<Programs/>}/>
          <Route  path='/About' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
