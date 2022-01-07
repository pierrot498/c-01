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
    </div>

    <div class="viewContainer" id="intro" v-if="show.intro">
      <div class="center">
        <div class="row r1">
          <div class="left">
            <GlitchTxt class="title1 t1">Avatars /</GlitchTxt>
            <p class="date d1">8.888</p>
            <AutoType class="avatarTxt tx1" :txt="intro.txt1" :active="intro.active1" />
          </div>
          <div class="right hideme"></div>
        </div>

        <div class="row r2">
          <div class="left hideme"></div>
          <div class="right">
            <GlitchTxt class="title1 title3 t2 rafle">Raffle Registration /</GlitchTxt>
            <p class="date d2">01/13</p>
            <AutoType class="avatarTxt tx2" :txt="intro.txt2" :active="intro.active2" />
          </div>
        </div>

        <div class="row r3">
          <div class="left">
            <GlitchTxt class="title1 t3">Raffle sale /</GlitchTxt>
            <p class="date d3">01/14</p>
            <AutoType class="avatarTxt tx3" :txt="intro.txt3" :active="intro.active3" />
          </div>
          <div class="right hideme"></div>
        </div>
      </div>
    </div>

    <div class="r4"></div>
    <div class="viewContainer" id="about" v-bind:style="{ display: show.about ? 'flex' : 'none', opacity: show.about ? '1' : '0' }">
      <div class="center">
        <GlitchTxt class="title1 title3 t4">About c-01 /</GlitchTxt>
        <div class="card c4">
          <div class="cardLeft">
            <img :src="require('@/assets/imgs/aboutcmp.jpg')" />
          </div>
          <div class="cardRight">
            <p class="text aboutTxt">
              C-01 represents the <b>synergy</b> between the world of <b>fashion</b> and <b>digital ownership</b>. When buying a C-01, you are not only owning a digital collectible but also gaining access to the forefront of evolution in the fashion industry in the metaverse. We are going to create
              <b>exclusive digital collections</b> with well-known clothing brands reserved for C-01 holders.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="r5"></div>
    <div class="viewContainer" id="nft" v-bind:style="{ display: show.nft ? 'flex' : 'none', opacity: show.nft ? '1' : '0' }">
      <div class="center">
        <GlitchTxt class="title1 t5">NFT /</GlitchTxt>
        <div class="cardNft c5">
          <PersonaCardExtend class="PersonaCardExtend" :name="'Asian girl'" />
        </div>
      </div>
    </div>

    <div class="r6"></div>
    <div class="viewContainer" id="total" v-bind:style="{ display: show.total ? 'flex' : 'none', opacity: show.total ? '1' : '0' }">
      <div class="center">
        <GlitchTxt class="title1 title3 t6">Community-centric /</GlitchTxt>
        <div class="contentTotalDistr c6">
          <div class="spinMove">
            <Spinner class="spinner" />
          </div>
          <p class="text totalTxt">
            The blockchain brings the decentralization and community around new digital initiatives, and we have the vision to keep it that way. That’s why we decided to split the revenue made with the fashion industry directly with our community and core holders. The money earned will be given to
            our holders in terms of tokens, exclusive branded NFT drops, and physical merch drops from all our fashion partners.
          </p>
        </div>
      </div>
    </div>

    <div class="r77"></div>
    <div class="viewContainer" id="faq" v-bind:style="{ display: show.road ? 'flex' : 'none', opacity: show.road ? '1' : '0' }">
      <div class="center max">
        <GlitchTxt class="title1 title3 t7">Roadmap /</GlitchTxt>
        <div class="contentRoadMap c7">
          <div class="roadMapContainer">
            <div class="blockContainer top">
              <div class="block b1">
                <p class="title titleb">Genesis</p>
                <p class="text txtb">
                  We took more than two months to create each of the facial expressions of our 3D models to make them look as natural and as human as possible. We then designed each of their clothing – the materials and textures with our team. Our goal was to go beyond the boundaries of everything
                  made so far and provide an ultra-realistic look through detailed clothing and fabrics. We wanted to make the avatars look like real-life models, but for the metaverse.
                </p>
              </div>
              <div class="block b2">
                <p class="title titleb">Discovery</p>
                <p class="text txtb">
                  After the reveal of the artwork, you will be able to know which character, ethnicity, and clothing style you successfully minted. The rarity rank of your NFT will be directly available across the main two rarity services available – Rarity Tools and Rarity Sniper.
                </p>
              </div>
              <div class="block b3">
                <p class="title titleb">Ready Player One</p>
                <p class="text txtb">
                  After a few successful partnerships in Q1, 2022, we will implement ourselves in Sandbox and Decentraland. We will create a virtual fashion show with all our partners that will be retransmitted live across social media. The goal is to replicate the real world’s well-known fashion
                  parade and make it an unbelievable digital experience.
                </p>
              </div>
            </div>
            <canvas id="rcanva" class="roadMap2"></canvas>
            <!-- <RoadMap class="roadMap" /> -->
            <div class="blockContainer bottom">
              <div class="block b4">
                <p class="title titleb">Sale Event</p>
                <p class="text txtb">
                  The collection of 8,888 NFTs will be directly available for purchase on our website. Please use only the link provided by our social media account or in Discord . The security of our holders is our top priority, and so we have spent an immense amount of time with our cyber security
                  experts to secure and protect our website against any attack or scams, as well as to provide our holders with the most gas efficient ERC-1155 token possible.
                </p>
              </div>
              <div class="block b5">
                <p class="title titleb">Conquer the Metaverse</p>
                <p class="text txtb">
                  One week after the mint, we will create the token economics for our ecosystem. Our goal is to be the pioneers of luxury fashion in the metaverse. We will provide support for luxury fashion brands around the world to showcase their digital collection with our 3D model avatars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="r8"></div>
    <div class="viewContainer" id="faq" v-bind:style="{ display: show.faq ? 'flex' : 'none', opacity: show.faq ? '1' : '0' }">
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

    <div class="r9"></div>
    <div class="viewContainer" id="team" v-bind:style="{ display: show.team ? 'flex' : 'none', opacity: show.team ? '1' : '0' }">
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
import AutoType from "@/components/AutoType";
import Spinner from "@/components/Spinner";

