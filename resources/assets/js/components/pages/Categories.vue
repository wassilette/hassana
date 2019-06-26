<template>
    <div>
        <hero bannerbg="categories" heroTitle="CATÉGORIES"></hero>
        <section class="categs">
            <div class="columns">
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-1.png" alt=""></a>
                    <h4 class="title is-6">VÊTEMENTS & ACCESSOIRES</h4>
                </div>
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-2.png" alt=""></a>
                    <h4 class="title is-6">CHAUSSURES</h4>
                </div>
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-3.png" alt=""></a>
                    <h4 class="title is-6">BRICOLAGE & CONSTRUCTION</h4>
                </div>
            </div>

            <div class="columns">
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-4.png" alt=""></a>
                    <h4 class="title is-6">AUTOMOBILE ET MOTO</h4>
                </div>
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-5.png" alt=""></a>
                    <h4 class="title is-6">VAISSELLE</h4>
                </div>
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-6.png" alt=""></a>
                    <h4 class="title is-6">ÉLECTROMÉNAGER & PRODUITS D'ENTRETIEN</h4>
                </div>
            </div>

            <div class="columns">
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-7.png" alt=""></a>
                    <h4 class="title is-6">PLANTES & JARDIN</h4>
                </div>
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-8.png" alt=""></a>
                    <h4 class="title is-6">JEUX & JOUETS</h4>
                </div>
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-9.png" alt=""></a>
                    <h4 class="title is-6">LINGE DE MAISON</h4>
                </div>
            </div>

            <div class="columns">
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-10.png" alt=""></a>
                    <h4 class="title is-6">LIVRES</h4>
                </div>
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-11.png" alt=""></a>
                    <h4 class="title is-6">LOISIRS & SPORTS</h4>
                </div>
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-12.png" alt=""></a>
                    <h4 class="title is-6">MATÉRIEL SCOLAIRE</h4>
                </div>
            </div>
            

            <div class="columns">
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-13.png" alt=""></a>
                    <h4 class="title is-6">MOBILIER & DÉCORATION</h4>
                </div>
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-14.png" alt=""></a>
                    <h4 class="title is-6">MULTIMÉDIA & HIGH-TECH</h4>
                </div>
                <div class="column is-one-third">
                    <a href="/categorie"><img src="/images/cat-15.png" alt=""></a>
                    <h4 class="title is-6">PUÉRICULTURE</h4>
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

<style scoped>
    .categs{
        margin: 80px auto;
        height: 200vh;
        width: 80%;
    }
    .columns{
        position: relative;
        height: 250px;
    }
    .column{
        background-color: #f2f6f9;
        width: 25%;
        height: 200px;
        margin: 55px auto 45px auto;
        font-family: "Caviar Dreams", sans-serif;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        transition: all .2s ease-in-out;
    }
    .column:hover{
        transform: scale(1.1);
    }
    .column .title{
        text-align: center;
    }
    .column img{
        margin-top: 18px;
    }

</style>