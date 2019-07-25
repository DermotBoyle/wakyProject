import React, { Component } from 'react'


class NewComp extends Component {
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(
            this.autocompleteInput.current, {
                types: ["geocode"]
            }
        );
        this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
    }

    handlePlaceChanged() {
        const place = this.autocomplete.getPlace();
        this.props.onPlaceChanged(place);
    }

    render() {
        return ( <
            input ref = {
                this.autocompleteInput
            }
            id = "autocomplete"
            placeholder = "Enter your address"
            type = "text" /
            >
        );
    }
}

export default NewComp;
