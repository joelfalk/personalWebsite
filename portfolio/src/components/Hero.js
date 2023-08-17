import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        <div className="bg-transparent p-0">
            { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
            { props.subTitle && <h3 className="display-4 font-weight-light ">{props.subTitle}</h3>}
            { props.texts && <h3 className="lead font-weight-light">{props.texts}</h3>}
        </div>

    );

}

export default Hero;