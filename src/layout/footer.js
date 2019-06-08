import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <Card className="footer">
          <CardFooter>
            Copyright 2017, Wakyma - Take Care of your Pet
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Footer;
