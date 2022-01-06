<template>
  <div class="footer">
    <div class="footerCut">
      <img class="footerImg" :src="require('@/assets/imgs/footer_banner.jpg')" />
    </div>
    <button class="footerButton" @click="goToExternal('')">Join Discord</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goToExternal(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 7px #ffffff;
  z-index: 20;
}

.footerCut {
  overflow: hidden;
  max-height: 500px;
}

.footerImg {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.footerButton {
  margin: auto;
  margin-top: -100px;

  z-index: 2000;
  width: 400px;
  height: 80px;

  font-family: "MADE Sunflower", sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 400;

  transition: all 200ms;

  border: 1px solid $white-color;
  border-radius: 5px;
  color: $white-color;
  background-color: transparent;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 2px rgba(186, 228, 242, 0.25));
  cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  opacity: 0.85;
  background: linear-gradient($white-color, transparent);
  text-shadow: 1px 1px 2px black;

  &:hover {
    border: 1px solid $white-color;
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    opacity: 1;
    transform: translateY(-1px);
  }
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .footerButton {
    margin: auto;
    margin-top: -75px;
    width: 200px;
    height: 40px;
    font-size: 20px;
  }
}
</style>
