<template>
  <div id="app">
    <TopBar />

    <div class="viewContainer">
      <img class="mainLogo" :src="require('@/assets/C-01_Logo_1.png')" />
      <div class="r1"></div>
    </div>

    <div class="viewContainer">
      <div class="center">
        <div class="row r2">
          <div class="left">
            <p class="title1 t1">Avatar /</p>
            <p class="date d1">8.088</p>
            <p class="text tx1">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
          <div class="right"></div>
        </div>
        <div class="row r3">
          <div class="left"></div>
          <div class="right">
            <p class="title1 title3 t2">Pre sale /</p>
            <p class="date d2">11.113</p>
            <p class="text tx2">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
        </div>
        <div class="row">
          <div class="left">
            <p class="title1 t3">Public sale /</p>
            <p class="date d3">08.367</p>
            <p class="text tx3">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
          <div class="right"></div>
        </div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="r4"></div>
      <div class="center">
        <p class="title1 title3 t4">About c-01 /</p>
        <div class="card c4">
          <div class="cardLeft">
            <img :src="require('@/assets/imgs/about.jpg')" />
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
      <div class="r5"></div>
      <div class="center">
        <p class="title1 t5">NFT /</p>
        <div class="cardNft c5">
          <PersonaCard style="personaCard" />
        </div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="r6"></div>
      <div class="center">
        <p class="title1 title3 t6">Total distribution /</p>
        <div class="contentTotalDistr c6">
          <Circle1 class="spinner" />
          <p class="text">
            Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam. Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis
            laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem
            fugiat ad consequatur veniam.
          </p>
        </div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="r7"></div>
      <div class="center">
        <p class="title1 title3 t7">Roadmap /</p>
        <div class="contentRoadMap c7">
          <RoadMap style="width: 100%; margin: auto" />
        </div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="r8"></div>
      <div class="center">
        <p class="title1 t8">FAQ /</p>
        <div class="contentFAQ c8">
          <div class="inline" v-for="(item, i) in Faq" :key="i">
            <div class="cornerLeftTop" />
            <p class="text faqTxt">{{ item }}</p>
            <div class="cornerRightBottom" />
          </div>
        </div>
      </div>
    </div>

    <div class="viewContainer">
      <div class="r9"></div>
      <div class="center">
        <p class="title1 title3 t9">The theam /</p>
        <div class="contentTeam c9">
          <PersonaCard style="personaCard" v-for="(item, i) in Team" :key="i" />
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footerCut">
        <img class="footerImg" :src="require('@/assets/imgs/footer_banner.jpg')" />
      </div>
      <button class="footerButton" @click="goToExternal('')">Join Discord</button>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Circle1 from "@/assets/imgs/circle.svg";
import RoadMap from "@/assets/imgs/roadmap.svg";
import TopBar from "@/components/TopBar";
import PersonaCard from "@/components/PersonaCard";

