<template>
    <section>
        <h2 class="title is-3" data-aos="fade-up" data-aos-duration="1000">Présentation</h2>
        <div class="about columns" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
             <div class="column video is-half">
                 <video controls width="250">
                    <source src="/images/hassana-presentation.mp4"
                            type="video/mp4">

                    Sorry, your browser doesn't support embedded videos.
                </video>
                <!--<iframe src="/images/hassana-presentation.mp4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope" allowfullscreen></iframe>-->
             </div>
            <div class="column presentation is-half">
                <p>Hassana est un site web qui vous permet d'effectuer des dons en toute simplicité et efficacité. <br>
                Nous nous concentrons sur les dons de vêtements et d'objet en bon état. <br>
                Sur hassana.com 
                
                -96+800
                +vous pouvez tout donner ou tout récupérer... Le tout est gratuit !</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .about{
        height: 70vh;
        width: 80%;
        margin: 60px auto;
    }
    .about .video video{
        width: 90%;
        height: 80%;
    }
    .about .presentation{
        text-align: left;
        margin-top: 9%;
        padding-left: 50px;
        font-size: 18px;
    }
    @media screen and (max-width: 640px) {
        .about .presentation{
            width: 90%;
           text-align: center;
           padding-left: 0;
        }
    }
</style>