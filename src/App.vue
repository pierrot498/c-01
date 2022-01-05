<template>
  <div id="app">
    <TopBar />

    <canvas id="canvas" class="canvas" @mousemove="mouseMove"></canvas>

    <div class="viewContainer">
      <!-- <img class="mainLogo" :src="require('@/assets/C-01_Logo_1.png')" /> -->
      <div class="inline2">
        <Logo1 class="logoLetter" v-bind:style="{ animation: loaded ? 'letter 2s infinite' : 'moveLogo 0.4s forwards linear' }" />
        <Logo2 class="logoLetter" v-bind:style="{ animation: loaded ? 'letter 1.8s infinite' : 'moveLogo 0.6s forwards linear' }" />
        <Logo3 class="logoLetter" v-bind:style="{ animation: loaded ? 'letter 2.2s infinite' : 'moveLogo 0.8s forwards linear' }" />
        <Logo4 class="logoLetter" v-bind:style="{ animation: loaded ? 'letter 1.6s infinite' : 'moveLogo 1s forwards linear' }" />
      </div>
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

import Logo1 from "@/assets/imgs/C-01.svg";
import Logo2 from "@/assets/imgs/0-01.svg";
import Logo3 from "@/assets/imgs/--01.svg";
import Logo4 from "@/assets/imgs/1-01.svg";

import Circle1 from "@/assets/imgs/circle.svg";
import RoadMap from "@/assets/imgs/roadmap.svg";
import TopBar from "@/components/TopBar";
import PersonaCard from "@/components/PersonaCard";

export default {
  name: "App",
  components: { Logo1, Logo2, Logo3, Logo4, Circle1, RoadMap, TopBar, PersonaCard },
  data: function () {
    return {
      mouse: { x: 0, y: 0 },
      scrollMarker: false,
      loaded: false,
      RoadMap: ["", "", "", "", ""],
      Faq: ["Quo illo voluptatem et soluta error est error recusandae ?", "Quo illo voluptatem et soluta error est error recusandae ?", "Quo illo voluptatem et soluta error est error recusandae ?", "Quo illo voluptatem et soluta error est error recusandae ?"],
      Team: ["", "", "", ""],
    };
  },
  mounted() {
    this.scrollAnimation();
    this.starsAnimation();
    setTimeout(() => {
      this.loaded = true;
      console.log("ee");
    }, 1000);
  },
  methods: {
    goToExternal(url) {
      window.open(url);
    },
    mouseMove(e) {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      //console.log(this.mouse.x + " " + this.mouse.y);
    },
    starsAnimation() {
      const canvas = document.getElementById("canvas");
      const c = canvas.getContext("2d");

      let w;
      let h;

      const setCanvasExtents = () => {
        // w = document.body.clientWidth;
        // h = document.body.clientHeight;
        // canvas.width = w;
        // canvas.height = h;
        w = canvas.getBoundingClientRect().width;
        h = canvas.getBoundingClientRect().height;
        canvas.width = w;
        canvas.height = h;
        console.log(w + " " + h);
      };

      setCanvasExtents();
      window.onresize = () => {
        setCanvasExtents();
      };

      const makeStars = (count) => {
        const out = [];
        for (let i = 0; i < count; i++) {
          const s = {
            x: Math.random() * 1600 - 800,
            y: Math.random() * 900 - 450,
            z: Math.random() * 1000,
          };
          //console.log(s.x + " " + s.y + " " + s.z);
          out.push(s);
        }
        return out;
      };

      let stars = makeStars(3000);

      const clear = () => {
        c.clearRect(0, 0, canvas.width, canvas.height);
        // c.fillStyle = "black";
        // c.fillRect(0, 0, canvas.width, canvas.height);
      };

      const putPixel = (x, y, brightness) => {
        const intensity = brightness * 255;
        const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
        c.fillStyle = rgb;
        c.fillRect(x, y, 1, 1);
      };

      const moveStars = (distance) => {
        const count = stars.length;
        for (var i = 0; i < count; i++) {
          const s = stars[i];
          s.z -= distance;
          while (s.z <= 1) {
            s.z += 1000;
          }
        }
      };

      let prevTime;
      const init = (time) => {
        prevTime = time;
        requestAnimationFrame(tick);
      };

      const tick = (time) => {
        let elapsed = time - prevTime;
        prevTime = time;
        moveStars(elapsed * 0.1);
        clear();
        const cx = w / 2;
        const cy = h / 2;
        const count = stars.length;
        for (var i = 0; i < count; i++) {
          const star = stars[i];
          const x = cx + star.x / (star.z * 0.001);
          const y = cy + star.y / (star.z * 0.001);
          if (x < 0 || x >= w || y < 0 || y >= h) {
            continue;
          }
          const d = star.z / 1000.0;
          const b = 1 - d * d;
          putPixel(x, y, b);
        }

        setTimeout(() => {
          requestAnimationFrame(tick);
        }, 20);
      };

      requestAnimationFrame(init);
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
  cursor: url("./assets/imgs/cursorDefault.png"), auto;
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

.canvas {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

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
    transform: translateY(-200%);
    opacity: 0;
  }
  95% {
    transform: translateY(-100%);
    opacity: 0.1;
  }
  100% {
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
  //height: 200px;
  fill: $white-color;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 10px rgba(33, 196, 250, 0.9));
  //border: 1px solid red;
  //animation: glitch1 2.5s infinite;
  transition: all 500ms ease-in-out;
  // animation: letter 2s infinite;
}

// .l1 {
//   animation: moveLogo 0.4s forwards linear;
// }

// .l2 {
//   animation: moveLogo 0.6s forwards linear;
// }

// .l3 {
//   animation: moveLogo 0.8s forwards linear;
// }

// .l4 {
//   animation: moveLogo 1s forwards linear;
// }

@keyframes letter {
  0% {
    filter: drop-shadow(-2px -2px 5px rgba(33, 196, 250, 1)) blur(0px);
    opacity: 0.85;
  }
  45% {
    filter: drop-shadow(2px 2px 5px rgba(33, 196, 250, 0.9)) blur(0px);
    opacity: 0.85;
  }
  50% {
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 0.9)) blur(0px);
    opacity: 1;
  }
  55% {
    filter: drop-shadow(2px 2px 5px rgba(33, 196, 250, 0.9)) blur(0px);
    opacity: 0.85;
  }
  100% {
    filter: drop-shadow(-2px -2px 5px rgba(33, 196, 250, 1)) blur(0px);
    opacity: 0.8;
  }
}

// .inline2:nth-child(2) {
//   fill: #67f3da;
//   animation: glitch2 2.5s infinite;
// }

// .inline2:nth-child(3) {
//   fill: #f16f6f;
//   animation: glitch3 2.5s infinite;
// }

@keyframes glitch1 {
  0% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  27% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35% {
    transform: none;
    opacity: 1;
  }
  52% {
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50% {
    transform: none;
    opacity: 1;
  }
  72% {
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(0.4deg, 1deg);
    opacity: 0.75;
  }
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes glitch2 {
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(-2px, -3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(-5px, -2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(-5px, -1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(-2px, -6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
}

@keyframes glitch3 {
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(2px, 3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(5px, 2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(5px, 1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(2px, 6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
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
  //cursor: pointer;
  cursor: url("./assets/imgs/cursorPointer.png"), auto;
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
  //cursor: pointer;
  cursor: url("./assets/imgs/cursorPointer.png"), auto;
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
