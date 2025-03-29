import React, { useEffect, useState } from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import ChooseUs from '../components/Home/ChooseUs'
import HeroSlider from '../components/Home/HeroSlider'
import Info from '../components/Home/Info'
import Testimonials from '../components/Home/Testimonials'
import HomeLayout from '../layouts/Home.layout'
import FoodCarousel from '../components/Home/FoodCarousel'
import Order from '../components/Home/Order'

function HomePage() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 600);
  }, [])
  if (!active) {
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
        <CircularProgress color="primary" size={50} thickness={4} />
      </div>
    )
  }
  return (
    <HomeLayout>
        <HeroSlider />
        <FoodCarousel />
        <Order />
        <ChooseUs />
        <Testimonials />
        <Info />
    </HomeLayout>
  )
}

export default HomePage;
