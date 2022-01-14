<template>
<div v-for="comment in comments" :key="comment.id">
  <Comment :data="comment"/>
</div>
</template>

<script>
import api from '@/services/api'
import Comment from './components/Comment.vue'
export default {
  name: 'App',
  components: {
    Comment
  },
  data (){
    return {
      comments: []

    }
  },
  methods:{
    async getAllComments(){
      const {data} = await api.get('/comments')
      this.comments = data
    }
  },
  created (){
    this.getAllComments()
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

body{
    background-color: #F5F6FA;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
