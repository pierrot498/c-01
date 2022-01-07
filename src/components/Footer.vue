<template>
  <div class="footer">
    <div class="footercontainer">
      <img class="logo" :src="require('@/assets/imgs/C-01_Logo_1.png')" />
      <div class="line">
        <a class="text link" href="#intro">Intro</a>
        <a class="text">/</a>
        <a class="text link" href="#about">About C-01</a>
        <a class="text">/</a>
        <a class="text link" href="#nft">NFT</a>
      </div>
      <div class="line">
        <a class="text link" href="#total">Total distribution</a>
        <a class="text">/</a>
        <a class="text link" href="#road">RoadMap</a>
        <a class="text">/</a>
        <a class="text link" href="#faq">FAQ</a>
        <a class="text">/</a>
        <a class="text link" href="#team">The team</a>
      </div>
      <div class="socialsContainer2">
        <div class="logoContainer2" @click="goToExternal('https://www.instagram.com/c_01.nft/')">
          <i class="fab fa-instagram"></i>
        </div>
        <div class="logoContainer2" @click="goToExternal('https://twitter.com/C_01_Project')">
          <i class="fab fa-twitter" />
        </div>
        <div class="logoContainer2" @click="goToExternal('https://discord.gg/c-01')">
          <i class="fab fa-discord"></i>
        </div>
      </div>
      <div class="lineSmall">
        <p class="text small">All Rights Reserved C-01</p>
      </div>
      <div class="lineSmall">
        <p class="text small">All contents of this document, unless otherwise credited, are copyright © 2021 C-01</p>
      </div>
    </div>
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
  box-shadow: 0px 0px 3px #ffffff;
  z-index: 20;
}

.footercontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  max-width: 900px;
  // height: 400px;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 50px;
  //border: 1px solid red;
}

.logo {
  width: 150px;
  height: auto;
  object-fit: cover;
  margin: auto;
  margin-bottom: 50px;
}

.line {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  // width: 100%;
  flex-wrap: nowrap;
  margin: auto;
  margin-bottom: 15px;
  //border: 1px solid red;
}

.lineSmall {
  margin: auto;
}

.text {
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
}

.link {
  text-decoration: none;
  margin-left: 25px;
  color: $white-color;
  margin-right: 25px;
  opacity: 0.85;
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    opacity: 1;
    transform: translateY(-1px);
    cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  }
}

.socialsContainer2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  //border: 1px solid red;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 35px;
}

.logoContainer2 {
  width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
}

.fab {
  color: $white-color;
  font-size: 35px;
  opacity: 0.85;
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    opacity: 1;
    transform: translateY(-1px);
    cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  }
}

.small {
  font-family: sans-serif;
  text-transform: none;
  font-size: 12px;
  font-weight: 00;
  opacity: 0.4;
}

.builder {
  font-size: 10px;
}

.builderlink {
  border-bottom: 1px solid $white-color;
  opacity: 0.85;
  &:hover {
    opacity: 1;
    color: $white-color;
    cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  }
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .footercontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    width: calc(100% - 20px);
    // height: 400px;
    margin: auto;
    padding: 0 10px;
    padding-top: 20px;
    padding-bottom: 50px;
    //border: 1px solid red;
  }

  .text {
    font-family: "MADE Sunflower", sans-serif;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 500;
  }

  .link {
    margin-left: 10px;
    margin-right: 10px;
  }

  .small {
    text-transform: none;
    font-size: 8px;
    opacity: 0.5;
    font-family: "Helvetica Neue", sans-serif;
  }
}
</style>
