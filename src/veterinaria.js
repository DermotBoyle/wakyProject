import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import SimpleMap from "./Mapforveterinaria";

class Veterinaria extends Component {
    render() {
        return (
            <div>
                <h3>Veterinarias en </h3>
                <Button color="success" size="s"> Buscar </Button>
                <Card style={{width:"40%", height:"20%"}}>
                    <CardImg src="https://i.ibb.co/zXmqSKg/Screenshot-2019-05-30-at-21-11-59.png" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                    </CardBody>
                </Card>
                <Card style={{width:"40%", height:"20%"}}>
                    <CardImg src="https://i.ibb.co/zXmqSKg/Screenshot-2019-05-30-at-21-11-59.png" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card style={{width:"40%", height:"20%"}}>
                    <CardImg src="https://i.ibb.co/zXmqSKg/Screenshot-2019-05-30-at-21-11-59.png" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <SimpleMap />
            </div>
        );
    }
}

export default Veterinaria;