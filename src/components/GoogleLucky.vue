<template lang="jade">
.google-lucky(v-on:mouseover="onHover")
  input(type="submit", value="I'm Feeling Lucky", aria-label="I'm Feeling Lucky")
  .faker-placeholder
    .faker-container(v-bind:style="position")
      .lucky-faker(v-for="word in words")
        span I'm Feeling {{ word }}
</template>

<script>
export default {
  name: 'google-lucky',
  data() {
    return {
      words: ['Lucky', 'Hungry', 'Angry', 'Naive', 'Artistic', 'Googley'],
      move: 1,
    };
  },
  computed: {
    position() {
      return {
        top: `${-36 * this.move}px`,
      };
    },
  },
  methods: {
    onHover(ev) {
      if (ev.fromElement === ev.toElement) {
        return;
      }
      const move = this.move;
      let random;
      while (!random || (random === move)) {
        random = Math.floor((Math.random() * this.words.length) + 1);
      }
      this.move = random;
    },
  },
};
</script>

<style lang="stylus" scoped>
.google-lucky
  position relative

  .faker-placeholder
    overflow hidden

  .faker-placeholder, input[type=submit]
    position absolute
    text-align center
    font-family arial, sans-serif
    width 160px
    height 34px
    line-height 34px
    // border none
  .faker-placeholder .lucky-faker, input[type=submit]
    box-sizing border-box
    background-image -webkit-linear-gradient(top, #f5f5f5, #f1f1f1)
    user-select none
    background-color #f2f2f2
    border 1px solid #f2f2f2
    border-radius 2px
    color #757575
    cursor default
    font-size 13px
    font-weight bold
    padding: 0 16px

  .faker-container
    position absolute
    transition: top 0.3s linear;
  .faker-placeholder, .faker-container, lucky-faker
    pointer-events none
</style>