import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { Logo1, Logo2, Logo3, Logo4, Spinner, GlitchTxt, AutoType, TopBar, AnimatedBg, PersonaCard, PersonaCardExtend, Footer },
  data: function () {
    return {
      scrollMarker: false,
      aSpeed: 0.1,
      loaded: false,
      show: {
        intro: true,
        about: false,
        nft: false,
        total: false,
        road: false,
        faq: false,
        team: false,
        footer: false,
      },
      intro: {
        txt1: "C-01 is a project composed of 8,888 NFTs crafted by talented and expert designers and developers. We unified the most <b>experienced people</b> in the industry to deliver a remarkable, cutting-edge product.",
        active1: false,
        txt2: "You can participate in our Raffle to get a chance to mint your own C-01. On <b>Tuesday 13th, 2pm UTC</b>, Metamask wallets registration for the Raffle will open for 12 hours. To enter the raffle you will have to go on our website and log your wallet account with <b>at least 0.28 ETH</b>.",
        active2: false,
        txt3: "The winners of the raffle will be able to mint on <b>Wednesday, 14th at 4pm UTC</b> with a maximum amount of <b>2 NFTs per wallet</b>. If you are one of our whitelisted members, you will be able to <b>mint 2 hours prior</b>, at <b>2pm UTC</b>.",
        active3: false,
      },
      Faq: [
        {
          q: "What is the mint price ?",
          r: "The mint price is 0.25 ETH plus gas",
          hide: true,
        },
        {
          q: "How many NFT can I mint per wallet ? ",
          r: "You can mint a maximum of 2 NTFs per Ethereum wallet.",
          hide: true,
        },
        {
          q: "How can I register for the raffle ?",
          r: "Visit our website on Tuesday 13th at 2pm UTC to register for the raffle. Please be aware that you need enough funds on your wallet to mint at least 1 C-01 NFT. We will only verify the wallet addresses with a minimum of 0.28 ETH (0.25 + Gas fees).",
          hide: true,
        },
        {
          q: "When is the public sale ?",
          r: "The public sale will occur on January 14th, at 4 pm UTC on our website. Only the winners of the raffle will be able to mint.",
          hide: true,
        },
        {
          q: "How do I know if I won the raffle?",
          r: "Please visit our website on Friday,14th at 4pm UTC and connect your Metamask account to see if you've won. If you win the raffle, you will be able to mint right away.",
          hide: true,
        },
        {
          q: "Do I need to register for the raffle if I’m whitelisted?",
          r: "If you are whitelisted, you will be able to mint 2 hours prior to the public sale on Friday,14th at 2pm UTC. You will be guaranteed to mint up to 2 NFTs. You can however register for the raffle with a different Ethereum address.",
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
    console.clear();
    console.log("Loading ...");
    let check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Macintosh/i.test(navigator.userAgent);

    //let check = screen.width <= 280;
    //console.log(screen.width);
    // if (!check) {
    //   this.show = {
    //     intro: true,
    //     about: true,
    //     nft: true,
    //     total: true,
    //     road: true,
    //     faq: true,
    //     team: true,
    //     footer: true,
    //   };
    // }

    this.scrollAnimation();

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
    goToExternal(url) {
      window.open(url);
    },
    scrollAnimation() {
      /************ TIMELINE ***********/
      console.log("=> Intro");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r1",
            start: "top center",
            end: "bottom bottom",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t1", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .from(".d1", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .from(".tx1", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .call(() => {
          this.intro.active1 = true;
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r2",
            start: "top center",
            end: "bottom bottom",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t2", { x: innerWidth * this.aSpeed, opacity: 0 })
        .from(".d2", { x: innerWidth * this.aSpeed, opacity: 0 })
        .from(".tx2", { x: innerWidth * this.aSpeed, opacity: 0 })
        .call(() => {
          this.intro.active2 = true;
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".r3",
            start: "top center",
            end: "bottom bottom",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from(".t3", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .from(".d3", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .from(".tx3", { x: -innerWidth * this.aSpeed, opacity: 0 })
        .call(() => {
          this.intro.active3 = true;
          setTimeout(() => {
            this.show.about = true;
            aboutAnimation();
          }, 1000);
        });

      /************ ABOUT ***********/
      const aboutAnimation = () => {
        console.log("=> About");
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".r4",
              start: "center center",
              end: "bottom center",
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
              nftAnimation();
            }, 200);
          });
      };

      /************ NFT ***********/
      const nftAnimation = () => {
        console.log("=> NFT");
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
          .from(".c5", { x: innerWidth * this.aSpeed, opacity: 0 })
          .call(() => {
            setTimeout(() => {
              this.show.total = true;
              totalAnimation();
            }, 200);
          });
      };

      /************ TOTAL DISTRIBUTION ***********/
      const totalAnimation = () => {
        console.log("=> TOTAL");
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
              roadAnimation();
            }, 200);
          });
      };

      /************ ROADMAP ***********/
      const roadAnimation = () => {
        // console.log("=> ROADMAP");
        const canvas2 = document.getElementById("rcanva");
        const c2 = canvas2.getContext("2d");
        c2.globalCompositeOperation = "destination-atop";
        c2.webkitImageSmoothingEnabled = true;
        let w = 300; //canvas2.getBoundingClientRect().width;
        let h = 1200; //canvas2.getBoundingClientRect().height;
        canvas2.width = w;
        canvas2.height = h;

        let move = 0;
        let lock = false;
        const dot = [
          {
            y: (h / 6) * 1,
            x: w / 2,
            r: 10,
            d: -1,
            rnd: 0,
          },
          {
            y: (h / 6) * 2,
            x: w / 2,
            r: 15,
            d: 1,
            rnd: 0,
          },
          {
            y: (h / 6) * 3,
            x: w / 2,
            r: 20,
            d: -1,
            rnd: 0,
          },
          {
            y: (h / 6) * 4,
            x: w / 2,
            r: 25,
            d: 1,
            rnd: 0,
          },
          {
            y: (h / 6) * 5,
            x: w / 2,
            r: 30,
            d: -1,
            rnd: 0,
          },
        ];

        const tick2 = () => {
          //console.log("tick");
          c2.clearRect(0, 0, w, h);

          for (let i = 0; i < dot.length; i++) {
            if (i < dot.length - 1) {
              c2.beginPath();
              c2.lineWidth = 3;
              c2.strokeStyle = "#ffffff75";
              c2.moveTo(dot[i].x + move * dot[i].d * (dot[i].r / 30) + dot[i].rnd, dot[i].y + dot[i].rnd);
              c2.lineTo(dot[i + 1].x + move * dot[i + 1].d * (dot[i + 1].r / 30) + dot[i + 1].rnd, dot[i + 1].y + dot[i + 1].rnd);
              c2.stroke();
            }

            c2.beginPath();
            c2.arc(dot[i].x + move * dot[i].d * (dot[i].r / 30) + dot[i].rnd, dot[i].y + dot[i].rnd, dot[i].r + dot[i].rnd, 0, 2 * Math.PI, false);
            c2.fillStyle = "white";
            c2.fill();
            c2.lineWidth = 2;
            c2.strokeStyle = "rgba(33, 196, 250, 0.5)";
            c2.stroke();
          }

          if (move < w / 3) {
            move += 1;
            lock = true;
          }

          if (lock == true) {
            for (let i = 0; i < dot.length; i++) {
              if (dot[i].rnd < 10) {
                dot[i].rnd += Math.random();
              } else if (dot[i].rnd > 20) {
                dot[i].rnd -= Math.random();
              } else {
                dot[i].rnd += (Math.random() - 0.5) * 0.5;
              }
            }
          }

          setTimeout(() => {
            requestAnimationFrame(tick2);
          }, 20);
        };
        requestAnimationFrame(tick2);

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".r77",
              start: "center center",
              end: "bottom top",
              markers: this.scrollMarker,
              scrub: false,
              pin: false,
            },
          })
          .from(".t7", { x: innerWidth * this.aSpeed, opacity: 0 })
          .from(".b1", { x: -innerWidth * 1, opacity: 0 })
          .from(".b4", { x: -innerWidth * 1, opacity: 0 })
          .from(".b2", { x: -innerWidth * 1, opacity: 0 })
          .from(".b5", { x: innerWidth * 1, opacity: 0 })
          .from(".b3", { x: innerWidth * 1, opacity: 0 })
          .call(() => {
            setTimeout(() => {
              this.show.faq = true;
              faqAnimation();
            }, 500);
          });
      };

      /************ FAQ ***********/
      const faqAnimation = () => {
        console.log("=> FAQ");
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
          .from("#faq4", { x: innerWidth * this.aSpeed, opacity: 0 })
          .from("#faq5", { x: -innerWidth * this.aSpeed, opacity: 0 })
          .call(() => {
            setTimeout(() => {
              this.show.team = true;
              teamAnimation();
            }, 200);
          });
      };

      /************ TEAM ***********/
      const teamAnimation = () => {
        console.log("=> TEAM");
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
      };
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
  //border: 1px solid red;
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
  z-index: 200;
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
  // .text {
  //   text-align: right;
  // }
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
  //border: 1px solid red;
  height: 150px;
}

