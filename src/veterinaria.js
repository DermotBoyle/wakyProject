import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import SimpleMap from "./Mapforveterinaria";

class Veterinaria extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between">
                <div className="flex-column">
                <h3 style={{fontFamily: "Open Sans, sans-serif", fontSize: "15px", fontWeight: "bold", color: "#6b6e7f", textAlign: "left", margin: "30px 0px 20px 20px"}}>Veterinarias en </h3>
                    <p style={{fontFamily: "Open Sans, sans-serif", fontSize: "10px", fontWeight: "bold", color: "#6b6e7f", textAlign: "left", margin: "30px 0px 0px 20px"}}>Introduce la direccion</p>
                    <InputGroup style={{margin: "10px 0px 0px 10px", width: "95%"}}>
                        <Input />
                        <InputGroupAddon addonType="append">
                            <InputGroupText>Here little icon</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    <br/>
                <Button color="success" size="s" style={{margin: "0px 0px 20px 20px", height: "40px"}}> Buscar </Button>
                <Card style={{width:"80%", height:"20%", marginRight: "300px"}} className="p-2">
                    <CardImg src="https://i.ibb.co/zXmqSKg/Screenshot-2019-05-30-at-21-11-59.png" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                    </CardBody>
                </Card>
                <Card style={{width:"80%", height:"20%"}} className="p-2">
                    <CardImg src="https://i.ibb.co/zXmqSKg/Screenshot-2019-05-30-at-21-11-59.png" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card style={{width:"80%", height:"20%", marginRight: "300px"}} className="p-2">
                    <CardImg src="https://i.ibb.co/zXmqSKg/Screenshot-2019-05-30-at-21-11-59.png" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
                <div>
                <SimpleMap />
                </div>
            </div>
        );
    }
}

export default Veterinaria;