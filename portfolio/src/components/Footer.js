import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Footer(){

    return (
        <footer className="mt-5">
            <Container fluid={true}> 
                <Row className="border-top justify-content-center">
                <Col className="f p-2  text-secondary d-flex justify-content-center font-italic">
                     <small>Made by J Falk. Stockholm 2020</small>
                </Col>
 
                </Row>
            </Container>
        </footer>


    );

}

export default Footer;