.t2 {
  font-size: 22px;
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
    min-height: 500px;
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

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.aboutTxt {
  text-align: justify;
  text-justify: inter-word;
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
  //max-width: 600px;
  margin: auto;
  padding-top: 100px;
  //border: 1px solid red;
}

.roadMapContainer {
  width: 100%;
  //height: 510px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //overflow: hidden;
  //border: 1px solid red;
  //border: 1px solid red;
}

.roadMap {
  width: 100%;
  transition: all 500ms ease-in-out;
  fill: $white-color;
  //opacity: 0.85;
  //filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 40px rgba(33, 196, 250, 1)) blur(2px);
  // animation: shineRoadMap 3s infinite linear;
  animation: turnOn 3s forwards linear;
  > * {
    stroke: $white-color;
    stroke-width: 2px;
    transition: all 500ms ease-in-out;
  }
}

.roadMap2 {
  z-index: 200;
  //border: 1px solid red;
  width: 300px;
  height: 1200px;
  transition: all 500ms ease-in-out;
  //fill: $white-color;
  animation: turnOn 3s infinite linear;
  //color: #ffffff75
}

@keyframes turnOn {
  0% {
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(1px);
    opacity: 0.85;
  }
  50% {
    filter: drop-shadow(0px 0px 3px rgb(250, 199, 33)) blur(0px);
    opacity: 1;
  }
  100% {
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(1px);
    opacity: 0.85;
  }
}

.blockContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //border: 1px solid red;
}

