<template>
  <div class="teamMember">
    <div class="cornerLeftTop" />
    <p class="text">{{ i }}</p>
    <img class="persona" :src="require('@/assets/imgs/persona.jpg')" />
    <div class="cornerRightBottom" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.teamMember {
  margin: 10px;
  //border: 1px solid red;
}

.persona {
  width: 300px;
  margin: -40px 20px;
}

.cornerLeftTop,
.cornerRightBottom {
  height: 60px;
  width: 60px;
}

.cornerRightBottom {
  margin-left: calc(100% - 60px);
}
</style>
