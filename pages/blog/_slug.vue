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
    <!-- Come back to the facebook sharing -->
    <!-- <a :href= "`https://www.facebook.com/sharer/sharer.php?u=practical-bhabha-ba25eb.netlify.app/blog/${post.slug}`" target="_blank">
  Share to Facebook
</a> -->
    <div>
      <h2 id="more-posts">More posts you'll love</h2>
      <footer>
        <NuxtLink v-for= "i in filteredPosts" :key= "i.slug" :to= "`/blog/${i.slug}`">
          <div class="blog-post-blocks">
          <h3> {{ i.title }} </h3>
          <p> {{ i.description }} </p>
          </div>
          </NuxtLink>
        
      </footer>
      <NuxtLink :to= "`/blog`" id="back-block-text">
        <div id="back-block">
         Back to all posts
         </div>
      </NuxtLink>
    </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
      const post = await $content('posts', params.slug).fetch()
      const allPosts = await $content('posts').fetch()


      return { post, allPosts }
    },

    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
   },
    computed: {
    filteredPosts() {
      //randomly choose two or less posts to display at the bottom.
    let tempNumberForChoosingRandomPosts = Math.floor(Math.random() * (this.allPosts.length))
    return this.allPosts.slice(tempNumberForChoosingRandomPosts,(tempNumberForChoosingRandomPosts+2))
    },
    facebookSharing() {
      return "https://www.facebook.com/sharer/sharer.php?u=practical-bhabha-ba25eb.netlify.app/blog/"
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

   #more-posts {
    text-align: center;
  }

  footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    justify-items: center;
    width: 100%;
  }

  footer a {
    text-decoration: none;
    color: black;
  }

  .blog-post-blocks {
    padding: 1em;
    box-shadow: 2px 0.5em 0.5em rgba(0,115,92,1);
    border-bottom-right-radius: 3em;
    margin-bottom: 0.5em;
  }

  .blog-post-blocks h3 {
    color: green;
    text-decoration: none;
  }

  #back-block {
    align-self: center;
    margin: 1em;
    text-align: center;
    background: rgba(0,115,92,1);
    padding: 1em;
    border-radius: 1em;
    box-shadow: 0.2em 0.2em 0.3em gray;
  }

  #back-block-text {
    color: black;
    text-decoration: none;
    font-size: 1.3em;
  }

</style>