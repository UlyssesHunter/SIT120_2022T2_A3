<template>
    <div class="nav">
      <ul>
        <template v-for="item in items" :key="item">
          <li>
            <a :href="item.url">{{ item.txt }}</a>
            <SecNav v-if="item.children" :items="item.children"></SecNav>
          </li>
        </template>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
    import SecNav from "./SecNav.vue";
    
    export default {
      name: "HeaderNavigation",
      components: { SecNav },
      data() {
        return {
          items: [
            { txt: "Homepage", url: "/" },
            {txt: "Login", url: "/login"},
            {
              txt: "Plan",
              url: "/plan",
              children: [
                { txt: "Days Check", url: "/" },
                { txt: "Completed Plans", url: "/" },
              ],
            },
            { txt: "Search", url: "/" },
          ],
        };
      },
    };
    </script>
  
  
  <style>
  .nav {
    position: absolute;
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
    background-color: #2289ff;
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
    color: #2289ff;
    text-decoration: none;
  }
  </style>
  