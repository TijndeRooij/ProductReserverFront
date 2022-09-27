<template>
    <div>
      <h1>Instructor Application</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" v-on:click="sortBy('id')">         Id         <i id="id" class="arrow down"></i></th>
            <th scope="col">                                   Name       </th>
            <th scope="col">                                   Discription</th>
            <th scope="col" v-on:click="sortBy('quantity')">   Quantity   <i id="quantity" class="arrow down"></i></th>
            <th scope="col" v-on:click="sortBy('rating')">     Rating     <i id="rating" class="arrow down"></i></th>
            <th scope="col">                                   Buy date   </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="product in products" v-bind:key="product.name">
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.discription }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.rating }}</td>
              <td>{{ product.buyDate }}</td>
              <td><button class="btn btn-info" v-if="product.quantity > 0" v-on:click="useProduct(product)">Use</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<script>
import ProductReserverService from "../service/ProductReserverService"
    export default {
      name: "ProductsView",
      data() {
        return {
            products: [],
            INSTRUCTOR: "null",
        };
      },
      methods: {
        refreshProducts() {
            ProductReserverService.retrieveAllProducts()
            .then(response => {
                this.products = response.data;
                console.log(response.data);
            });
        },
        useProduct(product) {
            console.log(product.id)
            ProductReserverService.updateProduct(product)
            .then(response => {
              this.refreshProducts();
              response.data;
            });
        },
        sortBy(idValue){
            const ids = [
              document.getElementById("id"), 
              document.getElementById("quantity"), 
              document.getElementById("rating"), 
            ];

            ids.forEach(id => {
              id.style.display = "none";
              if(id.id == idValue){
                id.style.display = "inline-block";
                this.refreshProducts()
                ProductReserverService.sortProductList(id.id)
                .then(response => {
                  this.products = response.data
                });
              }
            });
        }
      },
      created() {
        this.refreshProducts();
      }
    };
</script>

<style scoped>
.arrow {
  border: solid #20c997;
  border-width: 0 3px 3px 0;
  display: none;
  padding: 3px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>