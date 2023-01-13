import axios from "axios";

const PRODUCTS_API_URL = "http://localhost:5000";
const headers = { headers: { "Authorization": "Bearer " + null}}

class UserService{
    async createUser(user){
        return await axios.post(`${PRODUCTS_API_URL}/user/save`, user, headers);
    }

    async logIn(user) {
        var qs = require('qs');
        const response = await axios.post(`${PRODUCTS_API_URL}/login`, 
            qs.stringify({
                'username': user.username,
                'password': user.password
            })
        );
        return response
    }
}

export default new UserService();