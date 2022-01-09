<template>
  <div class="teamMember">
    <p class="text name" v-html="name"></p>
    <div class="personaContainer">
      <img class="persona" :style="style" :src="pic" />
    </div>
    <div class="socialsContainer2">
      <div class="logoContainer2" v-if="insta != ''" @click="goToExternal(insta)">
        <i class="fab fa-instagram"></i>
      </div>
      <div class="logoContainer2" v-if="twitter != ''" @click="goToExternal(twitter)">
        <i class="fab fa-twitter" />
      </div>
      <div class="logoContainer2" v-if="discord != ''" @click="goToExternal(discord)">
        <i class="fab fa-discord"></i>
      </div>
      <div class="logoContainer2" v-if="linkedin != ''" @click="goToExternal(linkedin)">
        <i class="fab fa-linkedin"></i>
      </div>
      <div class="logoContainer2" v-if="artstation != ''" @click="goToExternal(artstation)">
        <i class="fab fa-artstation"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonaCard",
  props: {
    name: String,
    pic: String,
    insta: String,
    linkedin: String,
    discord: String,
    artstation: String,
    twitter: String,
  },
  data() {
    return {
      style: "",
    };
  },
  mounted() {},
  methods: {
    goToExternal(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.teamMember {
  transition: all 500ms ease-in-out;
  opacity: 0.85;
  margin-bottom: 100px;
  margin-left: 50px;
  margin-right: 50px;
  > * {
    transition: all 100ms ease-in-out;
  }
}

.name {
  text-transform: uppercase;
  font-size: 18px;
  margin: auto;
  margin-bottom: 40px;
  width: 300px;
  text-align: center;
}

.persona {
  width: 300px;
  height: 300px;
  border-radius: 10000px;
  object-fit: cover;
  transition: all 100ms ease-in-out;
  box-shadow: 0px 0px 5px 0px #ffffff;
}

.socialsContainer2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
  cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    opacity: 1;
    transform: translateY(-1px);
  }
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .teamMember {
    margin-bottom: 50px;
  }
  .persona {
    width: 200px;
    height: 200px;
  }
  .name {
    width: 200px;
    font-size: 15px;
    margin-bottom: 15px;
  }
  .fab {
    font-size: 25px;
  }
  .logoContainer2 {
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
  }
  .socialsContainer2 {
    margin-left: 10px;
    margin-top: 0px;
  }
}
</style>
