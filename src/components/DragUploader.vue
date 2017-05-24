<template lang="jade">
.drag-uploader
  .box(@dragover="onDragover" @drop="onDrop" @dragend="onDragend" @dragstart="onDragstart")
    .text Drag images here.
    img.img
  img.img(v-for="file in files" v-bind:src="file")
</template>

<script type="text/javascript">
document.ondragover = function preventDefault(e) {
  e.preventDefault();
};


export default {
  data() {
    return {
      files: [],
    };
  },
  mounted() {
  },
  methods: {
    onDragover() {
      this.$el.querySelector('.box').classList.add('dragon');
    },
    onDrop(ev) {
      this.$el.querySelector('.box').classList.remove('dragon');

      // Implement your upload function here.
      const files = ev.dataTransfer.files;
      this.files = [...Array(files.length).keys()].map(i => (
        URL.createObjectURL(files[i])
      ));
      ev.preventDefault();
      ev.stopPropagation();
    },
    onDragend(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    },
    onDragstart(ev) {
      ev.preventDefault();
    },
  },

};
</script>

<style lang="stylus">
.box
  width 400px
  height 200px
  background-color #e0f0fe
  outline 2px dashed black
  outline-offset -4px

  display flex
  justify-content center
  align-items center

  &.dragon
    background-color white

  .text
    color #555

.img
  max-height 200px
  width auto
  border solid grey 1px
  margin 2px
</style>
