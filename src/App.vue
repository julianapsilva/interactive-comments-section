<template>
  <div v-for="comment in comments" 
    :key="comment.id" class="comments-wrapper">
    <Comment :data="comment" :user="currentUser" />
    <div v-if="comment.replies" class="replies">
      <div class="vertical"></div>
      <div v-for="reply in comment.replies" :key="reply.id" class="reply">
        <Comment :data="reply" :user="currentUser" />
      </div>
    </div>
  </div>
  <NewComment :user="currentUser" />
</template>

<script>
import api from '@/services/api'
import Comment from '@/components/Comment.vue'
import NewComment from '@/components/NewComment.vue'

export default {
  name: 'App',
  components: {
    Comment,
    NewComment
  },
  data () {
    return {
      comments: [],
      currentUser: {}
    }
  },
  methods: {
    async getAllComments () {
      const { data } = await api.get('/comments')
      this.comments = data
    },
    async getUser () {
      const { data } = await api.get('/currentUser')
      this.currentUser = data
      console.log('curee', this.currentUser)
    }
  },
  created () {
    this.getAllComments()
    this.getUser()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #f5f6fa;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button:hover {
  cursor: pointer;
}

.comments-wrapper{
  max-width: 750px;
}

.replies {
  position: relative;
}
.vertical {
  border-left: 0.1px solid hsl(211, 10%, 85%);
  height: 90%;
  position: absolute;
  margin-top: 15px;
  margin-left: 30px;
}

.reply {
  margin-left: 60px;
}
</style>
