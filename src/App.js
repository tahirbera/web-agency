import React from 'react'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/Header';
import HomePage from './components/HomePage';
import HomePage2 from './components/HomePage2';

import Footer from './components/Footer';
import Slider from './components/Slider';
import WhyUs from './components/WhyUs';
import ContactUs from './components/ContactUs';





const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <Header />
      <div className='home-page-background'>
        
        <HomePage />
      </div>
      <HomePage2 />
      <Slider />
      <WhyUs />
      <ContactUs />
      <Footer />

    </>,
  },
]);

const App = () => {
  return (   
   <RouterProvider router={router} />
  )
}

export default App