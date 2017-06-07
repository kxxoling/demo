<template lang="jade">
span.plus-one-sec(@click="toggleActive", v-bind:class="{ active: active }") +1s
  span.after(v-if="active") +1s
</template>

<script>
export default {
  name: 'plus-one-sec',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="stylus" scoped>
.plus-one-sec
  display inline-block
  width 2.8em
  height 1.4em
  line-height 1.4em
  text-align center
  border 1px solid #ccc
  border-radius 4px
  cursor pointer
  color #777
  position relative

  &:hover
    background-color rgba(255, 0, 0, 0.6)
    color white
    border none

  &.active
    color white
    border none
    background-color red

  .after
    position absolute
    display block
    left 0
    top 0
    width 2.8em
    height 1.4em
    color red
    opacity 1
    animation-name fade
    animation-duration 1s
    animation-fill-mode forwards

@keyframes fade
  from
    opacity 1
  to
    opacity 0
    transform translate3d(0, -140%, 0)
</style>
