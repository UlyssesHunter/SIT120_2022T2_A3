<template>
    <ul class="sec-nav">
      <template v-for="item in items" :key="item">
        <li>
            <a :href="item.url">{{ item.txt }}</a>
        </li>
      </template>
    </ul>
  </template>
  
  <script lang="ts">
  export default {
    name: "SecNav",
    props: ["items"],
  };
  </script>
  
  <style>
  .sec-nav {
    position: absolute;
    background-color: #fff;
    display: none;
    left: 0;
    top: 100%;
    width: 100%;
    padding: 0;
  }
  .sec-nav li {
    list-style: none;
  }
  </style>
  