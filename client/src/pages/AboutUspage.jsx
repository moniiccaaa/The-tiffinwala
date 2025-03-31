import React from 'react';
import HomeLayout from '../layouts/Home.layout';
import Ourteamslider from '../components/Ourteamslider';
import AboutusPara from "../components/AboutusPara";
const AboutUspage =()=>{
    return (
        <HomeLayout>
        <AboutusPara/>
        <Ourteamslider/>
        
        </HomeLayout>
    );
}
export default AboutUspage;