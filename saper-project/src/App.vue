<template>
  <div>
    <div class="post" v-for="post in posts">
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Descriptions: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts: [
          {id: 1, title: 'JavaScript 1', body: 'Post descriptions 1'},
          {id: 2, title: 'JavaScript 2', body: 'Post descriptions 2'},
          {id: 3, title: 'JavaScript 3', body: 'Post descriptions 3'},
          {id: 4, title: 'JavaScript 4', body: 'Post descriptions 4'},
        ]
      }
    },
    methods: {
      addLikes() {
        this.likes += 1;
      },
      addDislikes() {
        this.dislikes += 1;
      }
    }
  }
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  margin-bottom: 15px;
  border: 2px solid teal;
}

.post:last-child {
  margin-bottom: 0;
}

.area-post {
  padding: 10px;
  background: #CE915B;
}

</style>
