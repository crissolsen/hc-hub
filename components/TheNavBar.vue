<template>
  <header>
    <nav>
      <NuxtLink to="/">
        <div id="nav-logo">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            height="110"
            viewBox="0 0 942 504"
          >
            <defs></defs>
            <text class="cls-1" transform="translate(428 287.23)">Home</text>
            <text class="cls-2" transform="translate(431 395.38)">CODE</text>
            <path
              class="cls-3"
              d="M235.84,179.45H370.77c19.77,0,34.45,15.57,34.45,35.34v160a25.74,25.74,0,0,1-25.74,25.75h0l-.09-181.45a13.84,13.84,0,0,0-13.79-13.84l-141.25.06-.18-15.79C224.17,183.7,230,179.45,235.84,179.45Z"
            />
            <path
              class="cls-4"
              d="M353.55,242.84V375.91a36,36,0,0,1-36,36.09H156.62a25.92,25.92,0,0,1-25.89-26h0l182.5-.09c7.67,0,13.89-6.21,14.48-13.9V231.13h14.35C347.9,231.13,353.55,237,353.55,242.84Z"
            />
            <path
              class="cls-3"
              d="M291.36,360.32H148c-19.77,0-27-16-27-35.79v-160c0-14.21,6-21.95,17.23-25.28h8.61l-.19,181a13.84,13.84,0,0,0,13.79,13.84l141.43.68v15.05A10.51,10.51,0,0,1,291.36,360.32Z"
            />
            <path
              class="cls-4"
              d="M198.52,308.65h-2.88c-11.81.1-23-14-23-25.84V153.62a21,21,0,0,1,5.74-14.36L264.55,56c9.07-9.6,24.84-9.07,34.45,0L405.22,162.23l-19.77.58a40.48,40.48,0,0,1-25.56-10.44L296.13,87.58c-6.88-6.23-22.35-6.75-28.71,0L206.57,149c-3.78,4-8,10.54-8,16.06Z"
            />
          </svg>
        </div>
      </NuxtLink>
      <div v-show="!mobile" id="link-wrapper">
        <NuxtLink to="/education#online-courses">Online Kids Coding Courses</NuxtLink>
        <NuxtLink to="/blog">Education Blog</NuxtLink>
        <NuxtLink to="/education#lesson-plans">Lesson Plans</NuxtLink>

        <!-- <NuxtLink to="/webdev" >Web Development</NuxtLink> -->
        <NuxtLink id="contact-button" :to="`/contact-form`"
          >We can help!</NuxtLink
        >
      </div>

      <div
        v-show="mobile"
        id="mobile-link-wrapper"
        @click="mobileMenu = !mobileMenu"
      >
        <svg v-show="!mobileMenu" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" rx="8" fill="#00735cff"></rect>
          <rect y="30" width="100" height="20" rx="8" fill="#00735cff"></rect>
          <rect y="60" width="100" height="20" rx="8" fill="#00735cff"></rect>
        </svg>
        <transition name="fade">
          <div v-show="mobileMenu" id="mobile-links">
            <NuxtLink to="/education#online-courses">Online Kids Coding Courses</NuxtLink>
            <NuxtLink to="/blog">Education Blog</NuxtLink>
            <NuxtLink to="/education#lesson-plans">Lesson Plans</NuxtLink>

            <!-- <NuxtLink to="/webdev">Web Development</NuxtLink> -->
            <NuxtLink id="contact-button" :to="`/contact-form`"
              >We can help!</NuxtLink
            >
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
      mobileMenu: false,
    };
  },
  mounted() {
    this.myEventHandler;
  },
  created() {
    if (window.innerWidth > 768) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      if (window.innerWidth > 768) {
        this.mobile = false;
      } else {
        this.mobile = true;
      }
    },
    screenSizeCheck() {
      if (window.innerWidth > 768) {
        this.mobile = false;
      } else {
        this.mobile = true;
      }
    },
  },
};
</script>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
}
#nav-logo {
  display: flex;
  justify-content: center;
}
#link-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
#link-wrapper a {
  background: #00735cff;
  padding: 1em;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  margin-left: 1em;
  /* box-shadow: 5px 5px 2px 2px #606462ff; */
  font-weight: 800;
  /* border: 2px solid black; */
}
#contact-button {
  background: #f7872c !important;
  color: black !important;
  /* border: 2px solid black !important; */
}
#mobile-link-wrapper {
  align-self: center;
  justify-self: center;
}
#mobile-links {
  display: flex;
  flex-direction: column;
  margin-right: 1em;
}
#mobile-links a {
  background: #00735cff;
  padding: 0.5em;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  margin: 0.3em;
  /* box-shadow: 5px 5px 2px 2px #606462ff; */
  /* border: 1px solid black; */
}

a {
  transition: all 0.2s;
}

a:hover {
  transform: translateY(3px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.cls-1 {
  font-size: 138px;
  letter-spacing: -0.06em;
}
.cls-1,
.cls-2 {
  fill: #606462;
  font-family: Comfortaa-Regular, Comfortaa;
}
.cls-2 {
  font-size: 117px;
}
.cls-3 {
  fill: #00735c;
}
.cls-4 {
  fill: #00493a;
}
</style>