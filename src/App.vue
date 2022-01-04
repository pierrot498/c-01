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

    <div class="secondViewContainer">
      <div class="center">
        <div class="row">
          <div class="left">
            <p class="Title2">Avatar /</p>
            <p class="date">8.088</p>
            <p class="text">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
          <div class="right"></div>
        </div>
        <div class="row">
          <div class="left"></div>
          <div class="right">
            <p class="Title2">Pre sale /</p>
            <p class="date">11.113</p>
            <p class="text">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
        </div>
        <div class="row">
          <div class="left">
            <p class="Title2">Public sale /</p>
            <p class="date">08.367</p>
            <p class="text">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
          <div class="right"></div>
        </div>
      </div>
    </div>
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
  min-height: 100vh;
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
  cursor: pointer;
  &:hover {
    border: 1px solid #ffffff;
  }
}

.mainLogo {
  object-fit: fit;
  max-width: 450px;
  width: 23%;
  min-width: 200px;
  margin: auto;
}

.secondViewContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: auto;
  max-width: 900px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 150px;
}

.left {
  width: 50%;
  text-align: left;
  .text {
    text-align: right;
  }
}

.right {
  width: 50%;
  text-align: right;
  .text {
    text-align: left;
  }
}

.Title2 {
  font-family: "MADE Sunflower", sans-serif;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0.3em;
  margin: 0;
}

.date {
  font-family: "MADE Sunflower", sans-serif;
  font-size: 150px;
  font-weight: 400;
  margin: 0;
  //letter-spacing: 0.3em;
}

.text {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.3em;
  margin: 0;
}
</style>
