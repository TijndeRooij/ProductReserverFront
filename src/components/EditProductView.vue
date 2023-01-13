<template>
  <h1>Edit</h1>
    <form id="form" class="center" style="max-width: 60rem;" @submit="updateProduct">
        <div style="max-width: 60rem;" v-if="errors.length">
            <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
        </div>
        <div class="btn-group" role="group">
          <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
              <div class="card-header">Name</div>
                  <div class="card-body">
                      <p class="card-text">Fill in the name of your new product below.</p>
                      <input id="nameEdit" class="form-control" placeholder="John" v-model="name" /><br>
                  </div>
          </div>
          <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
              <div class="card-header">Discription</div>
                  <div class="card-body">
                      <p class="card-text">Fill in the discription of your new product below.</p>
                      <input id="discriptionEdit" class="form-control" placeholder="This is the new product" v-model="discription" /><br>
                  </div>
          </div>
          <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
              <div class="card-header">Quantity</div>
                  <div class="card-body">
                      <p class="card-text">Fill in the total amount of your new product below.</p>
                      <input class="form-control" id="quantityEdit" type="number" min="0" step="5" placeholder="0" v-model="quantity" /><br>
                  </div>
          </div>
        </div>
        <div class="card text-white bg-primary mb-3" style="max-width: 60rem;">
            <div class="card-header">Guidelines</div>
                <div class="card-body btn">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine1Edit" value="1">
                        <label for="guideLine1"> Guideline 1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine2Edit" value="2">
                        <label for="guideLine2"> Guideline 2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine3Edit" value="3">
                        <label for="guideLine3"> Guideline 3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine4Edit" value="4">
                        <label for="guideLine4"> Guideline 4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine5Edit" value="5">
                        <label for="guideLine5"> Guideline 5</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine6Edit" value="6">
                        <label for="guideLine6"> Guideline 6</label>
                    </div>
                </div>
            </div>
        <div class="d-grid gap-2">
            <button id="submitButtonEdit" class="btn btn-success" type="submit"><img style="width: 1rem; height: 1rem" src="https://img.icons8.com/puffy/344/experimental-create-new-puffy.png" alt="update" /> Update</button>
            <button id="submitButtonDelete" class="btn btn-danger" v-on:click="deleteProduct()" type="submit"><img style="width: 1rem; height: 1rem;" src="http://cdn.onlinewebfonts.com/svg/img_216917.png" alt="delete"/>  Delete</button>
        </div>
    </form>
</template>
  
<script>
import ProductReserverService from '@/service/ProductReserverService';
  export default {
    name: "EditProductView",
    data() {
      return {
        errors: [],
        id: 0,
        name: "",
        discription: "",
        quantity: 0,
        guideLines: [],
        product: {
            id: 0,
            name: "",
            discription: "",
            quantity: 0,
            guideLines: "",
            rating: 0
        },
      };
    },
    methods: {
      fillInputFields(){
        ProductReserverService.getProductById(this.id).catch(err => this.errors.push(err))
        .then(response => {
          this.name = response.data.name;
          this.discription = response.data.discription;
          this.quantity = response.data.quantity;
          let guideLinesString = response.data.guideLines;
          this.guideLines = guideLinesString.split("-");
        })
      },
      updateProduct(e){
        e.preventDefault();
        this.errors = [];
        if (!this.discription || !this.name || !this.guideLines.length) {
            this.errors.push("Enter valid values");
        }
        if (this.errors.length === 0) {
            this.product.id = this.id;
            this.product.name = this.name;
            this.product.discription = this.discription;
            this.product.quantity = this.quantity;
            this.guideLines.forEach((guideLine) => {
                this.product.guideLines = this.product.guideLines + guideLine + "-";
            });
            this.product.guideLines = this.product.guideLines.substring(0, this.product.guideLines.length - 1);
            this.product.rating = 0;
            ProductReserverService.updateProduct(this.product).catch(err => this.errors.push(err))
                .then(() => {
                    this.done = true;
                    this.$router.push("/");
            });
        }
      },
      deleteProduct(){
        ProductReserverService.deleteProduct(this.id).catch(err => this.errors.push(err))
        .then(() => {
          this.$router.push("/");
        })
      }
    },
    created() {
      this.id = parseInt(this.$route.params.id);
      this.fillInputFields(this.id);
    }
  };
  </script>
  
  <style>
    .center{
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  </style>