<template>
  <div class="raffle">
    <div class="viewContainer">
      <div class="center">
        <!-- <GlitchTxt class="title1">Raffle /</GlitchTxt> -->

        <div class="raffeContainer" @mouseenter="mouseEnter" @mousemove="mouseMove" @mouseleave="mouseLeave">
          <div class="inline3">
            <div class="cornerLeftTop2" />
            <div class="cornerRightTop2" />
          </div>
          <div class="txt">
            <p class="title2">Register to the raffle now</p>
            <p class="text">If you are whitelisted, you will be able to mint 2 hours prior to the public sale on Friday,14th at 2pm UTC. You will be guaranteed to mint up to 2 NFTs. You can however register for the raffle with a different Ethereum address.</p>
          </div>
          <div class="inline3">
            <div class="cornerLeftBottom2" />
            <div class="cornerRightBottom2" />
          </div>
        </div>
        <button class="regButton">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
// https://www.figma.com/proto/8jqkgljMtHj597jYXLx22c/C-01-RAFFLE?page-id=0%3A1&node-id=1%3A122&scaling=min-zoom
// import GlitchTxt from "@/components/GlitchTxt";

export default {
  name: "Raffle",
  // components: { GlitchTxt },
  data: function () {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.raffeContainer {
  margin-top: 100px;
  > * {
    transition: all 500ms ease-in-out;
  }
  &:hover .txt {
    padding: 50px;
    cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  }
}

.inline3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.txt {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  > * {
    transition: all 500ms ease-in-out;
  }
}

.title2 {
  text-align: center;
  margin-bottom: 30px;
}

.cornerLeftTop2 {
  width: 60px;
  height: 60px;
  border-radius: 8px 0 0 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-left: 2px solid $white-color;
  border-top: 2px solid $white-color;
}

.cornerRightTop2 {
  width: 60px;
  height: 60px;
  border-radius: 0 8px 0 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-right: 2px solid $white-color;
  border-top: 2px solid $white-color;
}

.cornerLeftBottom2 {
  width: 60px;
  height: 60px;
  border-radius: 0 0 0 8px;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-left: 2px solid $white-color;
  border-bottom: 2px solid $white-color;
}

.cornerRightBottom2 {
  width: 60px;
  height: 60px;
  border-radius: 0 0 8px 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-right: 2px solid $white-color;
  border-bottom: 2px solid $white-color;
}

.regButton {
  margin-top: 50px;
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .t2 {
    font-size: 15px;
    margin-bottom: 20px;
  }
  .text {
    font-size: 12px;
  }
}
</style>
