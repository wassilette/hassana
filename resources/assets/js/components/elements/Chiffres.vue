<template>
    <section class="numbers">
        <h2 class="title is-3" data-aos="fade-up" data-aos-duration="1000">Quelques Chiffres</h2>
        <div class="numbers-content columns" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <div class="column">
                <img src="/images/icone-nmbre-1.png" alt="icone coeur"> 
                15 000 Donnations</div>
            <div class="column">
                <img src="/images/icone-nmbre-2.png" alt="icone people"> 
                150 Associations</div>
            <div class="column">
                <img src="/images/icone-nmbre-3.png" alt="icone smile"> 
                100 000 Membres</div>
        </div>
    </section>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .numbers{
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),  url(/images/annie-spratt-54462-unsplash.jpg) center / cover;
        height: 48vh;
    }
    h2{
        font-family: "Caviar Dreams", sans-serif;
        color: white;
        margin-top: 0;
    }
    .numbers-content{
        width: 80%;
        margin: 70px auto;
        position: relative;
        bottom: 50px;
        color: white;
        font-size: 18px;
    }
    .numbers-content .column{
        text-align: center;
    }
    .numbers-content img{
        display: block;
        width: 70px;
        margin: 20px auto;
    }
    @media screen and (max-width: 640px) {
        .numbers{
            height: 80vh;
        }
        .numbers-content img{
            margin-top: 5px;
           width: 50px;
        }
        .numbers-content{
            font-size: 14px;
        }
    }
</style>