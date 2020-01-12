import React from "react";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        console.log("Search page");
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}

export default Search;