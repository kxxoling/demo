<template lang="pug">
.chat-container
  .chat
    header.header
      .avatar
        img(src="https://avatars0.githubusercontent.com/u/1227139")
      .text-container
        .name Kane Blueriver
        .status Online

    .main
      .message-container.left(v-for="i in messages")
        .avatar
          img(:src="i.user.avatar")
        .text-container
          .message {{ i.message }}
          .time {{ i.time }}
    footer.footer
      input.input(placeholder="Type message...")
      button.submit SEND
</template>

<script>
export default {
  name: 'message-dialog',
  data() {
    return {
      messages: [{
        user: {
          name: 'Kane Blueriver',
          avatar: 'https://avatars0.githubusercontent.com/u/1227139',
        },
        message: 'Hi there, I\'m Kane and you? Are you still there?',
        time: '1: 45',
      }, {
        user: {
          name: 'Kane Blueriver',
          avatar: 'https://avatars0.githubusercontent.com/u/1227139',
        },
        message: 'Hi there, I\'m Kane and you? Are you still there?',
        time: '1: 45',
      }],
    };
  },
};
</script>

<style lang="stylus" scoped>
$main-grey-color = rgba(0, 0, 0, 0.5)
$body-grey-color = rgba(0, 0, 0, 0.4)

.chat-container
  padding 20%
  width 100%
  height 100%
  box-sizing border-box
  display flex
  justify-content center
  align-items center
  background linear-gradient(135deg, #044f48, #2a7561)

  .avatar
    width 2rem
    height 2rem
    border 2px solid #bbb
    border-radius 50%
    overflow hidden
    flex-shrink 0

    img
      height 100%
      width 100%

  .chat
    width 20rem
    border-radius 0.6rem
    overflow hidden

    .header
      box-sizing border-box
      background $main-grey-color
      width 100%
      padding 0.6rem
      display flex
      justify-content flex-start

      .text-container
        padding-left 0.6rem
        .name
          color white
        .status
          color #bbb
    .main
      background $body-grey-color
      width 100%
      height 24rem
      padding 0.6rem
      box-sizing border-box

      .message-container
        display flex
        justify-content flex-start

        .text-container
          padding-left 0.6rem

          .message
            $v-padding = 0.5
            $h-padding = 0.8
            padding ($v-padding)rem ($h-padding)rem
            border-radius ($v-padding)rem ($v-padding)rem ($v-padding)rem 0
            color #999
            background $main-grey-color
            position relative
            text-align left

            &:before
              $triangle-width = 0.5
              content ''
              position absolute
              bottom -($triangle-width)rem
              left 0
              border-top ($triangle-width)rem solid $main-grey-color
              border-right ($triangle-width)rem solid transparent

          .time
            color #777
            height 1.2rem
            font-size 0.8rem
            margin-left 0.8rem
    .footer
      padding 0.6rem
      background $main-grey-color
      display flex
      justify-content space-between

      .submit
        color white
        background #248A52
        border-radius 2rem
        width 4rem
        padding 0.4rem
        border none
        font-size 0.8rem

      .input
        background rgba(255, 255, 255, 0)
        border none
        color white

        &:focus
          outline none
</style>
