<template>
  <p class="text" v-html="autoTxt"></p>
</template>

<script>
export default {
  name: "AnimatedBg",
  props: {
    txt: String,
    active: Boolean,
  },
  data: function () {
    return {
      autoTxt: "",
      pos: 0,
    };
  },
  watch: {
    active: function (val) {
      if (val) {
        this.autoType();
      }
    },
  },
  mounted() {},
  methods: {
    autoType() {
      setTimeout(
        () => {
          this.autoTxt += this.txt[this.pos];
          if (this.pos < this.txt.length - 1) {
            this.pos++;
          }
          this.autoTxt += this.txt[this.pos];
          if (this.pos < this.txt.length - 1) {
            this.pos++;
            this.autoType();
          }
        },
        4
        //Math.random() > 0.1 ? 2 : 50
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  text-justify: inter-word;
}
</style>
