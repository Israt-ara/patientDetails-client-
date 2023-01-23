import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import NewsLetter from '../NewsLetter/NewsLetter';
import Stats from '../Stats/Stats';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Hero></Hero> */}
            <Stats></Stats>
            <Gallery></Gallery>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;