<template>
    <div>
        <hero bannerbg="about" heroTitle="À PROPOS"></hero>

        <section class="presentation">
            <h2 class="title is-3" data-aos="fade-up" data-aos-duration="1000">Qui Sommes-Nous ?</h2>
            <div class="presentation-container columns" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <div class="column image is-half">
                    <img src="/images/about-1.png" alt="girls working">
                </div>
                <div class="column text is-half">
                    <p>Hassana est un site web qui vous permet d'effectuer des dons en toute simplicité et efficacité. <br>
                    Nous nous concentrons sur les dons de vêtements et d'objet en bon état. <br>
                    Sur hassana.com vous pouvez tout donner ou tout récupérer... Le tout est gratuit !</p>
                </div>
            </div>
        </section>

        <section class="goals">
            <div class="goals-container">
                <h2 class="title is-3" data-aos="fade-up" data-aos-duration="1000">Nos Objectifs</h2>
                <div class="goals-container">
                    <div class="columns" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                        <img class="column is-half" src="images/about-2.png" alt="a girl thinking">
                        <div class="column is-half">
                            <div class="columns texte1">
                                <span class="column is-one-quarter">01</span>
                                <p class="column">Digitaliser un concept charitable et ainsi encourager et faciliter le don pour tout le monde.</p>
                            </div>
                        </div> 
                    </div>
                    <div class="columns" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                        <div class="column is-half">
                            <div class="columns texte2">
                                <span class="column is-one-quarter">02</span>
                                <p class="column">Faciliter aux associations la recherche de dons.</p>
                            </div>
                        </div>
                        <img class="column is-half" src="images/about-3.png" alt="">
                    </div>
                    <div class="columns" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                        <img class="column is-half" src="images/about-4.png" alt="">
                        <div class="column is-half">
                            <div class="columns texte3">
                                <span class="column is-one-quarter">03</span>
                                <p class="column">Donner une seconde vie à nos vêtements et objets.</p>
                            </div>
                        </div>
                    </div>
                    <div class="columns" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                        <div class="column is-half">
                            <div class="columns texte4">
                                <span class="column is-one-quarter">04</span>
                                <p class="column">Réduire les déchets, encourager le recyclage.</p>
                            </div>
                        </div>
                        <img class="column is-half" src="images/about-5.png" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section class="team">
            <h2 class="title is-3" data-aos="fade-up" data-aos-duration="1000">Notre Équipe</h2>
            <div class="columns">
                <div class="column is-one-third" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
                    <figure class="avatar">
                        <img src="images/wassila.png" alt="wassila">
                    </figure>
                    <h5 class="title is-5">Wassila</h5>
                </div>
                <div class="column is-one-third" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
                    <figure class="avatar">
                        <img src="/images/sultana.jpg" alt="sultana">
                    </figure>
                    <h5 class="title is-5">Sultana</h5>
                </div>               
                <div class="column is-one-third" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
                    <figure class="avatar">
                        <img src="/images/maryem_1.jpg" alt="maryem" style="position:relative; bottom: 30px;">
                    </figure>
                    <h5 class="title is-5">Maryem</h5>
                </div>
            </div>
        </section>

        <section id="contact" class="contact">

            <h2 class="title is-3" data-aos="fade-up" data-aos-duration="1000">Contactez-Nous</h2>
            <div class="columns" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <img class="column" src="/images/about-6.png" alt="phone illustration">
                <div class="column">
                    <form action="">
                        <input type="text" placeholder=" Nom"> <br>
                        <input type="email" placeholder=" Email"> <br>
                        <textarea cols="30" rows="10" placeholder=" Message"></textarea> <br>
                        <input class="envoyer button is-primary" type="submit">
                    </form>
                </div>
            </div>
        </section>

        <thefooter></thefooter>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .presentation, .team, .contact{
        width: 80%;
        margin: 60px auto;
        height: 40vh;
    }
    .goals{
        width: 100%;
        height: 170vh;
        background-color: #f2f6f9; 
        margin-bottom: 155px;
    }
    .goals-container{
        width: 80%;
        margin: 60px auto;
        padding-top: 20px;
        height: 130vh;
    }
    .contact{
        height: 80vh;
        margin-top: 60px;
    }
    h2{
        width: 50%;
        text-align: center;
        font-family: "Caviar Dreams", sans-serif;
        margin: 75px auto;
        text-transform: uppercase;
    }
    .presentation-container{
        margin-top: 45px;
    }
    .presentation-container img{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    .goals-container{
        margin-top: 70px;
        font-size: 18px;
    }
    .goals-container .column{
        height: 170px;
        margin-bottom: 30px;
    }
    .goals-container .columns img{
        object-fit: contain;
    }
    .goals-container .column span{
        font-size: 83px;
        text-align: right;
        font-family: "Caviar Dreams", sans-serif;
    }
    .texte1 p{
        margin-top: 23px;
    }
    .texte2 p, .texte4 p{
        margin-top: 45px;
    }
    .texte3 p{
        margin-top: 48px;
    }
    .team{
        height: 60vh;
        text-align: center;
        margin-top: -30px;
    }
    .avatar{
        width: 200px;
        height: 200px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid #b3d4c8;
        margin: 25px auto;
    }
    .avatar img{
        display: inline-block;
        margin: 0 auto; 
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
    form{
        margin-left: 50px;
    }
    form input{
        height: 40px;
    }
    form input, textarea{
        width: 100%;
        background-color: #f2f6f9;  
        border: none;
        margin-bottom: 12px;
    }
    .envoyer{
        width: 40%;
        transition: all 0.5s ease;
    }
    .envoyer:hover{
        background-color: white !important;
        color: #406191 !important;
        border: 1px solid #406191 !important;
    }
    .contact .columns{
        margin-top: 40px;
    }
    .contact .columns img{
        max-width: 280px;
        margin-top: 25px;
        margin-right: 25px;
        object-fit: contain;
    }
</style>