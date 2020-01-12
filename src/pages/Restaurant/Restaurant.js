import React from "react";

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: {}
        }
    }

    componentDidMount() {
        console.log("Restaurant page");
        console.log(this.props.match.params.number);
    }

    render() {
        return (
            <div>
                <h1>Restaurant:</h1>
            </div>
        )
    }
}

export default Restaurant;