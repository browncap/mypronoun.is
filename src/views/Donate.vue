<template>
  <div>
    <TitleBar />
    <Donation />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import TitleBar from "../components/TitleBar.vue";
import Donation from "../components/Donate.vue";

export default {
  name: 'Donate',
  components: {
    Footer,
    TitleBar,
    Donation
  },
}
</script>
