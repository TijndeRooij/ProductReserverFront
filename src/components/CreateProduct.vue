<template>
    <h1>CreateProduct</h1>

    <form @submit="createProduct">
        <div v-if="errors.length">
            <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
        </div>

        <label for="name">Name: </label><br>
        <input id="name" placeholder="John" v-model="name" /><br>

        <label for="discription">Discription: </label><br>
        <input id="discription" placeholder="This product is blue." v-model="discription"/><br>

        <label for="quantity">Quantity: </label><br>
        <input id="quantity" type="number" min="0" step="5" placeholder="0" v-model="quantity"/><br><br>

        <input v-model="gideLines" type="checkbox" id="gideLine1" value="1">
        <label for="gideLine1"> Gideline 1</label><br>
        <input v-model="gideLines" type="checkbox" id="gideLine2" value="2">
        <label for="gideLine2"> Gideline 2</label><br>
        <input v-model="gideLines" type="checkbox" id="gideLine3" value="3">
        <label for="gideLine3"> Gideline 3</label><br>
        <input v-model="gideLines" type="checkbox" id="gideLine4" value="4">
        <label for="gideLine4"> Gideline 4</label><br>
        <input v-model="gideLines" type="checkbox" id="gideLine5" value="5">
        <label for="gideLine5"> Gideline 5</label><br>
        <input v-model="gideLines" type="checkbox" id="gideLine6" value="6">
        <label for="gideLine6"> Gideline 6</label><br><br>

        <span>gideLine: {{ gideLines }}</span><br>
        <span>name: {{ name }}</span><br>
        <span>discription: {{ discription }}</span><br>
        <span>quantity: {{ quantity }}</span><br>

        <input type="submit" value="Create"/>
    </form>

</template>

<script>
    import ProductReserverService from "../service/ProductReserverService"
    export default {
      name: "CreateProduct",
      data() {
        return{
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
        }
      },
      methods: {
        createProduct(e) {
            e.preventDefault();
            this.errors = [];

            if(!this.discription || !this.name || !this.gideLines.length) {
                this.errors.push("Enter valid values");
            }

            if(this.errors.length === 0){
                this.product.name = this.name
                this.product.discription = this.discription
                this.product.quantity = this.quantity

                this.gideLines.forEach((gideLine) => {
                    this.product.gideLines = this.product.gideLines + gideLine + "-";
                 });
                this.product.gideLines = this.product.gideLines.substring(0, this.product.gideLines.length - 1)

               this.product.rating = 4

                ProductReserverService.createProduct(this.product)
                .then(() => {
                   this.$router.push('/')
                })
            }
        },
    }
}
</script>

<style scoped>

</style>
