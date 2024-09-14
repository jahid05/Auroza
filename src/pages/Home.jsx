import React from 'react';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import LatestProduct from '../components/LatestProduct';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Feature/>
            <LatestProduct/>
        </div>
    );
};

export default Home;