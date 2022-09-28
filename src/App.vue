<template>
  <HeaderNavigation></HeaderNavigation>
  <router-view @authenticated="setAuthenticated"/>
</template>
<script>
  import HeaderNavigation from "./components/HeaderNavigation.vue";
  
  export default {
    name: "App",
    data() {
      return {
        authenticated: false,
                // this is only for testing purposes no actual app will have this
                // an api call will validate user credentials
        mockAccount: {
          username: "Abc",
          password: "P@ssword"
        }
      }
    },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        },
    components: {
      HeaderNavigation,
    },
  };
  </script>