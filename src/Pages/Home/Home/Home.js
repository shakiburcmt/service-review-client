import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Contact from '../Contact/Contact';
import Question from '../Question/Question';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Question></Question>
            <Carousel></Carousel>
            <Contact></Contact>
        </div>
    );
};

export default Home;