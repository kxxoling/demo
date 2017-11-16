<template lang="pug">
.app-settings-container
  .app-settings
    header.header
      i.fa.fa-chevron-left
      span.title App Settings
      a.text(href="#/app-settings") Apply
    .main
      .discounts
        i.fa.fa-codepen
        .text Get hottest discounts
      .value
        span.text Every
        span.data {{ timeRange }}
        span.text hours
      .panel
        .range-ticks
          .range-tick(data-value="0") 0
          .range-tick(data-value="3") 3
          .range-tick(data-value="6") 6
          .range-tick(data-value="9") 9
          .range-tick(data-value="12") 12
      .controls
        .line
        .switch-wrapper
          .switch.fa.fa-codepen
        .switcher-wrapper
          label.text Off
          .switcher
          label.text On
    footer.footer
      i.fa.fa-shopping-bag
      i.fa.fa-cart-arrow-down
      i.fa.fa-filter
      i.fa.fa-gear
</template>

<script>
export default {
  name: 'app-settings',
  data() {
    return {
      timeRange: 6,
    };
  },
};
</script>

<style lang="stylus" scoped>
.app-settings-container
  height 100%

.app-settings
  background linear-gradient(
    to top right,
    #EC4E91,
    #9535D3
  )
  height 100%
  width 56vh
  box-shadow 0 0 4vh rgba(0, 0, 0, 0.1)
  position relative

  .header
    font-size 2.6vh
    color #999
    background-color white
    line-height 8vh
    display flex
    justify-content space-between
    *
      width 20vh
    .fa
      text-align left
      cursor pointer
    .text
      text-align right
    .title
      text-align center

    .fa::before, a
      line-height 8vh
      padding 0 1.2vh
    a
      color #999
      text-decoration none
  .main
    color white

    .discounts
      font-size 2.8vh
      line-height 4vh
      text-align center
      padding 2vh 0
      border-bottom 1px solid rgba(255, 255, 255, 0.4)
      margin 0 4vh

    .value
      height 40vh
      verticle-align middle
      display flex
      justify-content space-around
      text-align center

      .text, .data
        line-height 40vh
        display inline-block
      .text
        font-size 2.8vh
      .data
        font-size 24vh
    .panel
      .range-ticks
        display flex
        justify-content space-around
        .range-tick
          font-size 2.4vh
          position relative
          width 3vh
          text-align center

          &::before
            font-size 0.6vh
            content: '|'
            position absolute
            width 3vh
            text-align center
            bottom -3vh
            left 0
    .controls
      height 22vh
      background-color white
      position absolute
      bottom 0
      width 100%
      margin-top 2vh
      border-top 1px solid rgba(255, 255, 255, 0.4)

      .line
        width 100%
        height 1vh
        border-bottom 1px solid #eee

      .switch-wrapper
        display block
        font-size 5vh
        color rgb(255, 103, 68)
        margin 0 auto
        width 10vh
        height 10vh
        border-radius 50%
        position absolute
        top -4vh
        left 0
        background-color white
        display flex
        justify-content center
        align-items center
        cursor pointer

        .switch
          text-align center
          verticle-align middle
          height 8vh
          width 8vh
          border-radius 50%
          box-shadow 0 0 4vh rgba(0, 0, 0, 0.1)
          line-height 8vh

          .fa::before
            line-height 8vh
      .switcher-wrapper
        color #999
        width 100%
        text-align center
        height 4vh
        verticle-align middle
        margin-top 4vh

        .switcher
          width 12vh

        *
          display inline-block
          height 4vh
          line-height 4vh

  .footer
    display flex
    justify-content space-around
    height 8vh
    background-color white
    color #aaa
    font-size 3.2vh
    width 100%
    position absolute
    bottom 0
    box-shadow 0 -0.5rem 1rem rgba(128, 128, 128, 0.1)

    .fa::before
      line-height 8vh

</style>
