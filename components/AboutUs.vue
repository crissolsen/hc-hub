<template>
    <div id="about-wrapper">
        <h1 style="margin-bottom: 0.3em" >Welcome to HomeCode</h1>
        <!-- <div id="show-more-button" @click= "showAboutUs=!showAboutUs">About Us</div> -->
        <div id="about-us-show" v-if= "showAboutUs">
        <h2>What is HomeCode?</h2>
        <p>
            HomeCode is a coding and robotics focused education company. 
            <br> <br>
            Christopher Olsen (that's me by the way), is a fully qualified teacher with a BA Journalism, Hons Anthropology, 
            Hons Theology and a Post Graduate Certificate in Education with about 10 years worth of experience in schools and teaching.
        </p>
        <h2>Why choose Coding and Robotics</h2>
        <p>
            The goal of learning is problem solving. Whether it be a problem of how to express feelings or how to land a rover on Mars, there are ways to develop thinking skills to solve any possible problem.
            In other words, learning is about learning how to learn. There are many ways to do this, but the best tool I have encountered for making thinking visible, collaboration, problem solving and having fun while learning
            is with coding and robotics. 
        </p>
        <p>
            If you're in the Garden Route area and want in person lessons, we have courses monthly and weekly classes. Be sure to reach out to find out when and where.
            <br><br>
            Prefer an online format? Take a look at the online coding courses which you can do at your pace (and remember you can reach out to me for help anytime).
            <br><br>
            Or if you're a parent or teacher who is looking for lesson plans, you can tap here.
        </p>
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
            showAboutUs: true
        }
    }
}
</script>

<style scoped>
    #about-wrapper {
        width: 50%;
        min-width: 300px;
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