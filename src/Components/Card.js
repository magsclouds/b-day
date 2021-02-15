import React, {Component} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import Media from 'react-bootstrap/Media'
import cardA from '../Assets/Happy.png';
import cardB from '../Assets/Happy2.png';

export default class BCard extends Component {
    render(){
        return(
            <Container>
                 <Row>
                     <Col>
                     <Card style={{width: "18rem"}}>
                         <Card.Body>
                            <img className="mr-3" src={cardA}/>
                         </Card.Body>
                     </Card>
                     </Col>
                </Row>
            </Container>
        )
    }
}

