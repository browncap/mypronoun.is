<template>
  <div class="textContainer">
    <div class="divSpacing">
      <section class="title">
        <p><b>{{firstPronoun.subject}}/{{firstPronoun.object}}</b></p>
      </section>
      <section class="description">
        <li><b>{{firstPronoun.subject}}</b> slept soundly.</li>
        <li><b>{{firstPronoun.possessiveDeterminer}}</b> dog slept beside <b>{{firstPronoun.object}}</b>.</li>
        <li>The bed was <b>{{firstPronoun.possessive}}</b>.</li>
        <li><b>{{firstPronoun.subject}}</b> woke <b>{{firstPronoun.reflexive}}</b> up.</li>
        <li><b>{{firstPronoun.possessiveDeterminer}}</b> dog nuzzled <b>{{firstPronoun.object}}</b>.</li>
      </section>
    </div>
    <div class="">
      <section class="title" float="right">
        <p><b>{{secondPronoun.subject}}/{{secondPronoun.object}}</b></p>
      </section>
      <section class="description" float="right">
        <li><b>{{secondPronoun.subject}}</b> slept soundly.</li>
        <li><b>{{secondPronoun.possessiveDeterminer}}</b> dog slept beside <b>{{secondPronoun.object}}</b>.</li>
        <li>The bed was <b>{{secondPronoun.possessive}}</b>.</li>
        <li><b>{{secondPronoun.subject}}</b> woke <b>{{secondPronoun.reflexive}}</b> up.</li>
        <li><b>{{secondPronoun.possessiveDeterminer}}</b> dog nuzzled <b>{{secondPronoun.object}}</b>.</li>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pronoun",
  props: {
    firstPronoun: {
      object: '',
      possessive: '',
      possessiveDeterminer: '',
      reflexive: '',
      subject: ''
    },
    secondPronoun: {
      object: '',
      possessive: '',
      possessiveDeterminer: '',
      reflexive: '',
      subject: ''
    }
  }
}
</script>

<style scoped>
  .divSpacing {
    margin-right: 50px;
  }

  .title {
    float:none;
  }

  .description {
    float:none;
    margin: 0 80px 25px 0;
  }

  @media(max-width:840px){
    .textContainer {
      height: auto;
      padding-top:35px;
      width:80%;
      padding-bottom: 50px;
      display:block;
      padding-left: 20%;
      padding-right:20%;
      width: 60%;
    }

    .divSpacing {
      margin-right: 0px;
    }
  }

  @media(max-width: 600px){
    .textContainer {
      padding-left: 10%;
      padding-right: 10%;
      width: 80%;
    }

    .description {
      margin-bottom: 10%;
    }
  }

</style>
