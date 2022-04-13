<template>
  <div>
    <TheNavBar />
    <BlogSearchInput />
    <main class="blog-post-wrapper">
        <h1>Products coming soon...</h1>
      <div id="blog-title">
        <h1>{{ post.title }}</h1>
        <!-- <MailChimpSignUp /> -->
      </div>

      <nuxt-content :document="post" />
      <div id="author-card">
        <p>By {{ post.author.name }}</p>
        <p>{{ post.author.bio }}</p>
      </div>
      <ShareThis />
    </main>
    <div>
      <h2 id="more-posts">More posts you'll love</h2>
      <footer>
        <NuxtLink
          v-for="i in filteredPosts"
          :key="i.slug"
          :to="`/blog/${i.slug}`"
        >
          <div class="blog-post-blocks">
            <h3>{{ i.title }}</h3>
            <p>{{ i.description }}</p>
          </div>
        </NuxtLink>
      </footer>

      <NuxtLink :to="`/projects`" id="back-block-text">
        <div id="back-block">Back to all posts</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postTitle: "title",
    };
  },
  async asyncData({ $content, params }) {
    const post = await $content("projects", params.slug).fetch();
    const allPosts = await $content("projects").fetch();
    return { post, allPosts };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  computed: {
    filteredPosts() {
      //randomly choose two or less posts to display at the bottom.
      let tempNumberForChoosingRandomPosts = Math.floor(
        Math.random() * this.allPosts.length
      );
      return this.allPosts.slice(
        tempNumberForChoosingRandomPosts,
        tempNumberForChoosingRandomPosts + 2
      );
    },
  },
  head(context) {
    return {
      title: `${this.post.title}`,
      //   meta: [
      //     {
      //     hid: "description",
      //     property: "description",
      //     content: `${this.post.description}`
      //     },
      //       { property: "og:url", content:`https://homecode.co.za/blog/${this.post.slug}` },
      //       {  property: "og:type",content: "article" },
      //       {  property: "og:title",content:` ${this.post.title}` },
      //       { name: "description", property: "description", content: `${this.post.description}`, hid:"description"},
      //       {  property: "og:description", content: `${this.post.description}`, hid: "og:description"},
      //       { property: "og:image",content: `${this.post.img}`, hid: "og:image" },
      //     ],
      link: [
        {
          rel: "canonical",
          href: `https://homecode.co.za/projects/${this.post.slug}`,
        },
      ],
      meta: [
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `${this.post.title}`,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `${this.post.description}`,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${this.post.img}`,
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: `${this.post.alt}`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.post.title}`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `${this.post.description}`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${this.post.img}`,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: `${this.post.alt}`,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: `${this.post.title}`,
        },
      ],
    };
  },
};
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

#author-card {
  padding: 0.5em;
  margin: 0.3em;
  font-size: 1em;
  text-align: right;
  color: gray;
}

#fb-share {
  text-decoration: none;
  background: green;
  padding: 0.5em;
  font-size: 0.8em;
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
  box-shadow: 2px 0.5em 0.5em rgba(0, 115, 92, 1);
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
  background: rgba(0, 115, 92, 1);
  padding: 1em;
  border-radius: 1em;
  box-shadow: 0.2em 0.2em 0.3em gray;
}

#back-block-text {
  color: black;
  text-decoration: none;
  font-size: 1.3em;
}

iframe {
  display: block;
  /* min-width: 300px; */
  width: 80%;
  max-width: 80%;
  max-height: 800px;
  margin: 0 auto;
  height: 400px;
}
</style>