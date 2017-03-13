<template lang="jade">
nav.nav
  ul
    li
      router-link(to="/dragon-maid") 小林家的女仆龙
    li
      router-link(to="/remove-phone") 手机删除

</template>

<script>
export default {
  name: 'side-list',
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
</style>
