<template>
  <HeaderNavigation></HeaderNavigation>
  <router-view/>
</template>
<script lang="ts">
  import HeaderNavigation from "./components/HeaderNavigation.vue";
  
  export default {
    name: "App",
    components: {
      HeaderNavigation,
    },
  };
  </script>