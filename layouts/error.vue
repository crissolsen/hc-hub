<template>
    <div>
        <TheNavBar />
        <div id="error-wrapper">
            <h1 style="color: rgba(0,115,92,1)">Oh no!!!</h1>
            <p>Something has gone wrong...</p>
            {{ error.message }} <br>
            Error Code: {{ error.statusCode }} <br/><br/>

            No need to panic :)
            <NuxtLink :to="`/`" class="home-button">Click here to head back home</NuxtLink>
            <SocialMediaLogos />
        </div>
    </div>
</template>

<script>
export default {
    head(){
       return {
         title: "Error"
       }
    },
    props: {
        error: { 
            type: Object,
        required: true}
    }
}
</script>

<style>
    #error-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    .home-button {
        background: rgba(0,115,92,1);
        width: 50%;
        box-shadow: 0.3em 0.3em 1em gray;
        text-decoration: none;
        color: white;
        padding: 0.5em;
        margin: 1em auto;
    }
</style>