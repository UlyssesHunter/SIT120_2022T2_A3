<template>
    <div class="secure">
      <h1>This is an secure page</h1>
    </div>
  </template>
  
  
  <script>
      export default {
          name: 'mySecure',
          data() {
            return {}
          },
          mounted() {
              if(!this.$parent.authenticated) {
                  this.$router.replace({ name: "myLogin" });
              }
          },
          methods: {
          }
      }
  </script>