import axios from "axios";

const PRODUCTS_API_URL = "http://localhost:8080";

class ProductReserverService{
    async retrieveAllProducts(){
        return await axios.get(`${PRODUCTS_API_URL}/id`);
    }

    async updateProduct(product, totalUse){
        console.log(" " + product.id)
        return await axios.put(`${PRODUCTS_API_URL}/${product.id}/${totalUse}`, product);
    }

    async sortProductList(sorter){
        console.log(sorter)
        return await axios.get(`${PRODUCTS_API_URL}/${sorter}`);
    }

    async createProduct(product){
        console.log(product)
        return await axios.post(`${PRODUCTS_API_URL}/CreateProduct`, product);
    }
}

export default new ProductReserverService();