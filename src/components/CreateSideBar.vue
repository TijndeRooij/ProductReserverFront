<template>
<div class="sidebar bg-light" id="sidenav" v-on:mouseleave="close()" v-on:mouseover="open()">
    <img v-if="done === true" src="../assets/Done-rafiki.svg" class="center"/>
    <form class="offcanvas-body" v-if="done === false" @submit="createProduct">
        <div style="max-width: 20rem;" v-if="errors.length">
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
</div>
</template>

<script>
    import ProductReserverService from "../service/ProductReserverService"
    export default {
    name: "CreateSideBar",
    data() {
        return {
            done: false,
            name: "",
            discription: "",
            quantity: 0,
            guideLines: [],
            errors: [],
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
        open() {
            document.getElementById("sidenav").style.width = "24rem";
            document.getElementById("sidenav").style.display = "block";
            document.getElementById("newProductbtn").style.display = "none";
        },
        close() {
            document.getElementById("sidenav").style.width = ".1%";
            document.getElementById("newProductbtn").style.display = "block";
            this.done = false;
        },
        refreshProducts() {
            ProductReserverService.retrieveAllProducts().catch(err => this.errors.push(err.message))
            .then(response => {
                this.products = response.data;
                console.log(response.data);
            });
        },
        createProduct(e) {
            e.preventDefault();
            this.errors = [];
            if (!this.discription || !this.name || !this.guideLines.length) {
                this.errors.push("Enter valid values");
            }
            if (this.errors.length === 0) {
                this.product.name = this.name;
                this.product.discription = this.discription;
                this.product.quantity = this.quantity;
                this.guideLines.forEach((guideLine) => {
                    this.product.guideLines = this.product.guideLines + guideLine + "-";
                });
                this.product.guideLines = this.product.guideLines.substring(0, this.product.guideLines.length - 1);
                this.product.rating = 4;
                ProductReserverService.createProduct(this.product).catch(err => this.errors.push(err))
                    .then(() => {
                        this.refreshProducts();
                        this.done = true;
                });
            }
        },
    },
}
</script>

<style scoped>
.sidebar {
  height: 100%;
  width: .1%;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  color: darkgray;
  left: 25px;
  font-size: 36px;
  margin-right: 50px;
}

.sidebar a:hover {
  color: #343a40;
}

.sidebar form {
  text-decoration: none;
  display: block;
  transition: 0.3s;
  float: none;
  position: absolute;
  right: 25px;
  left: 25px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 25rem;
  width: 25rem;
}
</style>
  
