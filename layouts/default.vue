<template lang="pug">
div.container
  header-nav.header
  section.main-section
    side-list.nav
    nuxt.playground
  footer.footer
</template>

<script>
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import HeaderNav from '../components/HeaderNav.vue';
import SideList from '../components/SideList.vue';

export default {
  components: {
    SideList,
    HeaderNav,
  },
};
</script>

<style lang="stylus" scoped>
// Basic style rewrites
.navbar
  align-items center
  display flex
  flex-wrap flex-wrap
  justify-content space-between
  padding-left 1rem
  padding-right 1rem

  .navbar-section
    align-items center
    display flex
    padding 1rem 0
    box-align center

    a, span, label
      font-size 1rem
      font-weight 500
      margin-left 1rem
      margin-right 1rem
      vertical-align middle

    a
      text-decoration none

a
  &:active, &:hover
    background transparent
    border-color transparent
    color #3b49af
    outline-width 0
  &:focus
    box-shadow 0 0 0 0.2rem rgba(87, 100, 198, .15)
    outline 0

.container
  display flex
  flex-direction column
  height: 100vh;
.header
  flex none
.main-section
  display flex
  flex 1
.nav
  height 100%
  flex 0 0 16rem
  order -1
.playground
  width 100%
  height 100%
</style>
