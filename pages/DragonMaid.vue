<template lang="pug">
.dragon-maid
  .dragon-container
    .flipper
      .front .
      .back (
    .flipper
      .front .
      .back ^
    .flipper
      .front .
      .back o
    .flipper
      .front .
      .back ^
    .flipper
      .front .
      .back )

</template>

<script>
export default {
  name: 'dragon-maid',
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
$flip-duration = 0.8
$animation-duration = 0.7

.dragon-maid
  display flex
  align-items center
  width 100%
  height 100%
  background-color #fde93e

  &:hover .flipper, &:active .flipper
    animation-name flip

  .dragon-container
    margin-left auto
    margin-right auto
    width 32em

    display flex
    flex-flow row wrap

    .flipper
      flex 1
      font-size 8em
      font-family monospace
      width 1em
      height 1.4em
      text-align center
      position relative

      backface-visibility hidden
      transform-style preserve-3d
      transform-origin center
      animation-fill-mode forwards
      animation-duration $animation-duration s
      animation-timing-function linear

      for num in (0..4)
        &:nth-of-type(5n + {num+1})
          animation-delay (num * $flip-duration) s

      .front, .back
        backface-visibility hidden
        top 0
        left 0
        width 100%
        height 100%
        position absolute

      .back
        transform rotate3d(0, 1, 0, 180deg)
        transform-origin bottom
        position absolute
        top 0.2em

@keyframes flip
  from
    transform rotate3d(0, 1, 0, 0deg) scaleY(1)
  50%
    transform rotate3d(0, 1, 0, 90deg) scaleY(1.1)
  80%
    transform rotate3d(0, 1, 0, 144deg) scaleY(1.3)
  to
    transform rotate3d(0, 1, 0, 180deg) scaleY(1)
</style>
