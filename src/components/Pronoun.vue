<template>
  <div class="textContainer">
    <div class="controlWidth">
      <section class="title">
        <p><b>{{pronouns.subject}}/{{pronouns.object}}</b></p>
      </section>
      <section class="description">
        <li><b>{{pronouns.subject}}</b> slept soundly.</li>
        <li><b>{{pronouns.possessiveDeterminer}}</b> dog slept beside <b>{{pronouns.object}}</b>.</li>
        <li>The bed was <b>{{pronouns.possessive}}</b>.</li>
        <li><b>{{pronouns.subject}}</b> woke <b>{{pronouns.reflexive}}</b> up.</li>
        <li><b>{{pronouns.possessiveDeterminer}}</b> dog nuzzled <b>{{pronouns.object}}</b>.</li>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pronoun",
  props: {
    pronouns: {
      object: '',
      possessive: '',
      possessiveDeterminer: '',
      reflexive: '',
      subject: ''
    }
  }
}
</script>

<style>
  .controlWidth {
    width:auto;
  }

  @media(max-width:840px){
    .controlWidth {
      width:100%;
    }
  }

</style>
