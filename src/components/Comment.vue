<template>
<div class="wrapper">
  <Score :score="data.score" />
  <div class="comment-section">

  <button class="reply" @click="replyComment" 
  v-if="data.user.username != user.username">
    <img src="@/assets/icon-reply.svg" alt="" srcset="">
    <span>Reply</span>
  </button>

  <div class="edit-delete" v-else>
    <button>
      <img src="@/assets/icon-delete.svg" alt="icon-delete">
      <span>Delete</span>
    </button>

    <button>
      <img src="@/assets/icon-edit.svg" alt="icon-edit">
      <span>Edit</span>
    </button>

  </div>


  <div class="profile">
    <!-- <img :src="data.user.image.png" alt="profile-image"> -->
    <img src="@/assets/avatars/image-amyrobson.png" 
      class="icon-person" alt="profile-image">
    <p>{{data.user.username}}</p>
    <p>{{data.createdAt}}</p>
  </div>

  <p>{{data.content}}</p>
  </div>

</div>
  <div class="reply-comment" v-if="active">
    <NewComment :user="user" button="Reply" 
    @newComment="handleNewComment"/>
  </div>
  <div v-if="showNewComment">
    <Comment :data="dataNewComment" :user="user" />
  </div>
</template>

<script>
import NewComment from '@/components/NewComment.vue';
import Score from '@/components/Score.vue';

export default {
  name: 'Comment',
  components: {
    Score,
    NewComment
  },
  props: {
    data: Object,
    user: Object
  },
  data(){
    return {
      active: false,
      showNewComment: false,
      dataNewComment: {}
    }
  },
  methods:{
    replyComment(){
      this.active = true
    },
    handleNewComment(payload){
      this.active = false
      this.showNewComment = true
      this.dataNewComment = payload
    }
  },
  created() {
    console.log(this.data);
  },
};
</script>

<style scoped>
.icon-person {
  width: 30px;
  height: 30px;
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

.reply, .edit-delete{
  display: flex;
  align-items: center;
  border: none;
  background-color: hsl(228, 33%, 97%);
  position: absolute;
  right: 0;
  padding-right: 20px;
}
.reply span,  .edit-delete button span{
  margin-left: 7px;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
}
.reply img{
  width: 15px;
}
.reply-comment{
  margin-top: -15px;
  margin-bottom: -35px;
}

.edit-delete button{
 border: none;
 background-color: hsl(228, 33%, 97%);
 margin-left: 10px;
 display: flex;
 align-items: center;
}

</style>
