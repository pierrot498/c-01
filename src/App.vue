<template>
  <div id="app">
    <TopBar />
    <AnimatedBg />

    <div class="viewContainer">
      <div class="inline2">
        <Logo1 class="logoLetter" v-bind:style="{ animation: loaded ? 'letter 2s infinite' : 'moveLogo 0.4s forwards linear' }" />
        <Logo2 class="logoLetter" v-bind:style="{ animation: loaded ? 'letter 1.8s infinite' : 'moveLogo 0.6s forwards linear' }" />
        <Logo3 class="logoLetter" v-bind:style="{ animation: loaded ? 'letter 2.2s infinite' : 'moveLogo 0.8s forwards linear' }" />
        <Logo4 class="logoLetter" v-bind:style="{ animation: loaded ? 'letter 1.6s infinite' : 'moveLogo 1s forwards linear' }" />
      </div>
      <div class="r1"></div>
    </div>

    <div class="viewContainer" id="intro" v-if="show.intro">
      <div class="center">
        <div class="row r2">
          <div class="left">
            <GlitchTxt class="title1 t1">Avatar /</GlitchTxt>
            <p class="date d1">8.088</p>
            <p class="text avatarTxt tx1">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
          <div class="right hideme"></div>
        </div>
        <div class="row r3">
          <div class="left hideme"></div>
          <div class="right">
            <GlitchTxt class="title1 title3 t2">Pre sale /</GlitchTxt>
            <p class="date d2">11.113</p>
            <p class="text avatarTxt tx2">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
        </div>
        <div class="row">
          <div class="left">
            <GlitchTxt class="title1 t3">Public sale /</GlitchTxt>
            <p class="date d3">08.367</p>
            <p class="text avatarTxt tx3">Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.</p>
          </div>
          <div class="right hideme"></div>
        </div>
      </div>
    </div>

    <div class="viewContainer" id="about" v-if="show.about" v-bind:style="{ opacity: show.aboutLock ? '1' : '0' }">
      <div class="r4"></div>
      <div class="center">
        <GlitchTxt class="title1 title3 t4">About c-01 /</GlitchTxt>
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

    <div class="viewContainer" id="nft" v-if="show.nft" v-bind:style="{ opacity: show.nftLock ? '1' : '0' }">
      <div class="r5"></div>
      <div class="center">
        <GlitchTxt class="title1 t5">NFT /</GlitchTxt>
        <div class="cardNft c5">
          <PersonaCardExtend class="PersonaCardExtend" :name="'Asian girl'" />
        </div>
      </div>
    </div>

    <div class="viewContainer" id="total" v-if="show.total" v-bind:style="{ opacity: show.totalLock ? '1' : '0' }">
      <div class="r6"></div>
      <div class="center">
        <GlitchTxt class="title1 title3 t6">Total distribution /</GlitchTxt>
        <div class="contentTotalDistr c6">
          <div class="spinMove">
            <Spinner class="spinner" />
          </div>
          <p class="text totalTxt">
            Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam. Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis
            laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem fugiat ad consequatur veniam.Cum quod illum ut molestiae quaerat qui numquam labore eum natus galisum aut officiis laboriosam quo sapiente quod? Cum recusandae quasi vel eligendi corrupti est quidem
            fugiat ad consequatur veniam.
          </p>
        </div>
      </div>
    </div>

    <div class="viewContainer" id="road" v-if="show.road" v-bind:style="{ opacity: show.roadLock ? '1' : '0' }">
      <div class="r7" id="triger"></div>
      <div class="center">
        <GlitchTxt class="title1 title3 t7">Roadmap /</GlitchTxt>
        <div class="contentRoadMap c7">
          <RoadMap class="roadMap" />
        </div>
      </div>
    </div>

    <div class="viewContainer" id="faq" v-if="show.faq" v-bind:style="{ opacity: show.faqLock ? '1' : '0' }">
      <div class="r8"></div>
      <div class="center">
        <GlitchTxt class="title1 t8">FAQ /</GlitchTxt>
        <div class="contentFAQ c8">
          <div class="inline" v-for="(item, i) in Faq" :key="i" @click="item.hide = !item.hide" :id="'faq' + i">
            <div class="cornerLeftTop" />
            <div class="faqCol">
              <p class="text faqTxt question">{{ item.q }}</p>
              <p class="text faqTxt answer" v-if="!item.hide">{{ item.r }}</p>
            </div>
            <div class="cornerRightBottom" />
          </div>
        </div>
      </div>
    </div>

    <div class="viewContainer" id="team" v-if="show.team" v-bind:style="{ opacity: show.teamLock ? '1' : '0' }">
      <div class="r9"></div>
      <div class="center">
        <GlitchTxt class="title1 title3 t9">The team /</GlitchTxt>
        <div class="contentTeam">
          <PersonaCard class="personaCard" v-for="(item, i) in Team" :key="i" :name="item.name" :insta="item.insta" :discord="item.discord" :twitter="item.twitter" :id="'pcard' + i" />
        </div>
      </div>
    </div>

    <Footer v-if="show.footer" />
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Logo1 from "@/assets/imgs/Cstroke.svg";
import Logo2 from "@/assets/imgs/-stroke.svg";
import Logo3 from "@/assets/imgs/0stroke.svg";
import Logo4 from "@/assets/imgs/1stroke.svg";

