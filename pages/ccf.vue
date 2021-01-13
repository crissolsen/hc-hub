<template>
  <div id="form-wrapper">
      <TheNavBar /> 
    <iframe
      src="https://forms.office.com/Pages/ResponsePage.aspx?id=wCXQcKCdpUWK4lbA_VjS8aryUKaxK35Nu3f07CK5vLlURUJSTFUwMkJJVEFHNEpMS0w5QkxPWlZTQi4u&embed=true"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      style="border: none; max-width: 100%; max-height: 100vh"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      msallowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Africa Teen Geeks Coding Club 2021"
        }
    }
}
</script>


<style scoped>
    #form-wrapper {
        width: 100%;
        height: 100vmax;
    }

    iframe {
        width: 100%;
        height: 100%;
    }
</style>