<template>
    <form style="max-width: 60rem">
        <div style="max-width: 60rem;" v-if="errors.length">
            <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
        </div>
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
            <div class="card-header">Name</div>
                <div class="card-body">
                    <p class="card-text">Fill in the name of your new product below.</p>
                    <input class="form-control" placeholder="John" v-model="name" /><br>
                </div>
        </div>
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
            <div class="card-header">Discription</div>
                <div class="card-body">
                    <p class="card-text">Fill in the discription of your new product below.</p>
                    <input class="form-control" placeholder="This is the new product" v-model="discription" /><br>
                </div>
        </div>
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
            <div class="card-header">Quantity</div>
                <div class="card-body">
                    <p class="card-text">Fill in the total amount of your new product below.</p>
                    <input class="form-control" id="discription" type="number" min="0" step="5" placeholder="0" v-model="quantity" /><br>
                </div>
        </div>
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
            <div class="card-header">Guidelines</div>
                <div class="card-body">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine1" value="1">
                        <label for="guideLine1"> Guideline 1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine2" value="2">
                        <label for="guideLine2"> Guideline 2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine3" value="3">
                        <label for="guideLine3"> Guideline 3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine4" value="4">
                        <label for="guideLine4"> Guideline 4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine5" value="5">
                        <label for="guideLine5"> Guideline 5</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="guideLines" type="checkbox" id="guideLine6" value="6">
                        <label for="guideLine6"> Guideline 6</label>
                    </div>
                </div>
            </div>
        <div class="d-grid gap-2">
            <Button id="submitButton" class="btn btn-success" type="submit"><img style="width: 1rem; height: 1rem" src="https://img.icons8.com/puffy/344/experimental-create-new-puffy.png" alt="create" /> Create</Button><br>
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
        name: "",
        discription: "",
        quantity: 0,
        guideLines: [],
      };
    },
    computed: {
      id() {
        return this.$route.params.id;
      }
    },
    methods: {
      getProduct(id){
        const product = ProductReserverService.getProductById(id);
        this.name = product.name;
        this.discription = product.discription;
        this.quantity = product.quantity;
        this.guideLines = product.guideLines;
      }
    },
    created() {

    }
  };
  </script>
  
  <style>
  </style>