import TopBar from "@/components/TopBar";
import AnimatedBg from "@/components/AnimatedBg";
import PersonaCard from "@/components/PersonaCard";
import PersonaCardExtend from "@/components/PersonaCardExtend";
import GlitchTxt from "@/components/GlitchTxt";
import Spinner from "@/components/Spinner";
import RoadMap from "@/components/RoadMap";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { Logo1, Logo2, Logo3, Logo4, Spinner, RoadMap, GlitchTxt, TopBar, AnimatedBg, PersonaCard, PersonaCardExtend, Footer },
  data: function () {
    return {
      scrollMarker: false,
      aSpeed: 0.1,
      loaded: false,
      RoadMap: ["", "", "", "", ""],
      show: {
        intro: true,
        introLock: true,
        about: false,
        aboutLock: false,
        nft: false,
        nftLock: false,
        total: false,
        totalLock: false,
        road: false,
        roadLock: false,
        faq: false,
        faqLock: false,
        team: false,
        teamLock: false,
        footer: false,
        footerLock: false,
      },
      Faq: [
        {
          q: "Quo illo voluptatem et soluta error est error recusandae ?",
          r: "Quo illo voluptatem et soluta error est error recusandae ?",
          hide: true,
        },
        {
          q: "Quo illo voluptatem et soluta error est error recusandae ?",
          r: "Quo illo voluptatem et soluta error est error recusandae ?",
          hide: true,
        },
        {
          q: "Quo illo voluptatem et soluta error est error recusandae ?",
          r: "Quo illo voluptatem et soluta error est error recusandae ?",
          hide: true,
        },
        {
          q: "Quo illo voluptatem et soluta error est error recusandae ?",
          r: "Quo illo voluptatem et soluta error est error recusandae ?",
          hide: true,
        },
      ],
      Team: [
        {
          name: "Prénom Nom",
          insta: "",
          twitter: "",
          discord: "",
        },
        {
          name: "Prénom Nom",
          insta: "",
          twitter: "",
          discord: "",
        },
        {
          name: "Prénom Nom",
          insta: "",
          twitter: "",
          discord: "",
        },
        {
          name: "Prénom Nom",
          insta: "",
          twitter: "",
          discord: "",
        },
      ],
    };
  },
  mounted() {
    this.scrollAnimation();
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  },
  watch: {
    show: {
      handler: function (v) {
        if (v.about && !v.aboutLock) {
          v.aboutLock = true;
          setTimeout(() => {
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
              .from(".t4", { x: innerWidth * this.aSpeed, opacity: 0 })
              .from(".c4", { x: -innerWidth * this.aSpeed, opacity: 0 })
              .call(() => {
                setTimeout(() => {
                  this.show.nft = true;
                }, 200);
              });
          }, 100);
        }
        if (v.nft && !v.nftLock) {
          v.nftLock = true;
          setTimeout(() => {
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
              .from(".t5", { x: -innerWidth * this.aSpeed, opacity: 0 })
              .from(".c5", { x: innerWidth * this.aSpeed, opacity: 0 });
            setTimeout(() => {
              this.show.total = true;
            }, 1000);
          }, 100);
        }
        if (v.total && !v.totalLock) {
          v.totalLock = true;
          setTimeout(() => {
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
              .from(".t6", { x: innerWidth * this.aSpeed, opacity: 0 })
              .from(".spinMove", { x: -innerWidth * this.aSpeed, opacity: 0 })
              .from(".totalTxt", { x: innerWidth * this.aSpeed, opacity: 0 })
              .call(() => {
                setTimeout(() => {
                  this.show.road = true;
                }, 200);
              });
          }, 100);
        }
        if (v.road && !v.roadLock) {
          v.roadLock = true;
          setTimeout(() => {
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
              .from(".t7", { x: innerWidth * this.aSpeed, opacity: 0 })
              .call(() => {
                setTimeout(() => {
                  this.show.faq = true;
                }, 8000);
              });
          }, 100);
        }
        if (v.faq && !v.faqLock) {
          v.faqLock = true;
          setTimeout(() => {
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
              .from(".t8", { x: -innerWidth * this.aSpeed, opacity: 0 })
              .from("#faq0", { x: innerWidth * this.aSpeed, opacity: 0 })
              .from("#faq1", { x: -innerWidth * this.aSpeed, opacity: 0 })
              .from("#faq2", { x: innerWidth * this.aSpeed, opacity: 0 })
              .from("#faq3", { x: -innerWidth * this.aSpeed, opacity: 0 })
              .call(() => {
                setTimeout(() => {
                  this.show.team = true;
                }, 200);
              });
          }, 100);
        }
        if (v.team && !v.teamLock) {
          v.teamLock = true;
          setTimeout(() => {
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
              .from(".t9", { x: innerWidth * this.aSpeed, opacity: 0 })
              .from("#pcard0", { x: -innerWidth * this.aSpeed, opacity: 0 })
              .from("#pcard1", { x: innerWidth * this.aSpeed, opacity: 0 })
              .from("#pcard2", { x: -innerWidth * this.aSpeed, opacity: 0 })
              .from("#pcard3", { x: innerWidth * this.aSpeed, opacity: 0 })
              .call(() => {
                setTimeout(() => {
                  this.show.footer = true;
                }, 200);
              });
          }, 100);
        }
        if (v.footer && !v.footerLock) {
          v.footerLock = true;
          setTimeout(() => {
            /************ Footer ***********/
          }, 100);
        }
      },
      deep: true,
    },
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
        .from(".t1", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .from(".d1", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .from(".tx1", { x: -innerWidth * this.aSpeed, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r2",
            start: "center top",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t2", { x: innerWidth * this.aSpeed, opacity: 0 })
        .from(".d2", { x: innerWidth * this.aSpeed, opacity: 0 })
        .from(".tx2", { x: innerWidth * this.aSpeed, opacity: 0 })
        .call(() => {
          setTimeout(() => {
            this.show.about = true;
          }, 200);
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r3",
            start: "center top",
            end: "bottom top",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t3", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .from(".d3", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .from(".tx3", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .call(() => {
          setTimeout(() => {
            this.show.about = true;
          }, 200);
        });
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
  background: $background-color1;
  scroll-behavior: smooth;
}

#app {
  font-family: "MADE Sunflower", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white-color;
  background-color: $background-color1;
  background: linear-gradient(180deg, $background-color1 0%, $background-color2 248.54%);
  cursor: url("./assets/cursors/Cursor1Glow60px.png") 32 32, default;
  z-index: 0;
}

.viewContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  overflow-x: hidden;
  z-index: 200;
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

.showme {
  display: none;
}

/*********************************** First View ***********************************/

.mainLogo {
  object-fit: fit;
  max-width: 450px;
  width: 23%;
  min-width: 200px;
  margin: auto;
  // animation: moveLogo 0.3s forwards linear;
}

@keyframes moveLogo {
  0% {
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 40px rgba(33, 196, 250, 1)) blur(2px);
    transform: translateY(-200%);
    opacity: 0;
  }
  95% {
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 40px rgba(33, 196, 250, 1)) blur(2px);
    transform: translateY(-100%);
    opacity: 0.1;
  }
  100% {
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 40px rgba(33, 196, 250, 1)) blur(0px);
    transform: translateY(0%);
    opacity: 1;
  }
}