export default {
  name: "App",
  components: { Circle1, RoadMap, TopBar, PersonaCard },
  data: function () {
    return {
      scrollMarker: false,
      loaded: false,
      RoadMap: ["", "", "", "", ""],
      Faq: ["Quo illo voluptatem et soluta error est error recusandae ?", "Quo illo voluptatem et soluta error est error recusandae ?", "Quo illo voluptatem et soluta error est error recusandae ?", "Quo illo voluptatem et soluta error est error recusandae ?"],
      Team: ["", "", "", ""],
    };
  },
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    goToExternal(url) {
      window.open(url);
    },
    scrollAnimation() {
      /************ TIMELINE ***********/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r1",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t1", { x: -innerWidth * 1, opacity: 0 })
        .from(".d1", { x: -innerWidth * 1, opacity: 0 })
        .from(".tx1", { x: -innerWidth * 1, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r2",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t2", { x: innerWidth * 1, opacity: 0 })
        .from(".d2", { x: innerWidth * 1, opacity: 0 })
        .from(".tx2", { x: innerWidth * 1, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r3",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t3", { x: -innerWidth * 1, opacity: 0 })
        .from(".d3", { x: -innerWidth * 1, opacity: 0 })
        .from(".tx3", { x: -innerWidth * 1, opacity: 0 });

      /************ ABOUT ***********/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r4",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t4", { x: innerWidth * 1, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r4",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".c4", { x: -innerWidth * 1, opacity: 0 });

      /************ NFT ***********/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r5",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t5", { x: -innerWidth * 1, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r5",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".c5", { x: innerWidth * 1, opacity: 0 });

      /************ TOTAL DISTRIBUTION ***********/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r6",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t6", { x: innerWidth * 1, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r6",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".c6", { x: -innerWidth * 1, opacity: 0 });

      /************ ROADMAP ***********/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r7",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t7", { x: innerWidth * 1, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r7",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".c7", { x: -innerWidth * 1, opacity: 0 });

      /************ FAQ ***********/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r8",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t8", { x: -innerWidth * 1, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r8",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".c8", { x: innerWidth * 1, opacity: 0 });

      /************ TEAM ***********/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r9",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t9", { x: innerWidth * 1, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r9",
            start: "center center",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".c9", { x: -innerWidth * 1, opacity: 0 });
    },
  },
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
  overflow-x: hidden;
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
  letter-spacing: 0.3em;
  line-height: 19px;
  margin: 0;
  text-justify: auto;
}

.right {
  text-align: right;
}

/*********************************** First View ***********************************/

.mainLogo {
  object-fit: fit;
  max-width: 450px;
  width: 23%;
  min-width: 200px;
  margin: auto;
  animation: moveLogo 0.3s forwards linear;
}

@keyframes moveLogo {
  0% {
    transform: translateY(-200%);
    opacity: 0;
  }
  75% {
    opacity: 0.1;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
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
  margin: 0;
}

.text {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.3em;
  margin: 0;
  text-justify: auto;
}

/*********************************** Third View ***********************************/

.title3 {
  text-align: right;
}

.card {
  margin-top: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 500px;
  //border: 1px solid $white-color;
  //overflow: hidden;
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
  border-top: 1px solid $white-color;
  border-right: 1px solid $white-color;
  border-bottom: 1px solid $white-color;
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
  margin-top: 75px;
}

/*********************************** Fifth View ***********************************/

.contentTotalDistr {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 0px;
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
  margin-top: -50px;
  //border: 1px solid $white-color;
}

.spinner {
  width: 300px;
  margin: auto;
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.roadMap {
  width: 600px;
}

/*********************************** Seven View ***********************************/

.contentFAQ {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 75px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 200px;
}

.inline {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  margin-bottom: 50px;
  height: 50px;
  cursor: pointer;
  opacity: 0.85;

  > * {
    transition: all 300ms ease-in-out;
  }

  &:hover {
    opacity: 1;
  }
  &:hover .faqTxt {
    margin-top: 5px;
  }
  &:hover .cornerLeftTop {
    margin-right: 10px;
    margin-top: -10px;
  }
  &:hover .cornerRightBottom {
    margin-left: 10px;
    margin-top: 20px;
  }
}

.faqTxt {
  width: 500px;
}

.cornerLeftTop {
  width: 40px;
  height: 40px;
  border-radius: 8px 0 0 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-left: 2px solid $white-color;
  border-top: 2px solid $white-color;
}

.cornerRightBottom {
  width: 40px;
  height: 40px;
  border-radius: 0 0 8px 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-right: 2px solid $white-color;
  border-bottom: 2px solid $white-color;
  margin-top: 10px;
}

/*********************************** Eighth View ***********************************/

.contentTeam {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 50px;
  width: 800px;
  //border: 1px solid $white-color;
}

.personaCard {
}
/*********************************** Footer ***********************************/

.footer {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 7px #ffffff;
}

.footerCut {
  overflow: hidden;
  max-height: 500px;
}

.footerImg {
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
}

.footerButton {
  margin: auto;
  margin-top: -100px;

  z-index: 10;
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
  cursor: pointer;
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
  .title1,
  .title2 {
    font-size: 20px;
    //line-height: auto;
    font-weight: 400;
  }
  .text {
    font-size: 10px;
    // line-height: 19px;
    font-weight: 300;
  }
  .date {
    font-size: 50px;
    font-weight: 500;
    // line-height: 183px;
  }

  .center {
    width: calc(100% - 50px);
    margin-left: 25px;
    margin-right: 25px;
  }

  .cardRight {
    overflow: hidden;
  }

  .footerButton {
    margin: auto;
    margin-top: -75px;
    width: 200px;
    height: 40px;
    font-size: 20px;
  }
}
</style>
