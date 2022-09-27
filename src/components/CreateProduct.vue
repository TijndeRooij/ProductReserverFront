<template>
    <h1>CreateProduct</h1>

    <form @submit="createProduct">
        <div style="max-width: 60rem;" v-if="errors.length">
            <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
        </div><br>

    <div class="btn-group" role="group">
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
    </div><br>

        <div class="card text-white bg-primary mb-3" style="max-width: 60rem;">
            <div class="card-header">Gidelines</div>
                <div class="card-body">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="gideLines" type="checkbox" id="gideLine1" value="1">
                        <label for="gideLine1"> Gideline 1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="gideLines" type="checkbox" id="gideLine2" value="2">
                        <label for="gideLine2"> Gideline 2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="gideLines" type="checkbox" id="gideLine3" value="3">
                        <label for="gideLine3"> Gideline 3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="gideLines" type="checkbox" id="gideLine4" value="4">
                        <label for="gideLine4"> Gideline 4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="gideLines" type="checkbox" id="gideLine5" value="5">
                        <label for="gideLine5"> Gideline 5</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" v-model="gideLines" type="checkbox" id="gideLine6" value="6">
                        <label for="gideLine6"> Gideline 6</label>
                    </div>
                </div>
        </div>



        <input id="submitButton" class="btn btn-success" type="submit" value="Create"/>
    </form>

</template>

<script>
    import ProductReserverService from "../service/ProductReserverService"
    export default {
    name: "CreateProduct",
    data() {
        return {
            name: "",
            discription: "",
            quantity: 0,
            gideLines: [],
            errors: [],
            product: {
                id: 0,
                name: "",
                discription: "",
                quantity: 0,
                gideLines: "",
                rating: 0
            },
        };
    },
    methods: {
        createProduct(e) {
            e.preventDefault();
            this.errors = [];
            if (!this.discription || !this.name || !this.gideLines.length) {
                this.errors.push("Enter valid values");
            }
            if (this.errors.length === 0) {

                this.product.name = this.name;
                this.product.discription = this.discription;
                this.product.quantity = this.quantity;
                this.gideLines.forEach((gideLine) => {
                    this.product.gideLines = this.product.gideLines + gideLine + "-";
                });
                this.product.gideLines = this.product.gideLines.substring(0, this.product.gideLines.length - 1);
                this.product.rating = 4;
                ProductReserverService.createProduct(this.product)
                    .then(() => {
                    this.$router.push("/");
                });
            }
        },
    },
}
</script>

<style scoped>

</style>
