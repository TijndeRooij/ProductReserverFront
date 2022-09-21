<template>
    <div>
      <h1>Instructor Application</h1>
      <table>
        <th v-on:click="sortBy('id')">         Id         <i id="id" class="arrow down"></i></th>
        <th>                                   Name       </th>
        <th>                                   Discription</th>
        <th v-on:click="sortBy('quantity')">   Quantity   <i id="quantity" class="arrow down"></i></th>
        <th v-on:click="sortBy('rating')">     Rating     <i id="rating" class="arrow down"></i></th>
        <th>                                   Buy date   </th>
        <th></th>
        <tr v-for="product in products" v-bind:key="product.name">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.discription }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.rating }}</td>
            <td>{{ product.buyDate }}</td>
            <td><button v-if="product.quantity > 0" v-on:click="useProduct(product)">Use</button></td>
        </tr>
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.arrow {
  border: solid green;
  border-width: 0 3px 3px 0;
  display: none;
  padding: 3px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>