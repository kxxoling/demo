<template lang="jade">
header.navbar
  section.navbar-section.brand
    router-link.navbar-brand(to="/") Demo
  section.navbar-section.links
    router-link(to="/") GitHub
    router-link(to="/") Thanks
    a(href="//blog.windrunner.me", target="_blank") Blog
</template>

<script>
export default {
  name: 'top-menu',
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
</style>
