<template>
  <main>
    <div id="education-title">
        <h1>Education</h1>
        <div id="edu-nav-wrapper">
          <NuxtLink :to="`/blog`"><div class="nav-button">Education Blog</div></NuxtLink>
          <a href="#robot-store"><div class="nav-button">Coding and Robotics Store</div></a>
          <a href="#online-courses"><div class="nav-button">Online Coding Courses</div></a>
          <a href="#lesson-plans"><div class="nav-button">Lesson Plans</div></a>
        </div>
      </div>
      <article>
        <div class="education-content" id="why-code">
          <div class="education-heads"><h2>Why Coding?</h2></div>
          <p><span>Being able to actively interact and control technology is an essential 21st Century skill.</span>
              <br> 
              Many people will not go into active software development but will definitely use the type of thinking that comes from coding: collaboration, problem-solving, 
              abstraction, decomposition and pattern recognition to name a few. There are so many exciting resources that I use in this space, from the MIT developed Scratch
               (to make stories, games and animations), Code.org (to understand the fundamentals of coding through puzzles and projects), SonicPi (a live coding music tool) 
               and several others that allow learners to, at their level, explore their passion and have fun while doing so.</p>
               <a href="/contact-form"><div class="edu-button">Let's Chat</div></a>
        </div> 
      </article>
    <div id="education-information-container">
      <article>
          <div class="education-content" id="online-courses">
              <h2><a :href= "spaceURI" rel="noreferrer" target="_blank"> Space Explorers Coding Course for Kids</a></h2>
              <p>When our children are able to follow their interests and have fun, they learn more. We'll be creating programs, games and even art using the free coding tool, Scratch.
                  <br>
                Your children are able to follow along as they code, complete activities and challenge themselves in this course. Get them started (or better developed) in their coding journey with the Space Explorers Coding Course for Kids!
              </p>
              <a :href="spaceURI"><div class="edu-button">Learn More</div></a>
         </div>
      </article>
      <article>
          <div class="education-content">
              <h2><a :href= "parentURI" rel="noreferrer" target="_blank">Use Coding in Your Teaching with FREE Tools</a></h2>
              <p>You know your children better than anyone... I hope. You want the best for them... I hope. That means you want them to know coding but don't know where to start. In this course
                  you'll see exactly how you can use free tools to get your family started on your coding adventure.
              </p>
              <a :href="parentURI"><div class="edu-button">Learn More</div></a>
         </div>
      </article>
      <article>
          <div class="education-content">
              <h2><a :href= "hcShopURI" rel="noreferrer" target="_blank" id="robot-store">Coding and Robotics Kits and Free Lessons</a></h2>
              <p>The importance of movement and tinkering in education cannot be overstated. With the HomeCode coding and robotics starter kits, your children are able to make amazing things with tech (like a fruit keyboard)
                  and see how excellent it can be for problem solving. Each kit comes with a full online course for free. The robotics store is currently undergoing an upgrade. Please click below to contact me about our kits.
              </p>
              <a :href="hcShopURI"><div class="edu-button">Find Out More</div></a>
         </div>
      </article>
      <article>
          <div class="education-content" id="lesson-plans">
              <h2><a href= "https://teachingresources.co.za/vendors/mr-os-homecode-store/" rel="noreferrer" target="_blank">Lesson Plans</a></h2>
              <p>You don't have to be an expert to run a lesson that uses coding to make thinking visible! We've made lesson plans that accompany <a href="https://www.youtube.com/channel/UCUtv80PwqNDHfvSMPcAXR_g" rel="noreferrer" target= "_blank">YouTube video tutorials</a> that you can purchase (for nice and cheap). If you've got a 
                topic and want some help, <a href= "/contact-form" rel="noreferrer" target="_blank">give us a shout and we'll help</a>.
              </p>
              <a href="https://teachingresources.co.za/vendors/mr-os-homecode-store/" target="_blank" rel="noreferrer"><div class="edu-button">Lesson Plans</div></a>
         </div>
      </article>
      <article>
          <div class="education-content" id="live-lesson">
              <h2><a href= "/contact-form" rel="noreferrer" target="_blank">Live Lessons</a></h2>
              <p>There's nothing quite like live lessons in your home with a qualified teacher. If you're in the Garden Route between George and Knysna then I offer these lessons with all the 
                  essentials included. <a href= "/contact-form" rel="noreferrer" target="_blank">Let me know if you're interested</a> to see how I can meet your families tech needs.
              </p>
              <a href="/contact-form"><div class="edu-button">Enquire</div></a>
         </div>
      </article>
    </div>
  </main>
</template>

<script>
export default {
    data() {
        return {
            spaceURI: "https://www.udemy.com/course/space-explorers-coding-course-for-kids/?referralCode=DE8D3C487174A5BF372D",
            parentURI: "https://www.udemy.com/course/homecodeparents/?referralCode=9CF8785ED8A56A6FED8F",
            hcShopURI: "mailto:shop@homecode.co.za",
        }
    }
     
}
</script>

<style scoped>
  h1 {
    font-size: 3em;
  }

  p {
    line-height: 1.8em;
  }

  #education-title {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .nav-button {
    background: #f7872c;
    text-align: center;
    padding: 1em;
    margin: 0.5em;
    /* border: 2px solid black; */
    color: black;
    box-shadow: 1px 3px 5px gray;
  }
  #edu-nav-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  #edu-nav-wrapper a {
    text-decoration: none;
  }
  #education-information-container {
    display: grid;
    width: 90%;
    margin: 0 auto;
    grid-column-gap: 2em;
    grid-row-gap: 1em;
    padding-bottom: 1em;
    padding-top: 1em;
    border-bottom: 1em solid rgba(0,115,92,1);
    border-top: 1em solid rgba(0,115,92,1);
  }

  .education-content {
    padding: 2em;
    box-shadow: 2px 10px 10px gray;
    line-height: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .education-heads {
    display: flex;
    justify-content: center;
  }

  #why-code {
    padding-top: 1em;
    margin: 1em;
    line-height: 1.3em;
  }

  #why-code span {
    line-height: 2em;
    font-size: 1.2em;
    text-align: center;
    display: inline-block;
    width: 100%;
    margin-bottom: 1em;
  }

  .education-content {
    display: flex;
    flex-direction: column;
  }

  .education-content h2{
    text-align: center;
    color: rgba(0,115,92,1);
  }

  .education-content a {
    color: rgba(0,115,92,1);
    text-decoration: none;
  }

  .edu-button{
    text-align: center;
    align-self: center;
    background: rgba(0,115,92,1);
    color: white;
    font-size: 1.2em;
    padding: 0.7em;
    width: 13vmax;
    margin: 0 auto;
    box-shadow: 1px 1px 5px gray;
  }

</style>