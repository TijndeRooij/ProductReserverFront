<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div style="max-width: 40rem;" v-if="errors.length">
            <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
        </div>
        <div class="card rounded-3">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
            <form class="px-md-2" @submit.prevent="createUser">
              <div class="row">
                <div class="col-md-6 mb-2">
                  <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example1q">First name</label>
                    <input type="text" id="form3Example1q" class="form-control" v-model="firstName"/>
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example1q">Last name</label>
                    <input type="text" id="form3Example1q" class="form-control" v-model="lastName" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-2">
                  <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example1q">Username</label>
                    <input type="text" id="form3Example1q" class="form-control" v-model="userName" />
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example1q">Phonenumber</label>
                    <input type="number" id="form3Example1q" class="form-control" v-model="phoneNumber" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-2">
                  <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example1q">Password</label>
                    <input type="password" id="form3Example1q" class="form-control" v-model="passWord" />
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example1q">Repeat password</label>
                    <input type="password" id="form3Example1q" class="form-control" v-model="repeatPassWord" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example1q">Email</label>
                    <input type="email" id="form3Example1q" class="form-control" v-model="eMail" />
                  </div>
                </div>
                <button type="submit" class="btn btn-success btn-lg mb-1">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
    import UserService from "../service/UserService"
        export default {
        name: "SignUpFrom",
        data() {
        return {
          errors: [],
          firstName: "",
          lastName: "",
          userName: "",
          phoneNumber: 0,
          passWord: "",
          repeatPassWord: "",
          eMail: "",
          user: {
              id: 0,
              firstName: "",
              lastName: "",
              userName: "",
              password: '',
              email: '',
              phoneNumber: 0,
          },
        };
      },
      methods: {
        async createUser(e) {
            e.preventDefault();
            this.errors = [];
            if (!this.firstName || !this.lastName || !this.userName || !this.phoneNumber || !this.passWord || !this.repeatPassWord || !this.eMail || !(this.passWord === this.repeatPassWord)) {
                this.errors.push("Enter valid values");
            }
            if (this.errors.length === 0) {
                this.user.firstName = this.firstName;
                this.user.lastName = this.lastName;
                this.user.userName = this.userName;
                this.user.phoneNumber = this.phoneNumber;
                this.user.password = this.passWord;
                this.user.email = this.eMail;
                await UserService.createUser(this.user).catch(err => this.errors.push(err))
                    .then(() => {
                        console.log("User " + this.user.firstName + " " + this.user.lastName + " is succesfully created!");
                });
            }
        },
      }
    }
    </script>
    
    <style>

    </style>