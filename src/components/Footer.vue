<template>
  <footer id="main-footer">
    <a href="https://www.theycount.xyz"><p>They Count</p></a>
    <span>|</span>
    <a href=""><p v-on:click='routeTo("About")'>Home</p></a>
    <span>|</span>
    <a href="https://www.translivesmatter.xyz"><p>Donate</p></a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    routeTo: function(route) {
      this.$router.push({name: route});
    }
  }
}
</script>

<style scoped>
  #main-footer{
    padding: 50px 0 5px 0;
    color:white;
    text-align: center;
    margin: 20px 0 0 0;
    bottom:0;
    width: 100%;
    position:absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #main-footer span {
    padding: 0 5px;
  }

  #main-footer p {
    padding: 0 5px;
  }

  #main-footer a {
    color: #fff;
    text-decoration: none;
  }

  #main-footer a:visited {
    text-decoration: none;
  }
</style>
