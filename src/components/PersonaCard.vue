<template>
  <div class="teamMember">
    <p class="text name">{{ name }}</p>
    <div class="personaContainer" @mouseenter="mouseEnter" @mousemove="mouseMove" @mouseleave="mouseLeave">
      <div class="cornerLeftTop2" />
      <img class="persona" :style="style" :src="require('@/assets/imgs/personas/persona1.png')" />
      <div class="cornerRightBottom2" />
    </div>
    <div class="socialsContainer2">
      <div class="logoContainer2" @click="goToExternal(insta)">
        <i class="fab fa-instagram"></i>
      </div>
      <div class="logoContainer2" @click="goToExternal(discord)">
        <i class="fab fa-twitter" />
      </div>
      <div class="logoContainer2" @click="goToExternal(twitter)">
        <i class="fab fa-discord"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonaCard",
  props: {
    name: String,
    insta: String,
    discord: String,
    twitter: String,
  },
  data() {
    return {
      style: "",
    };
  },
  methods: {
    mouseEnter() {
      //console.log("mouseEnter");
    },
    mouseLeave() {
      //console.log("mouseLeave");
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

.socialsContainer2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-left: 15px;
  margin-top: -25px;
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

.fab {
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
      margin: -20px 20px;
    }
  }

  .persona {
    width: 200px;
    margin: -30px 10px;
  }

  .cornerLeftTop2,
  .cornerRightBottom2 {
    height: 40px;
    width: 40px;
  }
  .cornerRightBottom2 {
    margin-top: -5px;
    margin-left: calc(100% - 40px);
  }

  .name {
    font-size: 15px;
    margin-bottom: -10px;
    margin-left: 25px;
  }

  .fa {
    font-size: 30px;
  }

  .socialsContainer2 {
    margin-left: 0px;
    margin-top: -20px;
  }
}
</style>
