<template>
<div>
    <TheNavBar />
    <div id="choose-form">
        <div class="choose-button" @click= "education = !education, web = false" >Education</div>
        <div class="choose-button" @click= "web = !web, education = false" >Web Development</div>
    </div>
  <div v-show= "education" id="form-education">
    <h1 class="title">
      Education Enquiry Form
    </h1>
    <div class="content">
      <form name="contact" action="" method="post">
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
  <h1> {{ education }}</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            education: false,
            web: false,
        }
    }
}
</script>

<style scoped>
    .choose-button {
        cursor: pointer;
    }
</style>

