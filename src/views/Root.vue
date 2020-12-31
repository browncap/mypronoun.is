<template>
  <div>
    <TitleBar />
    <RootText />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import TitleBar from "../components/TitleBar.vue";
import RootText from "../components/Root.vue";

export default {
  name: 'Root',
  components: {
    Footer,
    TitleBar,
    RootText
  },
}
</script>
