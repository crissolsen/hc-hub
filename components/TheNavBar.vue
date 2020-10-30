<template>
  <header>
    <nav>
      <div id="nav-logo">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 942 504"
          height="100"
        >
          <defs>
            <style>
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
          </defs>
          <text class="cls-1" transform="translate(428 287.23)">home</text>
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
      <div id="link-wrapper">
        <NuxtLink to="/education">Education</NuxtLink>
        <NuxtLink to="/webdev">Web Development</NuxtLink>
        <a id="contact-button" href="#contact-form">Let's Chat</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
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
    box-shadow: 5px 5px 2px 2px #606462ff;
    font-weight: 800;
}

#contact-button {
    background: #F7872C !important;
    color: black !important;
    border: 2px solid black !important;
}


</style>