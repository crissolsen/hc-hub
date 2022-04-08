<template>
  <div>
    <TheNavBar />
    <div id="education-space">
      <h1>Education Space</h1>
      <div>
        The HomeCode Education Space is located in Sedgefield at the Sedgefield
        Christian Church Building. Here learners are able to visit and learn
        with Lego, Coding and Robotics, a breaker space, a stop motion studio
        and everything in between 😄🤖
      </div>
      <h2>What happens in the Education Space?</h2>
      <div id="image-wrapper">
        <img
          id="info-image"
          src="https://res.cloudinary.com/dvwsiufhl/image/upload/q_auto,f_auto/v1649394988/homeCode/HomeCode_Term_2_evqsaj.png"
          alt="weekly schedule summarised below"
        />
      </div>
      <div>
        The Education Space is here for learners to explore their interests and
        play while learning. Some of the options they have are building and
        creating stories with Lego (we have about 10 000 pieces), coding robotic
        controllers, collaborating in Minecraft, making stop motion movies and
        seeing what's inside electronics in the breakerspace.
      </div>
      <div>
        There are also weekly clubs that run throughout the week. Namely, the
        Minecraft Education clubs which takes place on a Monday from
        15:00-16:15, Drama clubs on a Wednesday from 13:00-14:15 (ages 6-9) and
        15:00-16:15 (ages 10-13) and Coding and Robotics on a Friday morning
        from 9:30-10:45.
      </div>
      <div>Between these times children can come and explore for R50/hour.</div>
      <h2>Stay Up to Date</h2>
      <div>
        The best place to keep up to date is the HomeCode WhatsApp group.
        <a
          href="https://chat.whatsapp.com/D7BOWzxbSUA3nUBJqPin0V"
          target="_blank"
          >Click here to join the group.</a
        >
      </div>
      <h2>Stop Motion Creations</h2>
      <div>
        Each week learners' stop motion creations will be uploaded and available
        here. When you click the link it will take you to a OneDrive folder
        where you can view them and download the relevant video. If the video
        doesn't have a descriptive name then you can preview them in the browser
        before downloading.
      </div>
      <!-- <a href="https://1drv.ms/u/s!AgwLlFMSpsmcnIFM8BBazo_k2pqe8w?e=hMz5V6" target="_blank">28 March - 1 April Videos</a> -->
      <div id="stop-motion-links">
        <iframe
          src="https://onedrive.live.com/embed?cid=9CC9A61253940B0C&resid=9CC9A61253940B0C%21458956&authkey=AIGm2w3BV8AF64M"
          width="165"
          height="128"
          frameborder="0"
          scrolling="no"
        ></iframe>

        <iframe
          src="https://onedrive.live.com/embed?cid=9CC9A61253940B0C&resid=9cc9a61253940b0c%21459119&authkey=AO_KOdyKggCtccI"
          width="165"
          height="128"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
    <MailChimpSignUp />
    <SocialMediaLogos />
  </div>
</template>

<script>
export default {
  head: {
    title: "Education Space",
  },
};
</script>

<style scoped>
#education-space {
  width: 80%;
  margin: 0 auto;
}

#education-space a {
  padding: 0.5em 1em;
  display: block;
}

#stop-motion-links,
#image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  gap: 1em;
}

#info-image {
  width: 100%;
  max-width: 600px;
}
</style>