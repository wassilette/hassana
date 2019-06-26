<template>
    <div>
        <h2 class="title is-3" data-aos="fade-up" data-aos-duration="1000">Nos Partenaires</h2>
        <div class="is-flex-mobile">
            <img class="arrow is-hidden-desktop is-hidden-tablet" src="/images/left-arrow.png" alt="arrow">
            <div class="partners columns is-mobile" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                <div class="logo-container column">
                    <img src="/images/partner1.png" alt="a partner logo">
                </div>
                <div class="logo-container logo-2 column">
                    <img src="/images/partner2.png" alt="a partner logo">
                </div>
                <div class="logo-container logo-3 column is-hidden-mobile">
                    <img src="/images/partner3.png" alt="a partner logo">
                </div>
            </div>
            <img class="arrow is-hidden-desktop is-hidden-tablet" src="/images/right-arrow.png" alt="arrow">
        </div>
        
        <a href="#top"><img class="top-arrow" src="/images/top-arrow.png" alt="arrow"></a>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .partners{
        height: 40vh;
        width: 80%;
        margin: 60px auto;
    }
    .logo-container img{
        width: 170px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        object-fit: contain;
    }
    .logo-2, .logo-3{
        margin-top: 25px;
    }
    .arrow{
        height: 50px;
        margin: 50px 20px;
    }
    .top-arrow{
        width: 40px;
        float: right;
        margin-right: 100px;
        position: relative;
        bottom: 75px;
        transition: all .2s ease-in-out;
    }
    .top-arrow:hover{
        transform: scale(1.1);
    }

    @media screen and (max-width: 640px) {
        .logo-container img{
            width: 100px;
        }
        .partners{
            margin-top: -20px;
            height: 13vh;
        }
        .arrow{
            height: 15px;
            margin: 25px 20px;
        }
        .top-arrow{
            max-width: 20px;
            bottom: 40px;
            left: 25px;
        }
    }
</style>