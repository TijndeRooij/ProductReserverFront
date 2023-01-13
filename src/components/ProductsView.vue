<template>
    <div>
      <h1>Products</h1>
      <div style="max-width: 100rem;" v-if="errors.length">
        <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th id="idSort"       scope="col"  v-on:click="sortBy('id')">        Id          <i id="id" class="arrow down"></i></th>
            <th                   scope="col">                                   Name        </th>
            <th                   scope="col">                                   Discription </th>
            <th id="quantitySort" scope="col"  v-on:click="sortBy('quantity')">  Quantity    <i id="quantity" class="arrow down"></i></th>
            <th                   scope="col">                                   Guidelines  </th>
            <th id="ratingSort"   scope="col"  v-on:click="sortBy('rating')">    Rating      <i id="rating" class="arrow down"></i></th>
            <th                   scope="col">                                   Buy date    </th>
            <th                   scope="col">
              <input @change="searchName()" id="search" v-model="search" max-width="fit-content" class="form-control me-sm-2" type="text" placeholder="Search"/>
            </th>
            <th scope="col">
              <input type="image" id="searchButton" v-on:click="searchName()" style="max-width:3rem; display: block;" class="btn btn-secondary my-2 my-sm-0" src="https://www.pngmart.com/files/8/Search-Button-PNG-HD-Photo.png"/>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" style="height: max-content" v-for="product in products" v-bind:key="product.name">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.discription }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.guideLines }}</td>
            <td>{{ product.rating }}</td>
            <td>{{ product.buyDate }}</td>
            <td>
              <div v-if="product.quantity !== 0" class="btn-group buttons" role="group" v-on:mouseleave="resetTotal()" aria-label="Basic example">
                <button id="use" type="button" class="btn btn-success" v-on:click="useProduct(product)">Use</button>
                <button id="min" type="button" class="btn btn-success" v-on:click="min()">&minus;</button>
                <button id="plus" type="button" class="btn btn-success" v-on:click="add(product.quantity)">&plus;</button>
                <button type="button" class="btn btn-success">
                  <span class="number">{{ totalUse }}</span>
                  <span class="nonetext">0</span>
                </button>
              </div>
              <div style="margin-left: 10px;" class="btn-group" role="group">
                <button v-on:click="editProduct(product.id)" type="button" class="btn btn-warning" id="edit">Edit</button>
                <button v-on:click="deleteProduct(product.id)" type="button" class="btn btn-danger" id="delete">Delete</button>
              </div>
            </td>
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
            totalUse: 0,
            products: [],
            errors: [],
            search: "",
        };
      },
      methods: {
        refreshProducts() {
            ProductReserverService.retrieveAllProducts().catch(err => this.errors.push(err.message))
            .then(response => {
                this.products = response.data;
                console.log(response.data);
            });
        },
        useProduct(product) {
            console.log(product.id)
            ProductReserverService.updateProductsTotalUse(product, this.totalUse).catch(err => this.errors.push(err))
            .then(response => {
              this.refreshProducts();
              this.totalUse = 0;
              response.data;
            });
        },
        resetTotal(){
          this.totalUse = 0;
        },
        min(){
            if(this.totalUse === 0){ return }
            this.totalUse = this.totalUse - 1;
        },
        add(quantity){
            if(this.totalUse !== quantity) { 
              this.totalUse = this.totalUse + 1;
            }
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
                ProductReserverService.sortProductList(id.id).catch(err => this.errors.push(err))
                .then(response => {
                  this.products = response.data
                });
              }
            });
        },
        searchName(){
          ProductReserverService.searchProduct(this.search).catch(err => this.errors.push(err))
          .then(response => {
            this.products = response.data
          });
        },
        deleteProduct(id){
          ProductReserverService.deleteProduct(id).catch(err => this.errors.push(err))
          .then(response =>{
            this.refreshProducts();
            console.log(response.data);
          })
        },
        editProduct(productId){
          const id = this.products.find(({ id }) => id === productId).id
          this.$router.push(`/product/${id}`)
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

.buttons .number {
  display: none;
}

.buttons:hover .number {
  display: block;
}

.buttons:hover .nonetext {
  display: none;
}

</style>