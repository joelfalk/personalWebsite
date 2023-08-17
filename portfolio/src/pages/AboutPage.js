import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return (

        <div id={props.id}>
            <Hero title={props.title}/>    

            <Content> </Content>
        </div>
        
    )
}

export default AboutPage;