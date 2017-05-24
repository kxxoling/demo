<template lang="jade">
.github-card.user-card
  .header
    a.avatar(v-bind:href="user.html_url", target="_blank")
      img(v-bind:src="user.avatar_url")
      strong {{ user.name }}
      span @{{ user.login }}
    a.button(v-bind:href="user.html_url", target='_blank') Follow
  ul.status
    li
      a(v-bind:href="user.html_url + '?tab=repositories'", target='_blank')
        strong {{ user.public_repos }}
        | Repos
    li
      a(v-bind:href="'//gist.github.com/' + user.login", target='_blank')
        strong {{ user.public_gists }}
        | Gists
    li
      a(v-bind:href="user.html_url + '?tab=followers'", target='_blank')
        strong {{ user.followers }}
        | Followers
  .footer
    a(v-bind:href="user.blog", target='_blank') {{ user.bio }}

</template>

<script>
export default {
  name: 'github-user',
  props: {
    user: {},
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
  width 260px

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

.user-card
  .header
    padding 3px 0 4px 57px
    min-height 48px
    a
      color #707070
      text-decoration none
      &:hover
        strong
          text-decoration underline

  img
    position absolute
    top 0
    left 0
    width 48px
    height 48px
    background #fff
    border-radius 4px

  strong
    display block
    color #292f33
    font-size 16px
    line-height 1.6

  ul
    text-transform uppercase
    font-size 12px
    color #707070
    list-style-type none
    margin 0
    padding 0
    border-top 1px solid #eee
    border-bottom 1px solid #eee
    zoom 1
    &:after
      display block
      content ''
      clear both

  .status
    a
      color #707070
      text-decoration none

      &:hover
        color #4183c4
    li
      float left
      padding 4px 18px
      border-left 1px solid #eee
      &:first-child
        border-left 0
        padding-left 0

  .footer
    font-size 12px
    font-weight 700
    padding 11px 0 10px
    color #646464

    a
      color #646464
</style>