.inline2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  margin: auto;
  width: 700px;
  //border: 1px solid red;
}

.logoLetter {
  margin: 0;
  line-height: 0;
  height: 200px;
  margin: 0 20px;

  fill: $white-color;
  > * {
    //fill: $white-color;
    stroke: $white-color;
    stroke-width: 10px;
    transition: all 500ms ease-in-out;
  }
  box-sizing: border-box;
  // filter: drop-shadow(2px 2px 10px rgba(33, 196, 250, 0.9));
  //border: 1px solid red;
  //animation: glitch1 2.5s infinite;
  transition: all 500ms ease-in-out;
  filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 20px rgba(33, 196, 250, 1));
}

@keyframes letter {
  0% {
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 20px rgba(33, 196, 250, 1)) sepia(20%);
    opacity: 0.85;
  }
  45% {
    filter: drop-shadow(0px 0px 20px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 20px rgba(33, 196, 250, 1)) sepia(50%);
    opacity: 0.85;
  }
  50% {
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 20px rgba(33, 196, 250, 1)) sepia(80%);
    opacity: 1;
  }
  55% {
    filter: drop-shadow(0px 0px 30px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 20px rgba(33, 196, 250, 1)) sepia(10%);
    opacity: 0.85;
  }
  100% {
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 20px rgba(33, 196, 250, 1));
    opacity: 0.8;
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
  margin: 0;
  text-justify: auto;
}

