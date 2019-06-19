import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

import placeholder from "../images/placeholder.png";
import "./blog.css";

class Blog extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="blogcontainer">
          <div className="headingBlog">
            <h3 className="blogHeader"> Novedades Del Blog</h3>
          </div>
          <Container>
            <Row className="blogRow">
              <Col xs="6" sm="4">
                <Card className="blogCard">
                  <CardImg
                    className="placeholder"
                    top
                    width="100%"
                    src={placeholder}
                    alt="Card image cap"
                  />
                  <CardBody className="blogCardBody">
                    <CardTitle className="BlogCardTitle">
                      Gallery Post
                    </CardTitle>
                    <p className="vetupdate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <hr />
                    <CardText>
                      <span>Date</span>
                      <span>views</span>
                      <span>tags</span>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="6" sm="4">
                <Card className="blogCard">
                  <CardImg
                    className="placeholder"
                    top
                    width="100%"
                    src={placeholder}
                    alt="Card image cap"
                  />
                  <CardBody className="blogCardBody">
                    <CardTitle className="BlogCardTitle">
                      Gallery Post
                    </CardTitle>
                    <p className="vetupdate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <hr />
                    <CardText>
                      <span>Date</span>
                      <span>views</span>
                      <span>tags</span>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="6" sm="4">
                <Card className="blogCard">
                  <CardImg
                    className="placeholder"
                    top
                    width="100%"
                    src={placeholder}
                    alt="Card image cap"
                  />
                  <CardBody className="blogCardBody">
                    <CardTitle className="BlogCardTitle">
                      Gallery Post
                    </CardTitle>
                    <p className="vetupdate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <hr />
                    <CardText>
                      <span>Date</span>
                      <span>views</span>
                      <span>tags</span>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <div className="btnrow">
              <Button className="gotoBlog">Ir al Blog</Button>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Blog;
