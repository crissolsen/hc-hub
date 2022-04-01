<template>
<div>
    <TheNavBar />
    <div id="education-space">
    <h1>Education Space</h1>
    <div>
        The HomeCode Education Space is located in Sedgefield at the Sedgefield Christian Church Building. Here learners are able to visit and learn with Lego, Coding and Robotics, a breaker space, a stop motion studio and everything in between 😄🤖
    </div>
    <h2>Stop Motion Creations</h2>
        <div>
            Each week learners' stop motion creations will be uploaded and available here. When you click the link it will take you to a OneDrive folder where you can view them and download the relevant video. If the video doesn't have a descriptive name then you can preview them in the browser before downloading.
        </div>
        <!-- <a href="https://1drv.ms/u/s!AgwLlFMSpsmcnIFM8BBazo_k2pqe8w?e=hMz5V6" target="_blank">28 March - 1 April Videos</a> -->
        <div id="stop-motion-links">
        <iframe src="https://onedrive.live.com/embed?cid=9CC9A61253940B0C&resid=9CC9A61253940B0C%21458956&authkey=AIGm2w3BV8AF64M" width="165" height="128" frameborder="0" scrolling="no"></iframe>
        </div>    
    </div>
    <MailChimpSignUp />
    <SocialMediaLogos />
</div>
</template>

<script>
export default {
    head: {
        title: 'Education Space'
    }
}
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

#stop-motion-links {
    display: flex;
    justify-content: center;
    align-items: center
}
</style>