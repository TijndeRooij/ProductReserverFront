import axios from "axios";

const PRODUCTS_API_URL = "http://localhost:8080";

class ProductReserverService{
    async retrieveAllProducts(){
        return await axios.get(`${PRODUCTS_API_URL}/id`);
    }

    async updateProduct(product, totalUse){
        return await axios.put(`${PRODUCTS_API_URL}/${product.id}/${totalUse}`, product);
    }

    async sortProductList(sorter){
        return await axios.get(`${PRODUCTS_API_URL}/${sorter}`);
    }

    async createProduct(product){
        return await axios.post(`${PRODUCTS_API_URL}/CreateProduct`, product);
    }

    async searchProduct(name){
        return await axios.get(`${PRODUCTS_API_URL}/name:/${name}`);
    }

    async deleteProduct(id){
        return await axios.delete(`${PRODUCTS_API_URL}/delete/${id}`);
    }

    async getProductById(id){
        return await axios.get(`${PRODUCTS_API_URL}/edit/${id}`);
    }
}

export default new ProductReserverService();