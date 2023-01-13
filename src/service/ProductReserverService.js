import axios from "axios";

const PRODUCTS_API_URL = "http://localhost:5000";
const token = JSON.parse(sessionStorage.getItem("accessToken"));
const headers = { headers: { "Authorization": "Bearer " + token}}

class ProductReserverService{
    async retrieveAllProducts(){
        return await axios.get(`${PRODUCTS_API_URL}/id`, headers);
    }

    async updateProductsTotalUse(product, totalUse){
        return await axios.put(`${PRODUCTS_API_URL}/${product.id}/${totalUse}`, product, headers);
    }

    async sortProductList(sorter){
        return await axios.get(`${PRODUCTS_API_URL}/${sorter}`, headers);
    }

    async createProduct(product){
        return await axios.post(`${PRODUCTS_API_URL}/CreateProduct`, product, headers);
    }

    async searchProduct(name){
        return await axios.get(`${PRODUCTS_API_URL}/name:/${name}`, headers);
    }

    async deleteProduct(id){
        return await axios.delete(`${PRODUCTS_API_URL}/delete/${id}`, headers);
    }

    async getProductById(id){
        return await axios.get(`${PRODUCTS_API_URL}/edit/${id}`, headers);
    }

    async updateProduct(product){
        return await axios.put(`${PRODUCTS_API_URL}/update/${product.id}`, product, headers)
    }
}

export default new ProductReserverService();