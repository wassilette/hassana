<template>
    <div>
        <div class="top">
            <navbar></navbar>
        </div>

        <h2 class="title is-4" data-aos="fade-up" data-aos-duration="1000">Cartable Scolaire</h2>

        <carousel class="carousel" :perPage="1">
            <slide class="slide">
                <img :src="items[0]" alt="an image">
            </slide>
            <slide class="slide">
                <img :src="items[1]" alt="an image">
            </slide>
            <slide class="slide">
                <img :src="items[2]" alt="an image">
            </slide>
        </carousel>

        <div class="desc-container">
            <div class="inner-description">
                <div class="title">
                    <h5 class="title is-5">Cartable Scolaire</h5>
                </div>
                <div class="description">
                    Bonjour, <br>
                    J'aimerai donner ce cartable que j'ai acheté l'année dernière, il est neuf et de très bonne qualité. Je vise les personnes qui en ont vraiment besoin, merci :).
                </div>
            </div>
        </div>

        <!--<div class="donneur-container">
            <div class="donneur">
                 <div class="columns">
                     <figure class="column donneur-img">
                        <img src="/images/pexels-photo-769772.jpeg"></img>
                     </figure>
                    <h4 class="title is-6 column">Simox Husa</h4>
                    <div class="column green">
                        <img class="smiley" src="/images/smile-copie.png" alt="sad">
                        85
                    </div>
                    <div class="column red">
                        <img class="smiley" src="/images/sad-copie.png" alt="smile">
                        2
                    </div>
                 </div>
            </div>
            <div class="number">
                <p>N° tel +212 678 92 27 00</p>
            </div>
        </div>-->

        <thefooter></thefooter>
    </div>
</template>

<script>
    import Navbar from '../elements/Navbar.vue';
    export default {
         components: {
            Navbar
        },
          data() {
              return{
                  items: [
                  "/images/71ad49uQSAL._SL1462_.jpg",
                  "/images/rentree-scolaire-sac-a-dos-avec-roulettes-cartable.jpg",
                  "/images/613FYPEWLQL._SY355_.jpg"
                ]
              }
        }
    }
</script>

<style lang="scss" scoped>
    .top{
        margin-top: 50px;
    }
    .title{
        text-align: center;
        margin-top: 45px;
        margin-bottom: 45px;
    }
    .carousel, .desc-container{
        width: 25%;
        margin-top: 25px;
        margin-left: auto;
        margin-right: auto;
    }
    img{
        width: 100%;
        position: relative;
    }
    .desc-container{
        width: 40%;
        margin-top: 80px;
        background-color: #f4f4f4; 
        padding-top: 10px;
        padding-bottom: 25px;
        margin-bottom: 50px;
    }
    .desc-container .title{
        text-align: left;
        margin-left: 30px;
    }
    .inner-description{
        width: 80%;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
    }
    .smiley{
        width: 30px;
    }
    .donneur-img{
        margin-top: 20px;
        margin-bottom: 10px;
        width: 55px;
        height: 55px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
    }
    .donneur-img img{  /*this took me foreeeever (making the avatar circle)*/
        display: inline-block;
        margin: 0 auto; 
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
</style>