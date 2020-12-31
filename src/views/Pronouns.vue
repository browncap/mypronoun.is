<template>
  <div>
    <TitleBar />
    <Pronoun :pronouns="pronoun" v-if="render == renderType.pronoun"/>
    <TwoPronouns :firstPronoun="twoPronouns[0]" :secondPronoun="twoPronouns[1]" v-if="render == renderType.twoPronouns" />
    <PronounError :notFoundError="notFoundError" v-if="render == renderType.error" />
    <Footer />
  </div>
</template>

<script>
import Pronoun from "../components/Pronoun.vue";
import PronounError from "../components/PronounError.vue"
import Footer from "../components/Footer.vue";
import TitleBar from "../components/TitleBar.vue";
import TwoPronouns from "../components/TwoPronouns.vue";
import Mixins from "../mixins/js/pronounMixins";
import axios from 'axios';

export default {
  name: 'Pronouns',
  mixins: [Mixins],
  components: {
    Pronoun,
    Footer,
    TitleBar,
    PronounError,
    TwoPronouns
  },
  methods: {
    pronounRequest: function(path, setPronounFunc) {
      axios.get(path)
        .then(response => setPronounFunc(response))
        .catch(err => this.handleHttpError(err))
    },
  },
  created(){
    var or = this.$route.query.or == undefined;
    var secondPronoun = this.$route.params.secondPronoun == undefined;
    var backendUrl = process.env.VUE_APP_BACKEND_URL;

    if (or && secondPronoun) {
      this.pronounRequest(backendUrl.concat('/' + this.$route.params.pronoun), this.setPronoun)
    } else if (!or && secondPronoun) {
      this.pronounRequest(backendUrl.concat('/' + this.$route.params.pronoun + '?or=' + this.$route.query.or), this.setTwoPronouns)
    } else if (or && !secondPronoun) {
      this.pronounRequest(backendUrl.concat('/' + this.$route.params.pronoun + '/' + this.$route.params.secondPronoun), this.setPronoun)
    } else {
      this.pronounRequest(backendUrl.concat('/' + this.$route.params.pronoun + '/' + this.$route.params.secondPronoun + '?or=' + this.$route.query.or), this.setTwoPronouns)
    }
  }
}
</script>
