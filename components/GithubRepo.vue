<template lang="pug">
.github-card.repo-card
  .header
    a.avatar(v-bind:href="repo.owner.html_url", target="_blank")
      img(v-bind:src="repo.owner.avatar_url")
    strong.name
      a(v-bind:href="repo.html_url", target="_blank") {{ repo.full_name }}
      sup.language {{ repo.language }}
    span Created by &nbsp;
      a(v-bind:href="repo.owner.html_url", target="_blank") {{ repo.owner.login }}
    a.button(v-bind:href="repo.html_url", target="_blank") Star
  .content
    p {{ repo.description }} &nbsp;
      a(v-bind:href="repo.homepage", target="_blank") {{ repo.homepage }}
  .footer
    span.status
      strong {{ repo.forks }}
      | Forks
    span.status
      strong  {{ repo.stargazers_count }}
      | Stars

</template>

<script>
export default {
  name: 'github-repo',
  props: {
    repo: Object,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
.github-card
  border 1px solid #eee
  border-radius 5px
  border-color #eee #ddd #bbb
  box-shadow rgba(0, 0, 0, 0.14) 0px 1px 3px
  padding 8px 8px 0
  background #fff
  color #555
  position relative
  width 300px

  a
    text-decoration none
    color #4183c4
    outline 0
    &:hover
      text-decoration underline

  .header
    position relative

  .button
    position absolute
    top 0
    right 0
    padding 4px 8px 4px 7px
    color #555
    text-shadow 0 1px 0 #fff
    border 1px solid #d4d4d4
    border-radius 3px
    font-size 13px
    font-weight bold
    line-height 14px
    background-color #e6e6e6

    &:hover
      color #fff
      text-decoration none
      background-color #3072b3
      border-color #518cc6 #518cc6 #2a65a0
      text-shadow 0 -1px 0 rgba(0,0,0,.25)

.repo-card
  .header
    padding 3px 0 4px 57px
    a
      color #707070
    strong
      display block
      font-size 18px
      line-height 1.4
      a
        color #292f33
    sup
      font-size 10px
      margin-left 3px
      color #797979
  .content
    padding 6px 0 10px
    p
      margin 0 5px 0 0
      font 18px/24px Georgia, "Times New Roman", Palatino, serif
      overflow hidden
      clear both
      word-wrap break-word
  .footer
    border-top 1px solid #eee
    padding 8px 0 6px
  .status
    font-size 10px
    padding-right 10px
    text-transform uppercase
    strong
      font-size 12px
      padding-right 5px

  .avatar, .avatar img
    position absolute
    top 0
    left 0
    width 48px
    height 48px
    background #fff
    border-radius 4px
</style>
