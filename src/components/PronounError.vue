<template>
  <div class="textContainer">
    <div class="">
      <section class="title">
        <p v-if="notFoundError"><b>{{ notFoundTitle }}</b></p>
        <p v-else><b>{{ networkErrTitle }}</b></p>
      </section>
      <section class="description">
        <p v-if="notFoundError">{{ notFoundDesc }}</p>
        <p v-else>{{ networkErrDesc }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "PronounError",
  data() {
    return {
      notFoundTitle: 'Pronoun Not Found',
      notFoundDesc: 'This pronoun does not exist in our database. If you would like it added, please contact the site creator!',
      networkErrTitle: 'Unknown Error',
      networkErrDesc: 'Something went wrong on our end. Please try again or come back later. Sorry for the inconvenience!',
    }
  },
  props: {
    notFoundError: Boolean
  }
}
</script>

<style scoped src="../mixins/css/RootDonateCommon.css">
