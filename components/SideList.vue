<template lang="pug">
nav.nav
  ul
    li
      router-link(to="/DragonMaid") 小林家的女仆龙
    li
      router-link(to="/RemovePhone") 手机删除
    li
      router-link(to="/GoogleLucky") I'm feeling lucky
    li
      router-link(to="/MessageDialog") Message Dialog
    li
      router-link(to="/AppSettings") App Settings
    li
      router-link(to="/Slider") Slider
    li
      router-link(to="/DragUploader") Drag and Drop Uploader
    li
      router-link(to="/Github") GitHub Cards
    li
      router-link(to="/PlusOneSec") +1s
    li
      router-link(to="/WorldMap") World Map
    li
      router-link(to="/LetterByLetter") Letter by Letter

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
