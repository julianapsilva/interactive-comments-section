<template>
<div class="add-comment">
    <img src="@/assets/avatars/image-juliusomo.png" alt="my-photo">
    <textarea name="" id="" cols="100" rows="4"
     placeholder="Add a comment..." v-model="text"></textarea>
    <button @click="sendComment">{{button}}</button>
</div>
</template>

<script>
export default {
  name: 'NewComment',
  props: {
      user: Object,
      button: {
        type: String,
        default: "Send"
      }
  },
  data () {
    return {
      text: ''
    }
  },
  components: {},
  methods: {
    sendComment(){
      this.$emit('newComment',
       {score: 0, createdAt: 'today', 
       content: this.text, user: this.user})
    }
  },
  created () {}
}
</script>

<style scoped>
.add-comment {
  background-color: hsl(228, 33%, 97%);
  max-width: 730px;
  margin-bottom: 60px;
  box-shadow: 3px 4px 10px 0px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}
img{
    width: 30px;
    height: 30px;
}
button{
    color: #fff;
    border: none;
    background-color: hsl(238, 40%, 52%);
    padding: 10px 20px;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: bold;
}
img, button{
  margin-top: 5px;
}
textarea{
    max-width: 80%;
    border: none;
    padding: 12px;
    border-radius: 5px;
}

textarea:focus{
    outline: 0.2px solid  hsl(238, 40%, 52%);
}

</style>