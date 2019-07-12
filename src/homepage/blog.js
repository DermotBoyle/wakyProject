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
import "./blog.css";
import galleryPost from "../images/galleryPost.jpg";
import videoPost from "../images/videoPost.jpg";
import articlePost from "../images/articlePost.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faEye, faTag } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCalendarAlt, faEye, faTag);

class Blog extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="blogcontainer">
          <div className="headingBlog">
            <h3 className="blogHeader"> Novedades Del Blog</h3>
          </div>
          <div className="blogwrap">
            <Card className="blogCard">
              <CardImg
                className="placeholder"
                top
                width="100%"
                src={galleryPost}
                alt="Card image cap"
              />
              <CardBody className="blogCardBody">
                <CardTitle className="BlogCardTitle">Gallery Post</CardTitle>
                <p className="vetupdate">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <hr />
                <CardText>
                  <span>
                    <FontAwesomeIcon
                      icon="calendar-alt"
                      style={{ color: "black" }}
                    />{" "}
                    &nbsp; Date &nbsp;
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon="eye" style={{ color: "black" }} />
                    &nbsp; views
                  </span>
                  <span>
                    {" "}
                    &nbsp;
                    <FontAwesomeIcon icon="tag" style={{ color: "black" }} />
                    &nbsp; tags
                  </span>
                </CardText>
              </CardBody>
            </Card>

            <Card className="blogCard">
              <CardImg
                className="placeholder"
                top
                width="100%"
                src={videoPost}
                alt="Card image cap"
              />
              <CardBody className="blogCardBody">
                <CardTitle className="BlogCardTitle">
                  {" "}
                  Video Gallery Post
                </CardTitle>
                <p className="vetupdate">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <hr />
                <CardText>
                  <span>
                    <FontAwesomeIcon
                      icon="calendar-alt"
                      style={{ color: "black" }}
                    />
                    &nbsp; Date &nbsp;
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon="eye" style={{ color: "black" }} />
                    &nbsp; views &nbsp;
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon="tag"
                      style={{ color: "black" }}
                    />{" "}
                    &nbsp; tags
                  </span>
                </CardText>
              </CardBody>
            </Card>

            <Card className="blogCard">
              <CardImg
                className="placeholder"
                top
                width="100%"
                src={articlePost}
                alt="Card image cap"
              />
              <CardBody className="blogCardBody">
                <CardTitle className="BlogCardTitle">Article Post</CardTitle>
                <p className="vetupdate">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <hr />
                <CardText>
                  <span>
                    <FontAwesomeIcon
                      icon="calendar-alt"
                      style={{ color: "black" }}
                    />
                    &nbsp; Date &nbsp;
                  </span>
                  <span>
                    <FontAwesomeIcon icon="eye" style={{ color: "black" }} />
                    &nbsp; views &nbsp;
                  </span>
                  <span>
                    <FontAwesomeIcon icon="tag" style={{ color: "black" }} />
                    &nbsp; tags
                  </span>
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="btnrow">
            <Button className="gotoBlog">Ir al Blog</Button>
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
