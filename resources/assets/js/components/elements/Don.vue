<template>
<div>
<div class="columns is-multiline">
        <div v-for="don in dons" class="annonce-don column is-one-quarter-desktop is-half" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
            <div class="annonce-container">
                <figure class="don image">
                    <img :src="don.img" alt="photo du don">
                </figure>
                <div class="first-line">
                    <figure class="donneur">
                        <img :src="don.avatar"></img>
                    </figure>
                    <a href="/description"><h3 class="title is-6">{{don.title}}</h3></a>
                    <img v-if="don.heart" class="heart" src="/images/heart.svg" alt="favourite icon" @click="don.heart = !don.heart">
                    <img v-if="!don.heart" class="heart" src="/images/red-heart.svg" alt="favourite icon" @click="don.heart = !don.heart">
                </div>
                
                <!--<div class="desc-don">{{description}}</div>-->
                <div class="town">{{don.town}}</div>
            </div>
        </div>
    </div>
</div>
      
</template>

<script>
    export default {
        props: ['dons']
    }
</script>

<style scoped>
    .columns{
        margin-top: 60px;
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
    }
    .annonce-don{
        margin-top: 35px;
        width: 23%;
    }
    .annonce-container{
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        transition: all .3s ease-in-out;
    }
    .annonce-container:hover{
        transform: scale(1.05);
    }
    .don img{
        width: 100%;
        height: 280px;
        object-fit: cover;
    }
    h3{
        font-family: "Caviar Dreams", sans-serif;
        margin-left: 15px;
    }
    .heart:hover, .donneur, .title{
        cursor: pointer;
    }
    .donneur{
        margin-top: 20px;
        margin-bottom: 10px;
        width: 55px;
        height: 55px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
    }
    .donneur img{  /*this took me foreeeever (making the avatar circle)*/
        display: inline-block;
        margin: 0 auto; 
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
    .first-line{
        display: flex;
        justify-content: space-between;
    }
    .first-line .heart{
        margin-top: 10px;
    }
    .first-line img{
        width: 30px;
    }
    .first-line h3{
        margin-top: 40px;
    }
    .town{
        margin-left: 78px;
    }

    @media screen and (max-width: 640px) {
        .don img{
            height: 170px;
        }
        .first-line h3{
            font-size: 18px;
        }
    }

</style>