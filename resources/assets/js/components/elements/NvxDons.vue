<template>
    <section>
        <h2 class="title is-3" data-aos="fade-up" data-aos-duration="1000">Dons Récents</h2>
        <don :dons='dons'></don>
    </section>
</template>

<script>
    import Don from './Don.vue';
    export default {
        data() {
            return {
                dons: [
                    {img : "/images/alexandra-gorn-260989-unsplash.jpg", avatar :  '/images/pexels-photo-762020.jpeg', title : 'Vêtements', town : 'Agadir', heart: true},
                    {img : "/images/montre.png", avatar :  '/images/pexels-photo-736716.jpeg', title : 'Montre', town : 'Agadir', heart: true},
                    {img : "/images/shoes.png", avatar :  '/images/pexels-photo-769772.jpeg', title : 'Chaussures', town : 'Agadir', heart: true},
                    {img : "/images/cafe.png", avatar :  '/images/pexels-photo-795970.jpeg', title : 'Machine à Café', town : 'Agadir', heart: true},
                    {img : "/images/camera.png", avatar :  '/images/pexels-photo-795970.jpeg', title : 'Caméra', town : 'Agadir', heart: true},
                    {img : "/images/pain.png", avatar :  '/images/pexels-photo-1011509.jpeg', title : 'Machine à Pain', town : 'Agadir', heart: true},
                    {img : "/images/613FYPEWLQL._SY355_.jpg", avatar :  '/images/pexels-photo-762020.jpeg', title : 'Cartable Scolaire', town : 'Agadir', heart: true},
                    {img : "/images/art-background-beach-1035733.jpg", avatar :  '/images/pexels-photo-736716.jpeg', title : 'Lunettes de Soleil', town : 'Agadir', heart: true}                    
                ]
            }
        },
        components: {
            Don
        }
    }
</script>

<style scoped>
    section{
        height: 180vh;
        background-color: #f2f6f9;
        margin: 60px auto;
        margin-bottom: 0;
        overflow-y: hidden;
    }
    
    @media screen and (max-width: 640px) {
        section{
            height: 250vh;
        }
    }
</style>