import React from 'react';
import Hero from '../components/Hero';
import Carousel from "../components/Carousel";

function PortfolioPage(props) {

    return (
       <div id={props.id}> <Hero title={props.title}
        subTitle={props.subTitle} 
        texts={props.texts} />

        <Carousel /> </div>
    );

}

export default PortfolioPage;