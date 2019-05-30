import React, {Component} from 'react';
import "./layout/navbar.js";
import NavBar from "./layout/navbar";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

// Easy Page
class Veterinarias extends Component {
    render() {
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <Button>To the Left!</Button>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
                <br />
            </div>
        );
    }
}

export default Veterinarias;