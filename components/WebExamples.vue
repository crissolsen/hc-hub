<template>
<div>
    <div id="examples-title">
            <h2>HomeCode Customers and Examples</h2>
    </div>
    <div id="examples-container">
        <div class="example-card">
            <h3>Prince of Tarts Wholesale Ordering Web App</h3>
            <img src="https://res.cloudinary.com/dvwsiufhl/image/upload/h_300,dpr_auto,f_auto,q_auto/v1604571970/homeCode/POT_WebApp_SignIn_bb7iad.jpg" alt="Prince of tarts site example" >
            <p>Prince of Tarts was spending too much time getting orders through WhatsApp and then manually generating invoices and orders in SageOne</p>
            <p>We built their web app from the ground up. It allows their wholesale customers to sign in, view only selected products, view when delivery should happen, generate their invoice and email that invoice to Prince of Tarts and the customer</p>
            <p>In summary: NodeJS web app linked with the SageOne API, deployed on Heroku. </p>
            <NuxtLink :to= "`/contact-form`"><div class="example-button">Cut out unnecessary tasks</div> </NuxtLink>
        </div>
        <div class="example-card">
            <a href="https://princeoftarts.co.za" rel="noreferrer" target="_blank"><h3>Prince of Tarts Homepage</h3></a>
            <img src="https://res.cloudinary.com/dvwsiufhl/image/upload/h_400,dpr_auto,f_auto,q_auto/v1604571970/homeCode/POT_HomePage_v8tuho.jpg" alt="prince of tarts homepage" >
            <p><a href="https://princeoftarts.co.za" rel="noreferrer" target="_blank">Prince of Tarts</a> needed a blazing fast site that showcased their creations and invited customers to contact them</p>
            <p>We built their custom site, made sure their SEO was top notch and their images were well optimised</p>
            <p>In summary: Static site generated with Eleventy and PUG templating engine. Deplyed on Netlify with images hosted on Cloudinary</p>
            <NuxtLink :to= "`/contact-form`"><div class="example-button">Convert more customers</div> </NuxtLink>
        </div>
        <div class="example-card">
            <h3>General</h3>
            <img src="https://res.cloudinary.com/dvwsiufhl/image/upload/h_400,dpr_auto,f_auto,q_auto/homeCode/DandaGroupsite_fhlvum.jpg" alt="financial advisor website example" >
            <p>We've developed other sites for clients such as <a href="https://dandagroup.co.za" rel="noreferrer" target="_blank">D&A Financial Planning</a>, <a href="https://thecommonage.co.za" rel="noreferrer" target="_blank">The Commonage</a>, <a href="https://amberlight.co.za" rel="noreferrer" target="_blank">Amber Light Guest House</a> and <a href="https://sca-olsen.co.za" rel="noreferrer" target="_blank">SCA-Olsen</a>.</p>
            <NuxtLink :to= "`/contact-form`"><div class="example-button">HomeCode can build it</div> </NuxtLink>
        </div>
        <div class="example-card">
            <a href="https://t.criss.co.za" rel="noreferrer" target="_blank"><h3>Today Always</h3></a>
            <img src="https://res.cloudinary.com/dvwsiufhl/image/upload/h_400,dpr_auto,f_auto,q_auto/v1604571970/homeCode/TodayAlways_qctd1i.jpg" alt="today always web app example" >
            <p><a href="https://t.criss.co.za" rel="noreferrer" target="_blank">A simple site</a> that requires login to create a short devotional message. Users can only post or 'like' one past a day.</p>
            <NuxtLink :to= "`/contact-form`"> <div class="example-button">Get a better online presence</div> </NuxtLink>
        </div>
    </div>
</div>
</template>

<style scoped>
    #examples-title {
        text-align: center;
        font-size: 1.4em;
    }
    #examples-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-row-gap: 1em;
        justify-items: center;
    }
    .example-card {
        border: 0.8em solid rgba(0,115,92,0.3);
        margin: 0.2em;
        padding: 1em;
        border-radius: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 100%;
    }
    .example-card img {
        align-self: center;
        height: 50%;
        box-shadow: 0.3em 0.5em 0.5em gray;
    }

    .example-card h3, a {
        text-decoration: none;
        color: rgba(0,115,92,1);
        text-align: center;
    }

    .example-card .example-button {
        background: #f7872c;
        width: 50%;
        margin: 0 auto;
        padding: 1em;
        /* border: 2px solid black; */
        box-shadow: 0.3em 0.3em 0.3em #606462ff;
        border-radius: 1em;
        font-weight: 800;
        font-size: 1em;
        color: black;
    }
</style>