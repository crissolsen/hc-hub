<template>
<div>
    <TheNavBar />
  <div id="form-wrapper" v-if= "!submitted">
    <h1 class="form-title">
      Enquiry Form
    </h1>
    <div class="content">
      <form name="contact"  @submit.stop.prevent= "submit" netlify>     
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" v-model= "name"/>
        <label class="form-label" for="email">
          Email:
        </label>
        <input type="email"  class="form-field" name="_replyto" id="email" v-model= "email" />
        <label class="form-label" for="message">
          How can we help?
        </label>
        <textarea class="form-field" name="message" id="message" v-model= "message"></textarea>
        <button class="form-button" type="submit" value="send" >Send Message</button>
      </form>
    </div>
  </div>
  <div v-else id="submitted">
    <h1>Thank you for filling out that form. We look forward to chatting with you further.</h1>
    <h2>Before you go... why not subscribe to the monthly newsletter or meet us on social media?</h2>

    </div>
    <MailChimpSignUp />
    <SocialMediaLogos />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: false
    }
  },
  methods: {
    async submit() {
      try {
        const res = await this.$axios.request({
          url: "https://formspree.io/f/mdopzqpo",
          method: 'post',
          data: this.$data
        })
        this.submitted = true
      } catch (err) {
        console.log(err)
      }
    }
  },
  head: {
    title: "Contact Us"
  }
}
</script>

<style scoped>
    #form-wrapper {
      width: 40%;
      min-width: 300px;
      margin: 0.5em auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1em 0;
    }
    h1 {
      text-align: center;
      color: rgba(0,115,92,1)
    }
    #form-wrapper label {
      display: block;
      font-size: 1.2em;
      line-height: 1.4em;
      margin-bottom: 0.5em;
      margin-top: 0.5em;
    }
    .content {
      display: flex;
      justify-content: center;
      /* box-shadow: 0 2em 0.5em gray; */
      padding: 0.5em;
      border-bottom: 3px solid gray;
      padding-bottom: 2em;
    }
    .content form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 1em;
    }

    .content input {
      height: 2em;
      border: 0.2em solid gray;
      border-radius: 0.5em;
    }

    .content textarea {
      height: 10em;
      border: 0.2em solid gray;
      border-radius: 0.5em;
      margin-bottom: 1em;
    }

    .form-button {
      font-family: inherit;
      height: 1.5em;
      background: rgba(0,115,92,1);
      color: white;
      font-size: 1.5em;
      cursor: pointer;
    }

    .hpot {
      display: none;
    }

    #submitted {
      text-align: center;
    }
</style>

