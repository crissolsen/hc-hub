<template>
    <div>
    <TheNavBar />
    <main>
      <div id="blog-title">
        <h1>{{ post.title }}</h1>
        
      </div>

       <nuxt-content :document= "post" />
       <p> Post created on {{ formatDate(post.createdAt) }} by {{ post.author.name }}</p>
    </main>
    <AllPosts />
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
      const allPosts = await $content('posts').fetch()

      return { allPosts }
    },
    async asyncData({ $content, params }) {
      const post = await $content('posts', params.slug).fetch()

      return { post }
    },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
   }
  }
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
  
  #blog-title h1 {
    color: black;
    text-align: center;
    background: rgba(92, 209, 111, 0.2);
    border-radius: 0.2em;
    padding-top: 0.2em;
  }

  .nuxt-content h2 {
    color: green;
    font-weight: 800;
  }

  .nuxt-content blockquote {
    font-size: 1.2em;
    font-style: italic;
    border-left: 3px solid green;
    padding-left: 1em;
  }

  .nuxt-content p {
    line-height: 1.5em;
  }

  .nuxt-content .image-container {
    display: flex;
    justify-content: center;

  }

</style>