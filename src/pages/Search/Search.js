import React from "react";
import RestaurantService from "../../services/RestaurantService/RestaurantService";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurants: []
        };

        this.restaurantService = new RestaurantService();
    }

    componentDidMount() {
        this.restaurantService.getAllRestaurants().then(response => {
            this.setState({restaurants: response});
        })
    }

    renderRestaurants = () => {
        return this.state.restaurants.map((restaurant, key) => {
            return (
                <li key={key}>
                    <p>{restaurant.name}</p>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderRestaurants()}
                </ul>
            </div>
        )
    }
}

export default Search;