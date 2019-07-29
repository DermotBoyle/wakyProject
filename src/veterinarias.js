import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

// Easy Page
class Veterinarias extends Component {
    render() {
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <Button>A la izquierda!</Button>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
                <br />
            </div>
        );
    }
}

export default Veterinarias;