<template lang="jade">
.slider
  ul.slider--images-container
    each num in [1, 2, 3, 4, 5, 6, 7]
      li.image
        img(src=('../assets/' + num + '.jpg'))
</template>

<script type="text/javascript">
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus">
$duration = 2
$amount = 7

ul
  margin 0
  padding 0

.slider
  width 100%
  height 100%
  position relative
  overflow hidden

  &::before, &::after
    position absolute
    content ''
    height 100%
    width 10%
    background rgba(0, 0, 0, 0.4)

  &::before
    left 0
    z-index 1
  &::after
    right 0

  .slider--images-container
    position absolute
    height 100%
    width 100%
    white-space nowrap
    animation-name slide
    animation-duration ($amount * $duration)s
    animation-iteration-count infinite

    .image
      display inline
      width 100%
      height 100%
      img
        width 100%


@keyframes slide
  from
    right 0

  for i in (1 .. ($amount - 1))
    {100 * i / $amount}\%
      right 100 * i + '%'

  to
    right 0
</style>
