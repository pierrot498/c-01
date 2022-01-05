<template>
  <div class="roadMapContainer triger">
    <div class="roadMap2">
      <RoadMap1 class="rmap o1" />
      <RoadMap2 class="rmap line1 o2" />
      <RoadMap3 class="rmap o3" />
      <RoadMap4 class="rmap line2 o4" />
      <RoadMap5 class="rmap o5" />
      <RoadMap6 class="rmap line1 o6" />
      <RoadMap7 class="rmap o7" />
      <RoadMap8 class="rmap line2 o8" />
      <RoadMap9 class="rmap o9" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import RoadMap1 from "@/assets/imgs/roadmap/1Ellipse Roadmap-01.svg";
import RoadMap2 from "@/assets/imgs/roadmap/Line 1-01.svg";
import RoadMap3 from "@/assets/imgs/roadmap/2Ellipse Roadmap-01.svg";
import RoadMap4 from "@/assets/imgs/roadmap/Line 2-01.svg";
import RoadMap5 from "@/assets/imgs/roadmap/3Ellipse Roadmap-01.svg";
import RoadMap6 from "@/assets/imgs/roadmap/Line 3-01.svg";
import RoadMap7 from "@/assets/imgs/roadmap/4Ellipse Roadmap-01.svg";
import RoadMap8 from "@/assets/imgs/roadmap/Line 4-01.svg";
import RoadMap9 from "@/assets/imgs/roadmap/5Ellipse Roadmap-01.svg";

export default {
  name: "RoadMap",
  components: { RoadMap1, RoadMap2, RoadMap3, RoadMap4, RoadMap5, RoadMap6, RoadMap7, RoadMap8, RoadMap9 },
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: ".triger",
      //       start: "center center",
      //       end: "bottom top",
      //       markers: this.scrollMarker,
      //       scrub: false,
      //       pin: false,
      //     },
      //   })
      //   .from(".o1", { x: -innerWidth * 1, opacity: 0 })
      //   .from(".o2", { x: -innerWidth * 1, opacity: 0 })
      //   .from(".o3", { x: -innerWidth * 1, opacity: 0 });
    },
  },
};
</script>

<style lang="scss" scoped>
.roadMap2 {
  margin-left: -800px;
  margin-bottom: 400px;
  //border: 1px solid red;
}

.rmap {
  position: absolute;
  width: 800px;
  height: 510px;
  transition: all 500ms ease-in-out;
  fill: $white-color;
  opacity: 0.85;
  filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 40px rgba(33, 196, 250, 1)) blur(2px);
  animation: shineRoadMap 3s infinite linear;

  > * {
    stroke: $white-color;
    stroke-width: 2px;
    transition: all 500ms ease-in-out;
  }

  z-index: 100;
}

@keyframes shineRoadMap {
  0% {
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(1px);
    opacity: 1;
  }
  50% {
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) blur(0px);
    opacity: 1;
  }
  100% {
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(1px);
    opacity: 1;
  }
}

.line1 {
  animation: shineRoadMapLine1 3s infinite linear;
  z-index: 20;
}

@keyframes shineRoadMapLine1 {
  0% {
    transform: rotate(-0.5deg);
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(1px);
    opacity: 0.85;
  }
  50% {
    transform: rotate(0.5deg);
    filter: drop-shadow(0px 0px 5px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 5px rgba(33, 196, 250, 1)) blur(0px);
    opacity: 1;
  }
  100% {
    transform: rotate(-0.5deg);
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(1px);
    opacity: 0.85;
  }
}

.line2 {
  animation: shineRoadMapLine2 3s infinite linear;
  z-index: 20;
}

@keyframes shineRoadMapLine2 {
  0% {
    transform: rotate(1deg);
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(1px);
    opacity: 0.85;
  }
  50% {
    transform: rotate(-1deg);
    filter: drop-shadow(0px 0px 5px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 5px rgba(33, 196, 250, 1)) blur(0px);
    opacity: 1;
  }
  100% {
    transform: rotate(1deg);
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(1px);
    opacity: 0.85;
  }
}

@media screen and (max-width: $layout-breakpoint-medium) {
  .roadMap2 {
    margin-left: -350px;
    margin-bottom: 300px;
  }
  .rmap {
    position: absolute;
    width: 400px;
  }
}
</style>
