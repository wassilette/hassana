<template>
    <div>
        <navbar style="margin-top: 50px"></navbar>
        <div class="fullpage">
            <h1 class="title is-1">ERREUR 404</h1>
            <a href="/" class="button is-primary is-large">Page d'Accueil</a>
        </div>
        <thefooter style="margin-top: -80px"></thefooter>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .fullpage{
        margin-top: 25px;
        height: 100vh;
        background: url(/images/182e2ed6ecee1320f135a772a5d6eef0.png) center / cover;
    }
    h1{
        color: #815d3f;
        text-align: center;
        font-weight: lighter;
        margin-top: 65px;
        margin-bottom: 65px;
    }
    .button{
        width: 13%;
        display: block;
        padding: 5px;
        margin: 25px auto;
        margin-top: 45px;
        border-radius: 5px;
        font-size: 18px !important;
        text-transform: uppercase;
    }
</style>