<template>
  <div id="search-bar">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Posts"
    />
    <ul v-if="articles.length">
      <div style="color: white">Results...</div>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
        articles: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = []
          return
        }
        this.articles = await this.$content('posts')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
  }
</script>

<style scoped>
    #search-bar {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 50%;
        margin: 0 auto;
    }
    input {
        border: 2px solid black;
        border-radius: 0.5em;
        font-family: 'Comfortaa', sans-serif;
        padding: 0.3em;
    }

    ul {
      background: rgba(0,115,92,1);
      padding: 0.3em;
    }

    li a {
      color: white;
      text-decoration: none;
      
    }

    li {
      list-style-position: none;
      color: white;
      padding: 1em;
      margin: 5px 5px;
      border: 1px solid white;
      transition: all 0.3s;
    }

    li:hover {
      transform: translateY(3px)
    }
</style>