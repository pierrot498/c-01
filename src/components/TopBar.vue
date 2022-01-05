<template>
  <div class="topBar">
    <p class="title2">C-01 project</p>
    <div class="socialsContainer">
      <div class="logoContainer" @click="goToExternal('https://discord.gg/c-01')">
        <DiscordLogo />
      </div>
      <div class="logoContainer" @click="goToExternal('https://twitter.com/C_01_Project')">
        <TwitterLogo />
      </div>
    </div>
  </div>
</template>

<script>
import DiscordLogo from "@/assets/socials/discord.svg";
import TwitterLogo from "@/assets/socials/twitter.svg";

export default {
  name: "TopBar",
  props: {
    msg: String,
  },
  components: { DiscordLogo, TwitterLogo },
  methods: {
    goToExternal(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.topBar {
  position: fixed;
  top: 25px;
  width: calc(100% - 100px);
  height: 100px;
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.socialsContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 190px;
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

  border: 1px solid #ffffff;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 2px rgba(186, 228, 242, 0.25));
  border-radius: 5px;
  //cursor: pointer;
  cursor: url("../assets/imgs/cursorPointer.png"), auto;
  opacity: 0.85;
  transition: all 200ms;

  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    opacity: 1;
    transform: translateY(-1px);
  }
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .topBar {
    display: none;
  }
}
</style>
