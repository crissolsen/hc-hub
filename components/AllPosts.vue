<template>
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
</div>
</template>

<script>
export default {
  data() {
    return {
      allPosts: []
    }
  },
    created() {
      const articles = fetch("/content/posts")
      .then(res => res.json())
      .then(data => this.allPosts = data)
      return {
        articles
      }
    },
  computed: {
    filteredPosts() {
      //randomly choose three or less posts to display at the bottom.
    let tempNumberForChoosingRandomPosts = Math.floor(Math.random() * (this.allPosts.length))
    return this.allPosts.slice(tempNumberForChoosingRandomPosts,(tempNumberForChoosingRandomPosts+2))
  }
 }
}
</script>

<style scoped>
  #more-posts {
    text-align: center;
  }
  footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-column-gap: 1em;
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
  }

  .blog-post-blocks h3 {
    color: green;
    text-decoration: none;
  }

</style>