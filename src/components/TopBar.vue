<template>
  <div class="topBar">
    <!-- <p class="title2">C-01 project</p> -->
    <GlitchTxt class="title2">C-01 project</GlitchTxt>
    <div class="socialsContainer">
      <div class="logoContainer" @click="goToExternal('https://discord.gg/c-01')">
        <DiscordLogo class="svg" />
      </div>
      <div class="logoContainer" @click="goToExternal('https://twitter.com/C_01_Project')">
        <TwitterLogo class="svg" />
      </div>
    </div>
  </div>
</template>

<script>
import DiscordLogo from "@/assets/socials/discord.svg";
import TwitterLogo from "@/assets/socials/twitter.svg";
import GlitchTxt from "@/components/GlitchTxt";

export default {
  name: "TopBar",
  props: {
    msg: String,
  },
  components: { GlitchTxt, DiscordLogo, TwitterLogo },
  methods: {
    goToExternal(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.topBar {
  position: relative;
  top: 25px;
  width: calc(100% - 100px);
  height: 100px;
  margin-bottom: -100px;
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  vertical-align: middle;
  z-index: 1000;
  transition: all 200ms;
}

.socialsContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  //width: 190px;
}

.logoContainer {
  width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  border: 1px solid #ffffff;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 2px rgba(186, 228, 242, 0.25));
  border-radius: 5px;
  cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  opacity: 0.85;
  transition: all 200ms;

  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    opacity: 1;
    transform: translateY(-1px);
  }
}

.svg {
  zoom: 100%;
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .topBar {
    position: fixed;

    top: 0px;
    height: 80px;
    width: calc(100% - 50px);
    padding: 0 25px;
    box-shadow: 0px 4px 7px -5px #ffffff;
    background-color: $background-color1;
  }

  .title2 {
    font-size: 14px;
    margin-top: 5px;
  }

  .socialsContainer {
    margin-right: -20px;
  }

  .logoContainer {
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
    margin-right: 10px;
  }

  .svg {
    zoom: 75%;
  }
}
</style>
