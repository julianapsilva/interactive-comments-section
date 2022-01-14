<template>
<div class="score-wrapper">
  <img src="@/assets/icon-plus.svg" alt="icon-plus" srcset="">
  <span>{{score}}</span>
  <img src="@/assets/icon-minus.svg" alt="icon-minus">
</div>
</template>

<script>
export default {
  name: 'Score',
  props: {
    score: Number,
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
};
</script>

<style scoped>
.score-wrapper {
  display: flex;
  flex-direction: column;
  width: 30px;
  align-items: center;
  position: absolute;
  margin: 10px;
  background-color: hsl(239, 57%, 95%);
  border-radius: 8px;
}
img {
  width: 12px;
  padding: 15px;
}
span {
  color: hsl(238, 40%, 52%);
  font-weight: bold;
  font-size: 16px;
}

</style>
