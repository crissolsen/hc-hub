<template>
    <div id="hero-action-container">
        <div id="hero-text">
        <h3>Serving you in ... </h3>
        </div>
        <div id="action-button">
            <a href="/#contact-form">I'll help with that</a>
        </div>
    </div>
</template>

<style scoped>
    #hero-action-container {
        display: grid;
        grid-template-columns: repeat(autofit, minmax(240px, 1fr));
        grid-template-rows: repeat(3, minmax(30px, 2fr));
        justify-items: center;
        grid-template-areas: 
        '. . .'
        '. Button Button'
        '. Text Text'
        ;
    }
    #hero-text {
        grid-area: Text;
    }
    #action-button {
        grid-area: Button;
    }


</style>