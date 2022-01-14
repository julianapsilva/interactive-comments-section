<template>
<div class="wrapper">
  <Score :score="data.score" />
  <div class="comment-section">
  <button class="reply">
    <img src="@/assets/icon-reply.svg" alt="" srcset="">
    <span>Reply</span>
  </button>
  <div class="profile">
    <!-- <img :src="data.user.image.png" alt="profile-image"> -->
    <img src="@/assets/avatars/image-amyrobson.png" alt="profile-image">
    <p>{{data.user.username}}</p>
    <p>{{data.createdAt}}</p>
  </div>

  <p>{{data.content}}</p>
  </div>

</div>
</template>

<script>
import Score from '@/components/Score.vue';

export default {
  name: 'Comment',
  components: {
    Score,
  },
  props: {
    data: Object,
  },
  created() {
    console.log(this.data);
  },
};
</script>

<style scoped>
img {
  width: 30px;
}
.wrapper{
  background-color: hsl(228, 33%, 97%);
  max-width: 750px;
  margin-bottom: 30px;
  box-shadow: 3px 4px 10px 0px rgba(0,0,0,0.1);
  padding: 10px;
  position: relative;
}
.comment-section{
  margin-left: 60px;
}

.profile{
  display: flex;
}
.profile p{
  margin-left: 20px;
}

.reply{
  display: flex;
  align-items: center;
  border: none;
  background-color: hsl(228, 33%, 97%);
  position: absolute;
  right: 0;
  padding-right: 20px;
}
.reply span {
  margin-left: 7px;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
}
.reply img{
  width: 15px;
}
</style>
