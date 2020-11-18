<template>
    <div id="about-wrapper">
        <h1>Welcome to HomeCode</h1>
        <div id="show-more-button" @click= "showAboutUs=!showAboutUs">About Us</div>
        <div id="about-us-show" v-if= "showAboutUs">
        <h2>What is HomeCode?</h2>
        <p>
            HomeCode is a tech company that focuses on making lives better, in business and education. We develop websites and web apps that are fast, particular to your needs and really great looking.
            <br> <br>
            You might also be interested in our education focus. Christopher Olsen (that's me by the way), is a fully qualified teacher with a BA Journalism, Hons Anthropology, 
            Hons Theology and a Post Graduate Certificate in Education.
        </p>
        <h2>Why choose HomeCode?</h2>
        <p>
            We're not interested in taking on those big scary corporations (even though we help them out sometimes...). We care about helping you and your family. We want to meet. Make a cup of
            coffee or a beetroot smoothie (if that's your thing). With our background in Anthropology, we know that getting to know you is essential to serving your needs. We care about you and your
            family. 
            <br ><br >
            This is especially true if you are in our incredible home town of <a href="https://sedgefield.gohub.town" rel="noreferrer" target="_blank">Sedgefield</a>, or even in the Garden Route.
            <br ><br >
            <blockquote>We know our job isn't to sell you computers, a robotics kit and then duck out. We want to make your life better and tech - in education and web development, is the best
                way we know how.</blockquote>
            <br><br>
            We hope you enjoy exploring the site and if you ever need anything, or just want to say, "Hi", please don't hesitate to contact me directly at <a href="mailto:chris@homecode.co.za" rel="noreferrer"> chris@homecode.co.za</a>.
            <br><br>
            Looking forward to helping you soon!
            <br><br>
            Christopher Olsen
            <br>
            (HomeCode director)
        
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showAboutUs: false
        }
    }
}
</script>

<style scoped>
    #about-wrapper {
        width: 90%;
        margin: 0 auto;
        /* box-shadow: 0.2em 0.4em 1em gray; */
        padding: 1em;
    }
    #show-more-button {
        background: #00735cff;
        padding: 1em;
        border-radius: 10px;
        color: white;
        width: 30%;
        margin: 0 auto;
        text-align: center;
        cursor: pointer;
    }
    #about-wrapper h1 {
        text-align: center;
        color: rgba(0,115,92,1);
        /* border-top: 0.2em solid rgba(0,115,92,1);
        border-bottom: 0.2em solid rgba(0,115,92,1); */
        padding-top: 0.5em;
        margin-bottom: 0.2em;
    }

    #about-wrapper h2 {
        color: rgba(0,115,92,1);
    }
    #about-wrapper p {
        line-height: 1.5em;
    }
    #about-wrapper blockquote {
        background:rgba(0,115,92,0.3);
        padding: 0.5em;
        font-size: 1.2em;
        border-radius: 1em;
    }
</style>