<template>
<h1 class="title">Login</h1>
  <div class="container">
        <div id="name_project">
        <div class="input">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" v-model="input.username" placeholder="Username" />
        </div>
        <div class="input">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <button type="button" v-on:click="login()">Login</button>
        </div>
  </div>
  <footer class="addoninfo">
          <p>Please <a href="mailto: fake.help@StudeyPlan.com">Contact Service</a> if you have any inquiry.</p>
          <small><i> Copyright &copy; 2022 Jinwen Liu. All right reserved. </i> </small>
</footer>
</template>

<script>
  export default {
      name: 'myLogin',
      data() {
          return {
              input: {
                  username: "",
                  password: ""
              }
          }
      },
      methods: {
          login() {
              if(this.input.username != "" && this.input.password != "") {
                  // This should actually be an api call not a check against this.$parent.mockAccount
                  if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                      this.$emit("authenticated", true);
                      this.$router.replace({ name: "mySecure" });
                  } else {
                      console.log("The username and / or password is incorrect");
                  }
              } else {
                  console.log("A username and password must be present");
              }
          }
      }
  }
</script>

<style>
.title{
    position: absolute;
  top: 20px;
}
.container {position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: #fefefe;
  width: 400px;
  max-width: 95%;
}
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.input > label {
  text-align: start;
}
.input > input {
  margin-top: 6px;
  height: 38px !important;
}

</style>