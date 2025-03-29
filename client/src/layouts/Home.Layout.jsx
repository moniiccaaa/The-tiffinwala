import React from 'react'
//import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const HomeLayout = ({ children }) => {
    return (
      <div className="layout flex flex-col h-full overflow-x-hidden">
        <Navbar />
        {children} {/* This renders HomePage content */}
        {/* <Footer /> */}
      </div>
    );
  };
  
  export default HomeLayout;
  