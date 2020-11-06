<template>
<div>
    <TheNavBar />
    <div id="choose-form">
        <div class="choose-button" @click= "formDisplay('education')">Education</div>
        <div class="choose-button" @click= "formDisplay">Web Development</div>
    </div>
  <div id="form-education">
    <h1 class="title">
      Contact
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
  <h1> {{formType}}</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            formType: ""
        }
    },
    methods: {
        formDisplay(type) {
           return this.formType = type
        }
    }
}
</script>

<style scoped>
    .choose-button {
        cursor: pointer;
    }
</style>

