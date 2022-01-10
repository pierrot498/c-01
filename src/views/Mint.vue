<template>
  <div class="mint">
    <div class="viewContainer">
      <div class="center">
        <div class="raffeContainer">
          <div class="inline">
            <div class="cornerLeftTop2" />
            <div class="cornerRightTop2" />
          </div>
          <div class="txt">
            <p class="title2">How many Avatar do you want to mint</p>
            <div class="inline" style="width: 200px">
              <button class="mintButton">1</button>
              <button class="mintButton">2</button>
            </div>
          </div>
          <div class="inline">
            <div class="cornerLeftBottom2" />
            <div class="cornerRightBottom2" />
          </div>
        </div>
        <button class="coButton" @click="connect">Connect Wallet</button>
      </div>
    </div>
  </div>
</template>

<script>
//https://www.figma.com/proto/7IZGtgiA5TxOvWH7HtH945/C-01-MINT?page-id=0%3A1&node-id=1%3A122&scaling=min-zoom
export default {
  name: "Mint",
  data: function () {
    return {};
  },
  mounted() {},
  methods: {
    connect() {
      console.log("connect");
    },
  },
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

.inline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.txt {
  font-family: "Helvetica Neue", sans-serif;
  margin: auto;
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  > * {
    transition: all 500ms ease-in-out;
  }
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

.title2 {
  text-align: center;
}
.mintButton {
  margin-top: 50px;
  width: 60px;
  height: 60px;
}

.coButton {
  margin-top: 50px;
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .text {
    font-size: 15px;
  }
}
</style>
