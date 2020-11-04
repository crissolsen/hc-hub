<template>
    <main>
        <div id="web-top">
        <h1>Web Development</h1>
        <div id="divider"></div>
        </div>
        <div id="info-wrapper">
            <div class="info-section">
                <div class="info-section-text"><h2>Your site should be fast</h2></div>
               <WebDevArrow />
            </div>
            <div class="info-section">
                <WebDevLight />
                <div class="info-section-text"><h2>Your site should have a purpose</h2></div>
            </div>
            <div class="info-section">
                <div class="info-section-text"><h2>Your site should be made or updated by HomeCode</h2></div>
                <Logo />
            </div>
        </div>
        <div id="divider"></div>
        <WebExamples />
    </main>
</template>

<style scoped>
    #web-top h1 {
        font-size: 3em;
        text-align: center;
    }
    #divider {
        height: 1em;
        background: rgba(0,115,92,1);
        margin-bottom: 2em;
        border-radius: 1em;
    }
    #info-wrapper {
        height: 100%;
    }
    .info-section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30%;
        margin-bottom: 1em;
        box-shadow: 2px 0.5em 0.5em rgba(0,115,92,1);
        border-bottom-right-radius: 1em;
        border-bottom-left-radius: 1em;
    }
    .info-section h2 {
        font-size: 1.6em;
    }
    .info-section-text {
        width: 50%;
        padding: 1em;
    }
    .info-section:nth-child(1) {
        padding-bottom: 2em;
        text-align: right;
    }
    .info-section:nth-child(3) {
        text-align: right;
    }

</style>