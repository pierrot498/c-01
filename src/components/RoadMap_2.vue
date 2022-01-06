<template>
  <div class="roadMapContainer">
    <RoadMap class="roadSvg" />
  </div>
</template>

<script>
import RoadMap from "@/assets/imgs/ROADMAP-01.svg";

export default {
  name: "RoadMap",
  components: { RoadMap },

  methods: {},
};
</script>

<style lang="scss" scoped>
.roadMapContainer {
  border: 1px solid red;
}

.svg {
}
</style>
