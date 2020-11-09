<template>
<div>
    <TheNavBar />
  <div id="form-wrapper">
    <h1 class="form-title">
      Enquiry Form
    </h1>
    <div class="content">
      <form name="contact" action="/thanks" method="post" netlify-honeypot="bot-field" data-netlify="true">
        <p class="hidden">     
        <label>Don’t fill this out: <input name="bot-field"></label></p>
        <input type="hidden" name="form-name" value="contact" />
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" />
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="email" id="email" />
        <label class="form-label" for="message">
          Message:
        </label>
        <textarea class="form-field" name="message" id="message"></textarea>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #form-wrapper {
      width: 80%;
      margin: 0.5em auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1em;
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
      box-shadow: 1em 1em 2em gray;
      padding: 0.5em;
      border-radius: 2em;
      padding-bottom: 2em;
    }
    .content form {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
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

    .hidden {
      display: none;
    }
</style>

