import axios from "axios";

const PRODUCTS_API_URL = "http://localhost:8080";

class ProductReserverService{
    async retrieveAllProducts(){
        return await axios.get(`${PRODUCTS_API_URL}/id`);
    }

    updateProduct(product){
        console.log(" " + product.id)
        return axios.put(`${PRODUCTS_API_URL}/${product.id}`, product);
    }

    async sortProductList(sorter){
        console.log(sorter)
        return await axios.get(`${PRODUCTS_API_URL}/${sorter}`);
    }
}

export default new ProductReserverService();