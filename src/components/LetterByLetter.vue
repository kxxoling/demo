<template lang="jade">
.letter-by-letter
  | 我永远喜欢
  span.word {{ word }}

</template>

<script>
export default {
  name: 'letter-by-letter',
  data() {
    return {
      list: [
        'Python',
        'JavaScript',
        'Vue.js',
        'Vim',
        'Emacs',
        'Linux',
        'PostgreSQL',
        'Stylus',
      ],
      current: 0,
      word: '',
      timeInterval: 100,
      changeDirectionInterval: 1000,
      changeWordInterval: 200,
    };
  },
  mounted() {
    this.letterByLetter(this.currentWord, 0, 1);
  },
  computed: {
    currentWord() {
      return this.list[this.current];
    },
  },
  methods: {
    changeWord() {
      if (this.current === this.list.length - 1) {
        this.current = 0;
      } else {
        this.current = this.current + 1;
      }
    },
    letterByLetter(word, i, direction) {
      if (i === 0 && direction === -1) {
        // Word has been shown
        setTimeout(() => {
          this.changeWord();
          this.letterByLetter(this.currentWord, 0, 1);
        }, this.changeWordInterval);
        return;
      }
      if (i >= word.length) {
        // Change direction till the last letter
        setTimeout(() => {
          this.letterByLetter(word, i - 1, -1);
        }, this.changeDirectionInterval);
        return;
      }
      this.word = this.currentWord.substring(0, i + direction);
      setTimeout(() => {
        this.letterByLetter(word, i + direction, direction);
      }, this.timeInterval);
    },
  },
};
</script>

<style lang="stylus" scoped>
.word
  margin-left 0.4rem
</style>
