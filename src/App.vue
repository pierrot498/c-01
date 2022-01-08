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
  methods: {},
};
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/made-sunflower");

html,
body,
#app {
  margin: 0;
  padding: 0;
  // background: $background-color1;
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

b {
  font-weight: 800;
  //font-size: 16px;
}

.viewContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 100vh;
  overflow-x: hidden;
  z-index: 200;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  //height: 100%;
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

.title1 {
  font-family: "MADE Sunflower", sans-serif;
  text-transform: uppercase;
  font-size: 30px;
  //line-height: 37px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-align: left;
  margin: 0;
}

.title2 {
  font-family: "MADE Sunflower", sans-serif;
  text-transform: uppercase;
  font-size: 25px;
  //line-height: 30px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-align: left;
  margin: 0;
}

.text {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 3px;
  line-height: 19px;
  margin: 0;
  text-justify: auto;
}

.right {
  text-align: right;
}

.showme {
  display: none;
}
</style>
