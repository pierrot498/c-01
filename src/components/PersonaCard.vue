<template>
  <div class="teamMember">
    <p class="text name">Prénom nom</p>
    <div class="personaContainer" @mouseenter="mouseEnter" @mousemove="mouseMove" @mouseleave="mouseLeave">
      <div class="cornerLeftTop" />
      <img class="persona" :style="style" :src="require('@/assets/imgs/persona.png')" />
      <div class="cornerRightBottom" />
    </div>
    <div class="socialsContainer2">
      <div class="logoContainer2" @click="goToExternal('')">
        <i class="fa fa-instagram"></i>
      </div>
      <div class="logoContainer2" @click="goToExternal('')">
        <i class="fa fa-twitter" />
      </div>
      <div class="logoContainer2" @click="goToExternal('')">
        <i class="fa fa-discord"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonaCard",
  props: {
    name: String,
  },
  data() {
    return {
      style: "",
    };
  },
  methods: {
    mouseEnter() {
      console.log("mouseEnter");
    },
    mouseLeave() {
      console.log("mouseLeave");
      this.style = "transform: none";
    },
    mouseMove(e) {
      let rect = e.target.getBoundingClientRect();
      let dx = e.clientX - rect.width;
      let dy = e.clientY - rect.height;
      //console.log(dx, dy);

      let tiltx = dy / rect.top;
      let tilty = -(dx / rect.left);
      let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
      let degree = radius * 20;

      this.style = "transform: rotate3d(" + tiltx + ", " + tilty + ", 0, " + degree + "deg)";
    },
  },
};
</script>

<style lang="scss" scoped>
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
  margin-bottom: -10px;
  margin-left: 15px;
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

.cornerLeftTop,
.cornerRightBottom {
  height: 60px;
  width: 60px;
}

.cornerRightBottom {
  margin-left: calc(100% - 60px);
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

@media screen and (max-width: $layout-breakpoint-medium) {
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

  .cornerLeftTop,
  .cornerRightBottom {
    height: 40px;
    width: 40px;
  }

  .cornerRightBottom {
    margin-left: calc(100% - 40px);
  }

  .name {
    font-size: 15px;
    margin-bottom: -10px;
    margin-left: 15px;
  }

  .fa {
    font-size: 30px;
  }

  .socialsContainer2 {
    margin-left: 15px;
    margin-top: -35px;
  }
}
</style>
