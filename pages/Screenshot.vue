<template lang="pug">
.screenshot
  button.capture(@click="capture") Take a screenshot!
  .minor-shot
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  name: 'screenshot',
  methods: {
    capture() {
      html2canvas(document.body).then((canvas) => {
        canvas.style.width = '100%';    // eslint-disable-line
        canvas.style.height = '100%';       // eslint-disable-line
        const minorShot = this.$el.querySelector('.minor-shot');
        minorShot.innerHTML = '';
        minorShot.appendChild(canvas);
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.minor-shot
  position fixed
  right 1rem
  bottom 1rem
  height 20vh
  width 20vw
  border 1px solid grey

  canvas
    width 100%
    height 100%
</style>
