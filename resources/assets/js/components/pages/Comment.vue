<template>
    <div>
        <hero bannerbg="comment" heroTitle="COMMENT ÇA MARCHE"></hero>
        <div class="container">
            <section class="rechercher">
                <h2 class="title is-3" data-aos="fade-up" data-aos-duration="1000">JE RECHERCHE UN DON ?</h2>
                <div class="columns" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                    <div class="column">
                        <img src="/images/recherche.png" alt="recherche">
                        <p>Je saisis ma recherche</p>
                    </div>
                    <div class="column">
                        <img src="/images/annonce.png" alt="repérage">
                        <p>Je repère une annonce qui m'intéresse</p>
                    </div>
                    <div class="column">
                        <img src="/images/contacter.png" alt="contact">
                        <p>Je contacte le donneur par téléphone ou par mail</p>
                    </div>
                </div>
            </section>

            <section class="faire">
                <h2 class="title is-3" data-aos="fade-up" data-aos-duration="1000">JE SOUHAITE FAIRE UN DON ?</h2>
                <div class="columns" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                    <div class="column">
                        <img src="/images/depos-don.png" alt="recherche">
                        <p>Je remplis le formulaire de don</p>
                    </div>
                    <div class="column">
                        <img src="/images/validation.png" alt="repérage">
                        <p>Mon annonce est validée et mise en ligne</p>
                    </div>
                    <div class="column">
                        <img src="/images/contacter.png" alt="contact">
                        <p>Les personnes intéressées me contactent par téléphone ou par mail</p>
                    </div>
                </div>
            </section>

            <section class="text" data-aos="zoom-in" data-aos-duration="1000">
                <p>Et oui c'est aussi simple que ça ! <br> Et si vous avez des questions n'hésitez pas à <a href="/a-propos#contact">contacter</a> <br>l'équipe de Hassana.</p>
            </section>
        </div>  

        <section class="cta" data-aos="fade-in" data-aos-duration="1000">
            <div class="columns">
                <a href="/faire-un-don" class="column button is-primary">Faire un Don</a>              
                <a href="/categories" class="column button is-primary">Rechercher un Don</a>      
            </div>
        </section>

        <thefooter></thefooter>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .container{
        width: 80%;
        margin: 60px auto;
    }
    h2{
        width: 50%;
        text-align: center;
        font-family: "Caviar Dreams", sans-serif;
        margin: 90px auto;
        font-weight: lighter;
        text-transform: uppercase;
    }
    .column{
        margin-top: 55px;
        margin-bottom: 45px;
    }
    .column img{
        width: 30%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .column p{
        font-family: Muli, sans-serif;
        font-size: 18px;
        text-align: center;
        width: 80%;
        margin: 25px auto;
    }
    .text p{
        font-family: Muli, sans-serif;
        font-size: 21px;
        text-align: center;
        width: 50%;
        margin: 80px auto;
    }
    .text a{
        color: #cd737e;
        text-decoration: none;
        font-style: italic;
    }
    .text a:hover{
        text-decoration: underline;
    }
    .cta{
        background-color: #f2f6f9;
        width: 100%;
        margin-top: 150px;
    }
    .cta .columns{
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
    }
    .button{
        max-width: 200px;
        height: 50px;
        transition: all 0.5s ease;
    }
    .button:hover{
        background-color: white !important;
        color: #406191 !important;
        border: 1px solid #406191 !important;
    }
</style>