<template>
  <div id="app">
    <div class="firstViewContainer">
      <div class="topBar">
        <p class="Title1">C-01 project</p>
        <div class="socialsContainer">
          <div class="logoContainer">
            <DiscordLogo />
          </div>
          <div class="logoContainer">
            <TwitterLogo />
          </div>
        </div>
      </div>

      <!-- <MainLogo class="mainLogo" /> -->
      <img class="mainLogo" :src="require('@/assets/C-01_Logo_1.png')" alt="Vue Logo" />
    </div>

    <div class="secondViewContainer"></div>
  </div>
</template>

<script>
// import MainLogo from "@/assets/C-01_Logo_1.png";
import DiscordLogo from "@/assets/socials/discord.svg";
import TwitterLogo from "@/assets/socials/twitter.svg";

export default {
  name: "App",
  components: { DiscordLogo, TwitterLogo },
};
</script>

<style lang="scss">
@import url("http://fonts.cdnfonts.com/css/made-sunflower");

html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "MADE Sunflower", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white-color;
  background-color: $background-color1;
  background: linear-gradient(180deg, $background-color1 0%, $background-color2 248.54%);
}

.firstViewContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.topBar {
  width: 80%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.Title1 {
  font-family: "MADE Sunflower", sans-serif;
  color: $white-color;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.3em;
}

.socialsContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
}

.logoContainer {
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #ffffff;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 2px rgba(186, 228, 242, 0.25));
  border-radius: 5px;
}

.mainLogo {
  object-fit: fit;
  width: 23%;
  min-width: 200px;
  margin: auto;
}

.secondViewContainer {
  height: 100vh;
}
</style>
