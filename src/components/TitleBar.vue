<template>
  <header id="main-header">
    <div class="container">
      <div class="hoverArea">
        <a href=""><div v-on:click='routeToHome' id="logo">mypronoun<span class="pink">.</span>is</div></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TitleBar",
  methods: {
    routeToHome: function() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
  .hoverArea{
    width: 245.75px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #main-header {
    background-color: white;
    color:#8ae9ff;
    padding: 10px 0;
  }

  #main-header a {
    color: #8ae9ff;
    text-decoration: none;
  }

  #main-header a:visited {
    text-decoration: none;
  }

  #main-header h1 {
    float:left;
    margin:auto;
    padding:7.5px 0;
  }

  #main-header h3 {
    margin:0;
    padding:0;
    margin:7.5px 0;
    height:100%;
    float:right;
    text-align: right;
  }

  #logo {
    font-family: "Modak", Arial, Helvetica, sans-serif;
    font-size: 35px;
    padding: 10px;
  }

  .hoverArea div:hover {
    color: pink;
  }

  .pink {
    color: pink;
  }
</style>
