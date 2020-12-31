<template>
  <div class="textContainer">
    <div class="">
      <section class="title">
        <p><b>Donate</b></p>
      </section>
      <section class="description">
        <p v-bind:style="{marginBottom: 9 + 'px'}">Help support trans people around the world by donating to one of these charities:</p>
        <p>• <a href="https://mermaidsuk.org.uk/">Mermaids</a></p>
        <p>• <a href="https://www.artsbusinesscollaborative.org/asp-products/for-the-gworls-rent-and-gender-affirming-surgery-fund/">For the Gworls</a></p>
        <p>• <a href="https://www.artsbusinesscollaborative.org/asp-products/the-okra-project-sponsored-project/">The Okra Project</a></p>
        <p>• <a href="http://www.transyouthequality.org/donate">TYEF</a></p>
        <p>• <a href="https://www.translatinacoalition.org/donate">TransLatin@ Coalition Fund</a></p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Donate",
}
</script>

<style scoped src="../mixins/css/RootDonateCommon.css">
