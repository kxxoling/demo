<template lang="jade">
nav.nav
  ul
    li
      router-link(to="/dragon-maid") 小林家的女仆龙
    li
      router-link(to="/remove-phone") 手机删除
    li
      router-link(to="/im-feeling-lucky") I'm feeling lucky
    li
      router-link(to="/message-dialog") Message Dialog
    li
      router-link(to="/app-settings") App Settings
    li
      router-link(to="/slider") Slider
    li
      router-link(to="/drag-uploader") Drag and Drop Uploader
    li
      router-link(to="/github") GitHub Cards
    li
      router-link(to="/plus-one-sec") +1s


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
