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
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook);

class Footer extends Component {
  render() {
    return (
      <div>
        <Card className="footer">
          <CardFooter>
            <p>Copyright 2017, Wakyma - Take Care of your Pet</p>
            <span>Aviso Legal</span>
            <span>
              &nbsp; síguenos: &nbsp;{" "}
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                style={{ color: "#3e569e", fontSize: "25px" }}
              />{" "}
              &nbsp;{" "}
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                style={{ color: "4daef2", fontSize: "25px" }}
              />{" "}
              &nbsp;{" "}
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                style={{ color: "#3d6fa0", fontSize: "25px" }}
              />{" "}
            </span>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Footer;
