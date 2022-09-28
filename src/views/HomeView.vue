<template>
  <div class="home">
    <body> 
      <!-- Content -->
      <h1>Study Plan</h1>
    </body>
    
    <!-- Footerp -->
    <footer class="addoninfo">
      <p>Please <a href="mailto: fake.help@StudeyPlan.com">Contact Service</a> if you have any inquiry.</p>
      <small><i> Copyright &copy; 2022 Jinwen Liu. All right reserved. </i> </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
//import PageBanner from "@/components/PageBanner.vue";
//import HeaderNavigation from "@/components/HeaderNavigation.vue";
export default defineComponent({
  name: 'HomeView',
  components: {
    //HelloWorld,
    //HeaderNavigation,
    //PageBanner,
  },
});

</script>

<style>
.nav { 
  position: absolute;
  top:0%;
  width: 100%;
  background: #fff;
  z-index: 1;
}
.nav > ul {
  display: flex;
  list-style: none;
  margin: 0;
  justify-content: space-around;
}
.nav > ul li {
  flex-grow: 1;
  padding: 15px 20px;
  text-align: center;
  position: relative;
}
.nav > ul li:hover {
  background-color: rgb(100, 200, 60);
  cursor: pointer;
}
.nav > ul li:hover > a {
  color: white;
}
.nav > ul li:hover .sec-nav {
  display: inline-block;
  z-index: 2;
}
.nav > ul li a {
  display: inline-block;
  width: 100%;
  color: rgb(100, 200, 60);
  text-decoration: none;
}
.dateCheck{background:whitesmoke;}
body {
    background: no-repeat center center url(../assets/bg.jpg);
    background-size:cover;
   background-attachment:fixed;
   background-color:#CCCCCC;
  }
h1{
  position: absolute;
  right: 30%;
  top: 35px;
  color: #fff;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size:10vw;
}

.addoninfo{
  position: absolute;
  bottom: 0;
  height: 50px;
  color: #fff;
}
</style>
