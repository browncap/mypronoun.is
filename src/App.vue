<template>
  <div id="app">
    <div class="page-container">
      <router-view/>
    </div>
  </div>
</template>

<style>
  @import "mixins/css/common.css";

  @font-face {
    font-family: "Modak";
    src: local("Modak"),
    url(./assets/fonts/Modak/Modak-Regular.ttf) format("truetype");
  }

  @font-face {
    font-family: "Nunito";
    src: local("Nunito"),
    url(./assets/fonts/Nunito/Nunito-Regular.ttf) format("truetype");
  }

  html, body {
    color:#555;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height:1.6em;
    margin:0;
    height:100%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .page-container {
    position: relative;
    min-height: 100vh;
    background-image: linear-gradient(pink, 90%, #8ae9ff);
  }

  @media(max-width: 600px){
    .page-container {
      background-image: linear-gradient(pink, 85%, #8ae9ff);
    }
  }

</style>
