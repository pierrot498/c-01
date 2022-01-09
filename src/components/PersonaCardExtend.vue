<template>
  <div class="container">
    <div class="description hideMe">
      <p class="text descrText">{{ selectedPersona.txt }}</p>
    </div>
    <div class="teamMember">
      <p class="text name">{{ selectedPersona.name }}</p>
      <div class="personaContainer" @mousemove="mouseMove" @mouseleave="mouseLeave">
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
          name: "C-01A",
          pic: require("@/assets/imgs/personas/persona1.jpg"),
          txt: "Beauty comes in all different shapes, sizes, skin colors, and beliefs. This is why we decided to represent 4 ethnicities with different sets of clothings and accessories. Each NFT has specific attributes and variables that make it unique.",
        },
        {
          name: "C-01B",
          pic: require("@/assets/imgs/personas/persona2.jpg"),
          txt: "Beauty comes in all different shapes, sizes, skin colors, and beliefs. This is why we decided to represent 4 ethnicities with different sets of clothings and accessories. Each NFT has specific attributes and variables that make it unique.",
        },
        {
          name: "C-01C",
          pic: require("@/assets/imgs/personas/persona4.jpg"),
          txt: "Beauty comes in all different shapes, sizes, skin colors, and beliefs. This is why we decided to represent 4 ethnicities with different sets of clothings and accessories. Each NFT has specific attributes and variables that make it unique.",
        },
        {
          name: "C-01D",
          pic: require("@/assets/imgs/personas/persona3.jpg"),
          txt: "Beauty comes in all different shapes, sizes, skin colors, and beliefs. This is why we decided to represent 4 ethnicities with different sets of clothings and accessories. Each NFT has specific attributes and variables that make it unique.",
        },
      ],
      selectedPersona: {},
    };
  },
  mounted() {
    this.selectedPersona = this.personaList[0];
  },
  methods: {
    selectPersona(i) {
      this.selectedPersona = this.personaList[i];
    },
    mouseLeave() {
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
  font-size: 22px;
  margin: auto;
  margin-bottom: -15px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.personaContainer {
  > * {
    transition: all 500ms ease-in-out;
  }
}

.persona {
  width: 400px;
  margin: -40px 20px;
  border-radius: 10px;
  cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
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

.characters {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 30px 10px;
  &:hover {
    margin-left: -10px;
  }
}

.personaMini {
  height: 120px;
  width: 90px;
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  &:hover {
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 4px $white-color);
    border: 1px solid $white-color;
    height: 140px;
    width: 100px;
    margin-top: -11px;
    margin-bottom: -11px;
    margin-left: -6px;
    margin-right: -6px;
  }
}

.description {
  width: 150px;
  margin-right: -20px;
  height: 425px;
  overflow: hidden;
  margin-left: -70px;
}

.descrText {
  text-align: right;
  margin-top: 100px;
  font-size: 14px;
  font-weight: 100;
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .persona {
    width: 300px;
  }
  .personaMini {
    height: 90px;
    width: 65px;

    &:hover {
      height: 100px;
      width: 75px;
      margin-top: -6px;
      margin-bottom: -6px;
      margin-left: -5px;
      margin-right: -5px;
    }
  }
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
  }

  .descrText {
    margin: auto;
    text-align: left;
    // text-align: justify;
    // text-justify: inter-word;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 100;
  }

  .personaMini {
    height: 90px;
    width: 65px;
    border-radius: 5px;
    transition: all 200ms ease-in-out;
    &:hover {
      box-sizing: border-box;
      filter: drop-shadow(0px 0px 4px $white-color);
      border: 1px solid $white-color;
      height: 100px;
      width: 75px;
      margin-top: -6px;
      margin-bottom: -6px;
      margin-left: -5px;
      margin-right: -5px;
    }
  }

  .characters {
    width: 100%;
    margin: auto;
    margin-top: 20px;
    flex-direction: row;
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
