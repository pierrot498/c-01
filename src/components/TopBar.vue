<template>
  <div class="topBar">
    <GlitchTxt class="title2">C-01 project</GlitchTxt>
    <div class="socialsContainer">
      <div class="logoContainer" @click="goToExternal('https://discord.gg/c-01')">
        <DiscordLogo class="svg" />
      </div>
      <div class="logoContainer" @click="goToExternal('https://twitter.com/C_01_Project')">
        <TwitterLogo class="svg" />
      </div>
    </div>

    <div class="right">
      <a class="icon" v-on:click="hide = !hide">
        <i class="fa fa-bars"></i>
      </a>
    </div>

    <div class="myLinks" v-if="hide">
      <a class="nav-item2" @click="goToExternal('https://discord.gg/c-01')">
        <i class="fab fa-discord fa-so"></i>
        <p class="text">Discord</p></a
      >
      <a class="nav-item2" @click="goToExternal('https://twitter.com/C_01_Project')">
        <i class="fab fa-twitter fa-so" />
        <p class="text">Twitter</p></a
      >
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
  data() {
    return {
      hide: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.onresize);
  },
  methods: {
    onresize() {
      this.hide = false;
    },
    goToExternal(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.right {
  display: none;
}

.myLinks {
  display: none;
}

.title2 {
  font-size: 25px;
}

.topBar {
  position: absolute;
  top: 0;
  width: calc(100% - 100px);
  height: 100px;
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
    box-shadow: 0px 0px 7px 0px #ffffff;
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
    padding: 0%;
    margin: 0;
    top: 0px;
    height: 65px;
    width: calc(100% - 50px);
    padding: 0 25px;
    box-shadow: 0px 4px 7px -5px #ffffff;
    background-color: rgba(#00000b, 0.98);
  }

  .title2 {
    font-size: 14px;
    margin-top: 5px;
    width: 100%;
  }

  .socialsContainer {
    display: none;
    margin-right: -20px;
  }

  .logoContainer {
    display: none;
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
    margin-right: 10px;
  }

  .svg {
    zoom: 75%;
  }

  .right {
    display: block;
    margin-right: -25px;
  }
}

.myLinks {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 65px;
  left: 0px;
  width: 100%;
}

.nav-item2 {
  align-items: center;
  white-space: nowrap;
  user-select: none;
  padding: 20px 20px;
  box-shadow: 0px 0px 7px 0px #ffffff;
  background-color: rgba(#00000b, 0.98);
  color: $white-color;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.icon {
  color: $white-color;
  font-size: 30px;
  margin: 0;
  padding: 15px 20px;
  padding-right: 22px;
  &:hover {
    background: rgba(#c2c2c2, 0.3);
  }
}

.fa-so {
  color: $white-color;
  font-size: 30px;
  opacity: 0.85;
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    opacity: 1;
    transform: translateY(-1px);
  }
}

.text {
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 0.3em;
  font-size: 13px;
}
</style>
