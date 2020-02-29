import React from 'react';

import Card from '../components/Card';
import leapfrog from '../Assets/leapfrogs.png'
import jolle from '../Assets/jolle.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'Project 1',
                    subTitle: 'Något om project 1',
                    imgSrc: leapfrog,
                    link: 'https://www.leapfrogs.lu.se/alumni/2018/joel-falk-lar-digital',
                    selected: false
                },
                {
                    id:1,
                    title: 'Project 2',
                    subTitle: 'Ytterligare nåt',
                    imgSrc: jolle,
                    link: 'https://www.linkedin.com/in/joel-falk-71159366',
                    selected: false

                },
               /* {
                    id:2,
                    title: 'Project 3',
                    subTitle: 'Vad?',
                    imgSrc: jolle,
                    link: 'https://www.mind.se',
                    selected: false
                },**/
            ]

        }

    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;

            }

        });

        this.setState(
            {
                items
            }

        );

    }

    makeItems = (items) => {

        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>

        })
    }

    render() {
        return(
            <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>

            </Container>
        );

    }


}

export default Carousel;