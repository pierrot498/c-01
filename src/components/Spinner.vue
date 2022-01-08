<template>
  <div class="finalSpinner">
    <div class="spin">
      <Circle1 class="spinner2 rot1" />
      <Circle2 class="spinner2 rot2" />
      <Circle3 class="spinner2 rot1" />
      <Circle4 class="spinner2 rot2" />
    </div>
  </div>
</template>

<script>
import Circle1 from "@/assets/imgs/spinner/1Circle-01.svg";
import Circle2 from "@/assets/imgs/spinner/2Circle-01.svg";
import Circle3 from "@/assets/imgs/spinner/3Circle-01.svg";
import Circle4 from "@/assets/imgs/spinner/4Circle-01.svg";

export default {
  name: "GlitchTxt",
  components: { Circle1, Circle2, Circle3, Circle4 },
};
</script>

<style lang="scss" scoped>
.spin {
  margin-left: -300px;
  margin-bottom: 300px;
}

.spinner2 {
  position: absolute;
  width: 100%;
  max-width: 300px;
  transition: all 500ms ease-in-out;
  fill: $white-color;
  > * {
    stroke: $white-color;
    stroke-width: 2px;
    transition: all 500ms ease-in-out;
  }
}
.rot1 {
  animation: rotation1 3s infinite alternate;
}
.rot2 {
  animation: rotation2 2s infinite alternate;
}

@keyframes rotation1 {
  from {
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 40px rgba(33, 196, 250, 1)) blur(0px);
    transform: rotate(0deg);
    opacity: 0.85;
    stroke-width: 3px;
  }
  to {
    transform: rotate(359deg);
    opacity: 1;
  }
}

@keyframes rotation2 {
  from {
    opacity: 0.85;
    transform: rotate(359deg);
  }
  to {
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 40px rgba(33, 196, 250, 1)) blur(0px);
    opacity: 1;
    transform: rotate(0deg);
  }
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .spin {
    margin-left: -200px;
    margin-bottom: 200px;
  }
  .spinner2 {
    max-width: 200px;
  }
}
</style>
