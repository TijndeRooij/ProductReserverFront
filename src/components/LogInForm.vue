<template>
    <div style="max-width: 100rem;" v-if="errors.length">
        <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
    </div>
    <form @submit.prevent="logIn">
        <label for="username">Username: </label><br/>
        <input id="username" type="text" v-model="username" /><br/>
        <label for="password">Password: </label><br/>
        <input id="password" type="password" v-model="password" /><br/>
        <input type="submit" id="submit" />
    </form>
    <input type="button" id="token" value="press for token" v-on:click="getToken()" />
</template>
    
<script>
import UserService from '@/service/UserService';
    export default {
    name: "LogInForm",
    data() {
        return {
            errors: [],
            username: "",
            password: "",
            user: {
                password: "",
                username: "",
            }
        };
    },
    methods: {
        async logIn() {
            this.user.password = this.password;
            this.user.username = this.username;
            await UserService.logIn(this.user)
            .then(response => {
                console.log(response.data.access_token);
                sessionStorage.setItem('accessToken', JSON.stringify(response.data.access_token))
            })
        },
        getToken(){
            this.errors.push(sessionStorage.getItem('accessToken'))
        }
    },
}
</script>
    
<style>

</style>