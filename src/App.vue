<template>
  <div id="app">
    <TopBar />
    <AnimatedBg />
    <router-view />
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import AnimatedBg from "@/components/AnimatedBg";

export default {
  name: "App",
  components: { TopBar, AnimatedBg },
  data: function () {
    return {};
  },
  mounted() {
    console.clear();
    console.log("Loading ...");
    console.log("Mobile : " + this.isMobile());

    setTimeout(() => {
      this.loaded = true;
      console.log("                                                                     ");
      console.log("        CCCCCCCCCCCCC                      000000000       1111111   ");
      console.log("     CCC::::::::::::C                    00:::::::::00    1::::::1   ");
      console.log("   CC:::::::::::::::C                  00:::::::::::::00 1:::::::1   ");
      console.log("  C:::::CCCCCCCC::::C                 0:::::::000:::::::0111:::::1   ");
      console.log(" C:::::C       CCCCCC                 0::::::0   0::::::0   1::::1   ");
      console.log("C:::::C                               0:::::0     0:::::0   1::::1   ");
      console.log("C:::::C                               0:::::0     0:::::0   1::::1   ");
      console.log("C:::::C               --------------- 0:::::0 000 0:::::0   1::::l   ");
      console.log("C:::::C               -:::::::::::::- 0:::::0 000 0:::::0   1::::l   ");
      console.log("C:::::C               --------------- 0:::::0     0:::::0   1::::l   ");
      console.log("C:::::C                               0:::::0     0:::::0   1::::l   ");
      console.log(" C:::::C       CCCCCC                 0::::::0   0::::::0   1::::l   ");
      console.log("  C:::::CCCCCCCC::::C                 0:::::::000:::::::0111::::::111");
      console.log("   CC:::::::::::::::C                  00:::::::::::::00 1::::::::::1");
      console.log("    CCC::::::::::::C                    00::::::::::00   1::::::::::1");
      console.log("        CCCCCCCCCCCCC                      000000000     111111111111");
      console.log("                                                                     ");
      console.log("                                                                     ");
      console.log("                                                                     ");
    }, 1000);
  },
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/made-sunflower");

html,
body,
#app {
  margin: 0;
  padding: 0;
  background-color: $background-color3;
  scroll-behavior: smooth;
}
#app {
  font-family: "MADE Sunflower", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white-color;
  background-color: $background-color3;
  //background: linear-gradient(180deg, $background-color1 0%, $background-color2 248.54%);
  cursor: url("./assets/cursors/Cursor1Glow60px.png") 32 32, default;
  z-index: 0;
}

.page {
  margin: 0;
}
.viewContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  overflow-x: hidden;
  z-index: 200;
  //border: 1px solid blue;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 900px;
  z-index: 200;
  //border: 1px solid green;
}

.max {
  max-width: 1200px;
  margin-top: 50px;
}

.title1,
.title2 {
  font-family: "MADE Sunflower", sans-serif;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: left;
  margin: 0;
}
.title2 {
  font-size: 22px;
}
.text {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 3px;
  margin: 0;
  text-align: left;
  margin: 10px auto;
  //text-align: justify;
}
b {
  font-weight: 800;
}

.txtRight {
  text-align: right;
}

.inline {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  margin: auto;
}

button {
  font-family: "MADE Sunflower", sans-serif;
  margin: auto;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid $white-color;
  background-color: transparent;
  color: $white-color;
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  opacity: 0.85;

  cursor: url("./assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  &:hover {
    opacity: 1;
    transform: translateY(-1px);
    box-shadow: 0px 0px 7px 0px #ffffff;
  }
}

@media screen and (max-width: $layout-breakpoint-large) {
  .center {
    width: calc(100% - 50px);
    margin-left: 25px;
    margin-right: 25px;
  }
}

@media screen and (min-width: $layout-breakpoint-medium) {
  .swapMob {
    display: none;
    text-transform: uppercase;
  }
  .rmMob {
    display: block;
    text-transform: uppercase;
  }
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .swapMob {
    display: block;
  }
  .rmMob {
    display: none;
  }
  .title1 {
    font-size: 19px;
    font-weight: 400;
  }
  .title2 {
    font-size: 19px;
    font-weight: 400;
  }
  .text {
    font-size: 15px;
    font-weight: 300;
  }
}
</style>
