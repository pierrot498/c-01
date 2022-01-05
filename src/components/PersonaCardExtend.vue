<template>
  <div class="container">
    <div class="description hideMe">
      <p class="text descrText">{{ selectedPersona.txt }}</p>
    </div>
    <div class="teamMember">
      <p class="text name">{{ selectedPersona.name }}</p>
      <div class="personaContainer" @mouseenter="mouseEnter" @mousemove="mouseMove" @mouseleave="mouseLeave">
        <div class="cornerLeftTop2" />
        <img class="persona" :style="style" :src="selectedPersona.pic" />
        <div class="cornerRightBottom2" />
      </div>
    </div>
    <div class="description showMe">
      <p class="text descrText">{{ selectedPersona.txt }}</p>
    </div>
    <div class="characters">
      <img class="personaMini" v-for="(persona, i) in personaList" :key="i" @click="selectPersona(i)" :src="persona.pic" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonaCard",
  data() {
    return {
      style: "",
      personaList: [
        {
          name: "Mark Zuckerberg",
          pic: require("@/assets/imgs/personas/persona4.png"),
          txt: "Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?",
        },
        {
          name: "Elon Musk ",
          pic: require("@/assets/imgs/personas/persona3.png"),
          txt: "Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?",
        },
        {
          name: "Jeff Bezos",
          pic: require("@/assets/imgs/personas/persona2.png"),
          txt: "Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?",
        },
        {
          name: "Asian Girl",
          pic: require("@/assets/imgs/personas/persona1.png"),
          txt: "Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?Quo illo voluptatem et soluta error est error recusandae ?",
        },
      ],
      selectedPersona: {},
    };
  },
  mounted() {
    this.selectedPersona = this.personaList[3];
  },
  methods: {
    selectPersona(i) {
      this.selectedPersona = this.personaList[i];
    },
    mouseEnter() {
      console.log("mouseEnter");
    },
    mouseLeave() {
      console.log("mouseLeave");
      this.style = "transform: none";
    },
    mouseMove(e) {
      let rect = e.target.getBoundingClientRect();
      let dx = e.clientX - rect.top / 2;
      let dy = e.clientY - rect.left / 2;
      //console.log(dx, dy);

      let tiltx = dy / rect.top / 1.5;
      let tilty = -(dx / rect.left) / 1.5;
      let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
      let degree = radius * 20;

      this.style = "transform: rotate3d(" + tiltx + ", " + tilty + ", 0, " + degree + "deg)";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  transition: all 500ms ease-in-out;
  > * {
    transition: all 500ms ease-in-out;
  }
  &:hover .characters {
    padding-left: 20px;
  }
}

.showMe {
  display: none;
}

.teamMember {
  margin: 10px;
  transition: all 500ms ease-in-out;
  opacity: 0.85;

  > * {
    transition: all 500ms ease-in-out;
  }

  &:hover {
    opacity: 1;
    margin: 0;
  }
  &:hover .persona {
    margin: -30px 30px;
  }
}

.name {
  text-transform: uppercase;
  font-size: 19px;
  margin: auto;
  margin-bottom: -10px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.personaContainer {
  > * {
    transition: all 500ms ease-in-out;
  }
}

.persona {
  width: 300px;
  margin: -40px 20px;
  cursor: url("../assets/imgs/cursorPointer.png") 21 21, auto;
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
.cornerRightBottom2 {
  width: 60px;
  height: 60px;
  border-radius: 0 0 8px 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px $white-color);
  border-right: 2px solid $white-color;
  border-bottom: 2px solid $white-color;
  margin-top: -5px;
  margin-left: calc(100% - 62px);
}

.socialsContainer2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-left: 15px;
  margin-top: -30px;
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

.fa {
  color: $white-color;
  font-size: 35px;
  opacity: 0.85;
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    opacity: 1;
    transform: translateY(-1px);
  }
}

.characters {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 30px 10px;
  // border: 1px solid red;
  &:hover {
    margin-left: -10px;
  }
}

.personaMini {
  height: 90px;
  border-radius: 5px;
  &:hover {
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 4px $white-color);
    border: 1px solid $white-color;
  }
}

.description {
  width: 120px;
  margin-right: -20px;
  height: 425px;
  //border: 1px solid red;
  overflow: hidden;
  margin-left: -50px;
}

.descrText {
  text-align: right;
  margin-top: 100px;
  font-size: 12px;
  font-weight: 100;
}

@media screen and (max-width: $layout-breakpoint-small) {
  .teamMember {
    margin: 10px;

    &:hover {
      opacity: 1;
      margin: 0;
    }
    &:hover .persona {
      margin: -10px 40px;
    }
  }

  .persona {
    width: 200px;
    margin: -20px 30px;
  }

  .cornerLeftTop2,
  .cornerRightBottom2 {
    height: 40px;
    width: 40px;
  }

  .cornerRightBottom2 {
    margin-left: calc(100% - 40px);
  }

  .showMe {
    display: block;
  }

  .hideMe {
    display: none;
  }

  .container {
    flex-direction: column;

    &:hover .characters {
      padding-left: 0px;
    }
  }

  .description {
    height: auto;
    width: 100%;
    margin: 0;
    //border: 1px solid red;
  }

  .descrText {
    margin: auto;
    text-align: left;
    text-align: justify;
    text-justify: inter-word;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 100;
    //border: 1px solid red;
  }

  .characters {
    width: 100%;
    margin: auto;
    margin-top: 10px;
    flex-direction: row;
    //border: 1px solid red;
    padding: 0;
    &:hover {
      margin-left: 0px;
    }
  }

  .name {
    text-transform: uppercase;
    font-size: 19px;
    margin: auto;
    margin-bottom: -10px;
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
