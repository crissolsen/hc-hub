<template>
    <div>
    <TheNavBar />
    <BlogSearchInput />
    <main id="page-wrapper">
      <div id="main-blog-title">
        <h1>Educational Blog Posts</h1>
      </div>
      <div id="blog-buttons-wrapper">
        <div
          class="blog-category-choose-button"
          @click="filterResults('thinkingSkills')"
        >Thinking Skills</div>
        <div
          class="blog-category-choose-button"
          @click="filterResults('codingRobotics')"
        >Coding and Robotics</div>
        <div class="blog-category-choose-button" @click= "filterResults('all')">All</div>
      </div>
      <div id="post-list-display" >
          <div v-for="i in filteredPosts" :key= "i.slug" class="post-preview-block">
            <NuxtLink :to="`/blog/${i.slug}`">
                <h2> {{ i.title }} </h2>
                <img :src= "i.img" alt= "i.alt" >
            </NuxtLink>
            <p>{{ i.description }}</p>
            <p class="extra-info">Written by {{ i.author.name }}</p>
            <!-- <p class="extra-info"> {{ formatDate(Date(i.createdAt)) }}</p> -->
            
          </div>
      </div>
    </main>
    <SocialMediaLogos />
  </div>
</template>

<script>
export default {
  data() {
    return {
      postCategory: "all",
      filteredPosts: [],
    };
  },
  async asyncData({ $content, params }) {
    const post = await $content("posts", params.slug)
      .only([
        "title",
        "description",
        "img",
        "slug",
        "author",
        "category",
        "tags",
      ])
      .sortBy("createdAt", "asc")
      .fetch()
    return {
      post,
    }
  },
  created() {
      this.filterResults('all')
  },
  methods: {
    filterResults(category) {
      this.filteredPosts = [];
      this.postCategory = category;
      for (let i = 0; i < this.post.length; i++) {
        if (this.post[i].category === this.postCategory) {
          this.filteredPosts.push(this.post[i]);
        }
        if (category === "all") {
          this.filteredPosts.push(this.post[i]);
        }
      }
      return this.filteredPosts
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head: {
    title: "Educational Blog"
  }
};
</script>

<style scoped>
    h1 {
        font-size: 3em;
        text-align: center;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #blog-buttons-wrapper {
        display: flex;
        justify-content: space-around;
        align-items: space-between;
    }

    .blog-category-choose-button {
        background: rgba(0,115,92,1);
        text-align: center;
        padding: 1em;
        margin: 0.5em;
        width: 33%;
        /* border: 2px solid black; */
        color: white;
        box-shadow: 1px 3px 5px gray;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    #post-list-display {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        justify-items: center;
        grid-column-gap: 1em;
        grid-row-gap: 0.5em;
    }

    .post-preview-block {
        padding: 1em;
        box-shadow: 2px 0.5em 0.5em rgba(0,115,92,1);
        border-bottom-right-radius: 5em;
    }

    .post-preview-block img {
        width: 100%;
        border-radius: 5em;
        box-shadow: 0.4em 0.4em 0.4em gray;
        border: 2px solid white;
    }

    .post-preview-block a{
        text-decoration: none;
        color: rgba(0,115,92,1);
    }

    .extra-info {
        font-size: 0.8em;
        color: #606462;
    }
</style>


