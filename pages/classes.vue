<template>
<div>
    <TheNavBar />

<main>
    <button @click="getThatData()">Fetch data</button>
    <h1>Join a Scratch Class!</h1>
    <div>Remember that you must not use your real name or anything that would help to know who you are in real life. Protect your identity!</div>
<br />
    <h2>
        Sedgefield Academy of Excellence join link: <a href="http://scratch.mit.edu/signup/6yj4n2h5k">Join Class</a>
    </h2>
<br />
<br />
    <h2>
        Friday Coding and Robotics Clubs: <a href="http://scratch.mit.edu/signup/t2jjtcfkr">Join Class</a>
    </h2>
    {{ courses}}
</main>
</div>
</template>

<script>
export default {
    data() {
        return {
        courses : []
        }
    },
    methods: {
        async getThatData() {
            // const courses = await this.$axios.get("http://localhost:8888/.netlify/functions/fetch-courses?classes=learners")
            const courses = await this.$axios.get("https://homecode.co.za/.netlify/functions/fetch-courses?classes=view")

            .then(res => this.courses = res.data)
            .catch(e => console.error(e))
        }
    },
}
</script>

<style scoped>
main {
    max-width: 600px;
    margin: 0 auto;
}
</style>