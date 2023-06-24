<!-- eslint-disable vue/valid-template-root -->
// eslint-disable-next-line vue/valid-template-root

<template>
  <div class="main-area">
    <form>
      <h4 class="mainContent-h4">Make Post</h4>
      <input class="input" type="text" placeholder="Title">
      <input class="input" type="text" placeholder="Descriptions">
      <button class="main-btn">Create</button>
    </form>
    <div class="post" :key="post.id" v-for="post in posts">
      <div>{{ post.title }}</div>
      <div>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        { id: 1, title: 'JavaScript 1', body: 'Post descriptions 1' },
        { id: 2, title: 'JavaScript 2', body: 'Post descriptions 2' },
        { id: 3, title: 'JavaScript 3', body: 'Post descriptions 3' },
        { id: 4, title: 'JavaScript 4', body: 'Post descriptions 4' }
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.post {
  margin-top: 15px;
}
.post:first-child {
      margin-top: 0;
    }
.input {
  display: flex;
  max-width: 250px;
  border: 2px solid #87B2BC;
  margin: 8px 0;
  padding: 8px 2px;
}
.mainContent-h4 {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.main-btn {
  padding: 4px 8px;
  background-color: aquamarine;
  border: 2px solid blueviolet;
}
</style>
