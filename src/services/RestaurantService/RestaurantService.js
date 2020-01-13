import axios from "axios";
const API_URL = "http://my-json-server.typicode.com/jeremymec/menu-app/";

class RestaurantService {

    async getAllRestaurants() {
        const url = `${API_URL}/restaurants/`;
        return axios.get(url).then(response => response.data);
    }

    async getRestaurant(id) {
        const url = `${API_URL}/restaurants/${id}`;
        return axios.get(url).then(response => response.data);
    }

}

export default RestaurantService;