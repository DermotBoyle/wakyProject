import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import "./contacto.css";

export default class Contacto extends React.Component {
  render() {
    return (
      <div className="contactContainer">
        <Form className="contactStyling">
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="please include your email"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Text Area
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                style={{ height: "10em" }}
              />
            </Col>
          </FormGroup>

          <FormGroup tag="fieldset" row>
            <legend className="col-form-label col-sm-2">
              Choose an option:
            </legend>
            <Col sm={10}>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" />I am user with a pet
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> I am a veterinary
                  business
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio2" disabled /> Other
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