.avatarTxt {
  font-size: 16px;
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
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.spinMove {
  margin-top: -250px;
  margin-bottom: 350px;
  //border: 1px solid red;
}

.spinner {
  margin: 50px auto;
  //border: 1px solid red;
}

/*********************************** Sixth View ***********************************/

.contentRoadMap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.roadMap {
  margin: 50px auto;
  margin-bottom: 0px;
  //border: 1px solid red;
}

/*********************************** Seven View ***********************************/

.contentFAQ {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-top: 75px;
}

.inline {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  margin-bottom: 50px;
  cursor: url("./assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  opacity: 0.85;
  // border: 1px solid red;

  transition: all 300ms ease-in-out;
  > * {
    transition: all 300ms ease-in-out;
  }

  &:hover {
    opacity: 1;
    margin-left: -40px;
    margin-right: -40px;
    margin-top: -35px;
    margin-bottom: 25px;
  }
  &:hover .faqCol {
    margin: 50px;
  }
}

.faqCol {
  display: flex;
  flex-direction: column;
  justify-content: center;
  //border: 1px solid red;
  margin: 20px;
  transition: all 300ms ease-in-out;
  > * {
    transition: all 300ms ease-in-out;
  }
}

.faqActive {
  margin-top: 50px;
}

.faqTxt {
  text-align: center;
  margin: auto;
  width: 500px;
  transition: all 300ms ease-in-out;
}

.question {
  font-weight: 800;
  font-size: 16px;
}

.answer {
  margin-top: 50px;
}

.cornerLeftTop {
  width: 40px;
  height: 40px;
  border-radius: 8px 0 0 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-left: 2px solid $white-color;
  border-top: 2px solid $white-color;
  margin-bottom: -40px;
}

.cornerRightBottom {
  width: 40px;
  height: 40px;
  border-radius: 0 0 8px 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-right: 2px solid $white-color;
  border-bottom: 2px solid $white-color;
  // margin-top: 10px;
  margin-left: calc(100% - 40px);
  margin-top: -40px;
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .faqTxt {
    width: 300px;
  }
  .inline {
    &:hover {
      opacity: 1;
      margin-left: -15px;
      margin-right: -15px;
    }
    &:hover .faqCol {
      margin: 15px;
    }
  }
}

/*********************************** Eighth View ***********************************/

.contentTeam {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 50px;
  max-width: 800px;
  //border: 1px solid $white-color;
}

@media screen and (max-width: $layout-breakpoint-large) {
  .center {
    width: calc(100% - 50px);
    margin-left: 25px;
    margin-right: 25px;
  }
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .title1,
  .title2 {
    font-size: 19px;
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

  .inline2 {
    zoom: 50%;
  }
  .hideme {
    display: none;
  }
  .showme {
    display: block;
  }

  .left {
    width: 100%;
  }

  .right {
    width: 100%;
  }

  .personaCard {
    margin-bottom: 50px;
  }

  // .roadMap {
  //   transform: rotate(90deg);

  //   margin-left: 85%;
  // }

  .spinMove {
    margin-top: -175px;
    margin-bottom: 225px;
  }

  .question {
    font-weight: 800;
    font-size: 14px;
  }
}

@media screen and (max-width: $layout-breakpoint-small) {
  .card {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .cardLeft {
    width: 100%;
    margin-bottom: -5px;
    z-index: 21;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      box-shadow: 0px 0px 7px #ffffff;
    }
  }

  .cardRight {
    width: 100%;
    border-top: none;
    border-left: 1px solid $white-color;
    border-right: 1px solid $white-color;
    border-bottom: 1px solid $white-color;
  }
}
</style>
