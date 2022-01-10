<template>
  <div class="raffle">
    <div class="viewContainer">
      <div class="center">
        <div class="raffeContainer">
          <div class="inline">
            <div class="cornerLeftTop2" />
            <div class="cornerRightTop2" />
          </div>
          <div class="txt">
            <p class="title2">Register to the raffle now</p>
            <p class="text">If you are whitelisted, you will be able to mint 2 hours prior to the public sale on Friday,14th at 2pm UTC. You will be guaranteed to mint up to 2 NFTs. You can however register for the raffle with a different Ethereum address.</p>

            <p class="title2 tt">{{ curTxt }}</p>
            <div class="countdown">
              <GlitchTxt class="tt2">{{ cd }}</GlitchTxt>
            </div>
          </div>
          <div class="inline">
            <div class="cornerLeftBottom2" />
            <div class="cornerRightBottom2" />
          </div>
        </div>
        <button class="regButton" @click="register">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import GlitchTxt from "@/components/GlitchTxt";
// https://www.figma.com/proto/8jqkgljMtHj597jYXLx22c/C-01-RAFFLE?page-id=0%3A1&node-id=1%3A122&scaling=min-zoom

// Raffle Begins in "countdown"
// 13/01 a 2PM UTC (+1 paris)

// Raffle ends "Countdown"
// 14th 2AM UTC

export default {
  name: "Raffle",
  data: function () {
    return {
      // raffleDate1: new Date("Jan 13, 2022 14:00:00").getTime(),
      // raffleDate2: new Date("Jan 14, 2022 02:00:00").getTime(),
      raffleDate1: new Date("Jan 10, 2022 12:39:50").getTime(),
      raffleDate2: new Date("Jan 10, 2022 12:40:10").getTime(),
      txt1: "Raffle registration begins in",
      txt2: "Raffle registration ends in",
      curDateGoal: "",
      curTxt: "",
      cd: "-- -- -- --",
    };
  },
  components: { GlitchTxt },
  created() {
    this.curDateGoal = this.raffleDate1;
    this.curTxt = this.txt1;

    let x = setInterval(() => {
      let now = new Date().getTime();
      let d = this.curDateGoal - now;

      if (d < 0 && this.curDateGoal === this.raffleDate1) {
        this.curDateGoal = this.raffleDate2;
        this.curTxt = this.txt2;
      } else if (d < 0) {
        clearInterval(x);
      } else {
        var days = Math.floor(d / (1000 * 60 * 60 * 24));
        var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((d % (1000 * 60)) / 1000);
        this.cd = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      }
    }, 1000);
  },
  methods: {
    register() {
      console.log("register");
    },
  },
};
</script>

<style lang="scss" scoped>
.raffeContainer {
  margin-top: 100px;
  > * {
    transition: all 500ms ease-in-out;
  }
  &:hover .txt {
    padding: 50px;
    cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  }
}

.inline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.txt {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  > * {
    transition: all 500ms ease-in-out;
  }
}

.title2 {
  text-align: center;
  margin-bottom: 30px;
}

.tt {
  margin-top: 15px;
}

.countdown {
}

.tt2 {
  font-family: "Helvetica Neue", sans-serif;
  letter-spacing: 3px;
  font-weight: 100;
  font-size: 50px;
  text-transform: uppercase;
}

.cornerLeftTop2 {
  width: 60px;
  height: 60px;
  border-radius: 8px 0 0 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-left: 2px solid $white-color;
  border-top: 2px solid $white-color;
}

.cornerRightTop2 {
  width: 60px;
  height: 60px;
  border-radius: 0 8px 0 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-right: 2px solid $white-color;
  border-top: 2px solid $white-color;
}

.cornerLeftBottom2 {
  width: 60px;
  height: 60px;
  border-radius: 0 0 0 8px;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-left: 2px solid $white-color;
  border-bottom: 2px solid $white-color;
}

.cornerRightBottom2 {
  width: 60px;
  height: 60px;
  border-radius: 0 0 8px 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-right: 2px solid $white-color;
  border-bottom: 2px solid $white-color;
}

.regButton {
  margin-top: 50px;
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .t2 {
    font-size: 15px;
    margin-bottom: 20px;
  }
  .text {
    font-size: 12px;
  }
}
</style>
