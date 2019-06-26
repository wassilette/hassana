<template>
    <section :class="[{homepage : 'is-fullheight'}, bannerbg]" class="hero">
	<!-- .hero-head -->
	<div class="hero-head is-centered">
        <navbar></navbar>
	</div>
    <div class="hero-body animated fadeInUp delay-0.5s">
        <div class="container">
            <h1 :class="{ 'main-title': homepage }" class="title is-1">
                {{heroTitle}}
            </h1>
            <h2 v-if="homepage" class="subtitle is-hidden-mobile">
                We can not help everyone but... <br>
                Everyone can help someone.
            </h2>
            <a v-if="homepage" href="/faire-un-don" class="button is-rounded is-primary is-large">Faire un Don <img src="/images/heart-shape-silhouette.png" alt="heart"> </a>
        </div>
    </div>
	<!-- /.hero-head -->

	</section>
</template>

<script>
    import Hero from './Hero.vue';

    export default {
        props:{
            bannerbg : String,
            heroTitle :  String,
            homepage: { 
                type: Boolean, 
                default: false
            },
            darkbg: { 
                type: Boolean, 
                default: false
            }
        },
        components: {
            Hero
        },
        methods: {
            enterEl(el, done) {
                //entrance animation
                done();
            },
            leaveEl(el, done) {
                //exit animation
                done();
            },
        }
    }
</script>

<style scoped>
    .home {
        background: black url(/images/marivi-pazos-229894-unsplash.jpg) center / cover;
        height: 100vh;
    }
    .about {
        background: black url(/images/a-propos-02.jpg) center / cover;
        height: 70vh;
    }
    .categories {
        background: black url(/images/Categories-03.jpg) center / cover;
        height: 70vh;
    }
    .categorie {
        background: black url(/images/clothes-line-clothes-pegs-clothespins-366.jpg) center / cover;
        height: 70vh;
    }
    .comment{
        background: black url(/images/john-schnobrich-520023-unsplash.jpg) bottom right / cover;
        height: 70vh;
    }
    .donner{
        background: black url(/images/hold-clothes.jpg) center / cover;
        height: 70vh;
    }
    .favoris{
        background: black url(/images/love-heart-romantic-gift.jpg) center / cover;
        height: 70vh;
    }
    .connexion{
        background: black url(/images/connexion-03.jpg) top / cover;
        height: 70vh;
    }
    .conditions{
        background: black url(/images/apartment-architecture-building-973226.jpg) bottom / cover;
        height: 70vh;  
    }
    .profil{
        background: black url(/images/Profil-Donneur-02.jpg) center / cover;
        height: 70vh; 
    }
    .white{
        color: white !important;
    }
    .hero-head{
        width: 70%;
        margin: 50px auto;
    }
    .hero-body{
        text-align: center;
    }
    .hero-body .container{
        position: relative;
        bottom: 60px;
    }
    .subtitle{
        padding-top: 25px;
        text-transform: capitalize;
        letter-spacing: 3px;
    }
    .main-title{
        font-family: "Purple Pen";
        font-size: 75px;
    }
    .button{
        margin-top: 50px;
        background-color: #CD737E;
        transition: all 0.5s ease;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.6);
    }
    .button img{
        width: 20px;
        margin-top: 2px;
        margin-left: 10px;
        transition: all .2s ease-in-out;
    }
    .button:hover{
        background-color: #CD737E;
        transform: scale(1.1);
    }

    @media screen and (max-width: 640px) {
        .title {
            font-size: 30px;
        }
        .hero-body{
            margin-top: -40px;
        }
        .button{
            width: 50%;
            height: 25%;
            font-size: 16px;
        }
        .hero{
            height: 60vh;
        }
    }
</style>