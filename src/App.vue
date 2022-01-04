<template>
  <div id="app">
    <div class="viewContainer">
      <div class="topBar">
        <p class="title2">C-01 project</p>
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

    <div class="viewContainer">
      <div class="center">
        <div class="row">
          <div class="left">
            <p class="title1">Avatar /</p>
            <p class="date">8.088</p>
            <p class="text">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
          <div class="right"></div>
        </div>
        <div class="row">
          <div class="left"></div>
          <div class="right">
            <p class="title1">Pre sale /</p>
            <p class="date">11.113</p>
            <p class="text">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
        </div>
        <div class="row">
          <div class="left">
            <p class="title1">Public sale /</p>
            <p class="date">08.367</p>
            <p class="text">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
          <div class="right"></div>
        </div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="center">
        <p class="title1 title3">About c-01 /</p>
        <div class="card">
          <div class="cardLeft">
            <img :src="require('@/assets/imgs/about.jpg')" alt="Vue Logo" />
          </div>
          <div class="cardRight">
            <p class="text">
              Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam. Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis
              laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem
              fugiat ad consequatur veniam.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="center">
        <p class="title1">NFT /</p>
        <div class="cardNft"></div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="center">
        <p class="title1 title3">Total distribution /</p>
        <div class="contentTotalDistr">
          <img :src="require('@/assets/imgs/circle.jpg')" alt="Vue Logo" />
          <p class="text">
            Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam. Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis
            laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem
            fugiat ad consequatur veniam.
          </p>
        </div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="center">
        <p class="title1 title3">Roadmap /</p>
        <div class="contentRoadMap"></div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="center">
        <p class="title1">FAQ /</p>
        <div class="contentFAQ"></div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="center">
        <p class="title1">The theam /</p>
        <div class="contentTeam"></div>
      </div>
    </div>

    <div class="footer">
      <img class="footerImg" :src="require('@/assets/imgs/footer_banner.jpg')" alt="Vue Logo" />
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

.viewContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  //height: 100vh;
  border: 1px solid red;
}

.title1 {
  font-family: "MADE Sunflower", sans-serif;
  text-transform: uppercase;
  font-size: 30px;
  line-height: 37px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-align: left;
  margin: 0;
}

.title2 {
  font-family: "MADE Sunflower", sans-serif;
  text-transform: uppercase;
  font-size: 25px;
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-align: left;
  margin: 0;
}

.text {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.3em;
  line-height: 19px;
  margin: 0;
  text-justify: auto;
}

.right {
  text-align: right;
}

/*********************************** First View ***********************************/

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

/*********************************** Second View ***********************************/

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: auto;
  width: 100%;
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

.date {
  font-family: Impact, sans-serif;
  font-size: 150px;
  font-weight: 500;
  line-height: 183px;
  margin: 0;
}

.text {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.3em;
  line-height: 19px;
  margin: 0;
  text-justify: auto;
}

/*********************************** Third View ***********************************/

.title3 {
  text-align: right;
}

.card {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 500px;
  border: 1px solid $white-color;
}

.cardLeft {
  width: 45%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 0px 7px #ffffff;
  }
}

.cardRight {
  width: 55%;
  p {
    font-family: "Helvetica Neue", sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 28px;
    margin: 0;
    text-align: left;
    padding: 20px;
  }
}

/*********************************** Fourth View ***********************************/

.cardNft {
  margin: auto;
  margin-top: 50px;
  width: 400px;
  height: 500px;
  border: 1px solid $white-color;
}

/*********************************** Fifth View ***********************************/

.contentTotalDistr {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  width: 600px;

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    margin: auto;
    padding-bottom: 50px;
  }
}

/*********************************** Sixth View ***********************************/

.contentRoadMap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  width: 600px;
  height: 300px;
  border: 1px solid $white-color;
}

/*********************************** Seven View ***********************************/

.contentFAQ {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  width: 600px;
  height: 300px;
  border: 1px solid $white-color;
}

/*********************************** Eighth View ***********************************/

.contentTeam {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  width: 600px;
  height: 300px;
  border: 1px solid $white-color;
}

/*********************************** Footer ***********************************/

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footerImg {
  width: 100%;
  // height: 100%;
  // max-height: 500px;
  object-fit: cover;
}
</style>
