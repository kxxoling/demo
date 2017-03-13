<template lang="jade">
#app.container
  top-menu.header
  section.main-section
    side-list.nav
    playground.playground
      router-view
  footer.footer
</template>

<script>
import 'normalize.css/normalize.css';

import TopMenu from '@/containers/TopMenu';
import SideList from '@/containers/SideList';
import Playground from '@/containers/Playground';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    TopMenu, Playground, SideList,
  },
};
</script>

<style lang="stylus">
@import 'base.styl'

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