.top {
  margin-top: 100px;
  margin-bottom: 100px;
  //margin-bottom: -200px;

  //width: 100%;
  text-align: right;
}

.bottom {
  //margin-top: -100px;
  //margin-left: -20px;
  // width: 62%;
  text-align: left;
  margin-top: 300px;
  margin-bottom: 300px;
}

.block {
  // border: 1px solid pink;
  width: calc(100% + 10px);
  > * {
    transition: all 500ms ease-in-out;
  }
}

.b1 {
  margin-left: 60px;
}

.b2 {
  margin-left: 20px;
}

.b3 {
  margin-left: -15px;
}

.b4 {
  margin-left: -30px;
}

.b5 {
  margin-left: 15px;
}

.titleb {
  text-transform: uppercase;
  width: 100%;
  font-size: 20px;
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

  .roadMapContainer {
    width: 100%;
    margin: auto;
    //border: 1px solid green;
  }
  .block {
    // width: 150px;
  }
  // .top {
  //   margin-bottom: -150px;
  //   text-align: left;
  // }
  // .bottom {
  //   margin-top: -75px;
  //   text-align: right;
  // }
  .txtb {
    font-size: 10px;
  }
  .titleb {
    text-transform: uppercase;
    font-size: 15px;
  }
}

.rafle {
  font-size: 20px;
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
  .contentRoadMap {
    padding-top: 50px;
  }

  .swapMob {
    display: block;
  }
  .rmMob {
    display: none;
  }
  .roadMapContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .roadMap2 {
    display: none;
  }

  .blockContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    //border: 1px solid red;
  }

  .block {
    width: 100%;
    padding: 0 15%;
    margin-bottom: 20px;
  }

  .top,
  .bottom,
  .b1,
  .b2,
  .b3,
  .b4,
  .b5 {
    margin: 0px;
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
  }

  .titleb {
    text-transform: uppercase;
    width: 100%;
    font-size: 15px;
    // margin-left: auto;
    //border: 1px solid red;
    text-align: center;
  }

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

  .rafle {
    font-size: 15px;
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
