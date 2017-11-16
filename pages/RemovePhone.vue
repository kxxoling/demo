<template lang="pug">
.phone-container
  .phone
    header.receiver
    .body
      each i in new Array(19)
        .icon
      .dock
        each i in new Array(4)
          .icon
    footer.button
</template>

<style lang="stylus" scoped>
$phone-height = 1040
$phone-width = 550
$phone-border-radius = 30

$screen-width = 480
$screen-height = 820

$dock-height = 146

$icon-width = 86
$icon-border-radius = 16
$icon-margin = 17

$close-button-width = 216

$receiver-width = 104
$receiver-height = 4
$receiver-margin = 46
$camera-width = 20

$button-width = 86
$button-border-width = 6
$footer-margin = 14

.phone-container
  background-color #938889
  padding-left 100px
  padding-top 100px

  .phone
    height $phone-height px
    width $phone-width px
    background-color black
    border-radius $phone-border-radius px
    position relative
    zoom 0.6
    padding-top 1px

    &::before
      content "X"
      color white
      position absolute
      display block
      right -($close-button-width / 2) px
      height $close-button-width px
      top -($close-button-width / 2) px
      width $close-button-width px
      border-radius ($close-button-width / 2) px
      background-color red
      text-align center
      cursor pointer
      z-index 1
      line-height $close-button-width px
      font-size ($close-button-width/ 2) px

    .receiver
      background-color #444444
      width $receiver-width px
      height $receiver-height px
      margin-left auto
      margin-right auto
      margin-top $receiver-margin px
      margin-bottom $receiver-margin px

      &::before
        content ""
        display block
        position relative
        top -(($camera-width - $receiver-height)/2) px
        left -40px

        height $camera-width px
        width $camera-width px
        border-radius ($camera-width/2) px
        background-color #444444
    .body
      background-color #5d5859
      width $screen-width px
      height $screen-height px
      margin-left auto
      margin-right auto
      position relative

      .icon
        display inline-block
        width $icon-width px
        height $icon-width px
        border-radius $icon-border-radius px
        background-color #898989
        margin $icon-margin px

      .dock
        position absolute
        bottom 0
        background-color #484848
        width 100%
        height $dock-height px

        display flex
        justify-content space-between
        align-items center

    .button
      height $button-width px
      width $button-width px
      margin-left auto
      margin-right auto
      margin-top $footer-margin px
      margin-bottom $footer-margin px
      border-radius ($button-width / 2 + $button-border-width) px
      border ($button-border-width px) solid #484848
</style>
