export default {
  data() {
    return {
      pronoun: {
        object: '',
        possessive: '',
        possessiveDeterminer: '',
        reflexive: '',
        subject: ''
      },
      twoPronouns: [
        {
          object: '',
          possessive: '',
          possessiveDeterminer: '',
          reflexive: '',
          subject: ''
        },
        {
          object: '',
          possessive: '',
          possessiveDeterminer: '',
          reflexive: '',
          subject: ''
        }
      ],
      notFoundError: false,
      renderType: {
        pronoun: 1,
        twoPronouns: 2,
        error: 3
      },
      render: 0
    }
  },
  methods: {
    handleHttpError: function(err) {
      this.render = this.renderType.error;

      if (err.response == undefined || err.response.status == 500) {
        this.notFoundError = false;
      } else if (err.response.status == 404) {
        this.notFoundError = true;
      }
    },
    setPronoun: function(resp) {
      this.pronoun = resp.data;
      this.render = this.renderType.pronoun;
    },
    setTwoPronouns: function(resp) {
      this.twoPronouns = resp.data;
      this.render = this.renderType.twoPronouns;
    }
  }
}
