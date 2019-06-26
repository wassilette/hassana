<template>
    <div>
        <hero bannerbg="categorie" :heroTitle="title"></hero>

        <div class="field select-field"> <!--sélection de la ville-->
            <div class="control">
                <div class="select">
                    <select name="town">
                        <option>Agadir</option>
                        <option>Marrakesh</option>
                        <option>Taroudant</option>
                    </select>
                </div>
            </div>
        </div>

        <don :dons="dons"></don>

        <nav class="pagination" role="navigation" aria-label="pagination">
            <ul class="pagination-list">
                <li>
                <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
                </li>
                <li>
                <a class="pagination-link" aria-label="Goto page 2">2</a>
                </li>
                <li>
                <a class="pagination-link" aria-label="Goto page 3">3</a>
                </li>
                <li>
                <span class="pagination-ellipsis">&hellip;</span>
                </li>
            </ul>
        </nav>

        <footer>
            <thefooter></thefooter>
        </footer>
    </div>
</template>

<script>
    import Don from 'C:/wamp64/www/hassana/resources/assets/js/components/elements/Don.vue';
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
                    {img : "/images/art-background-beach-1035733.jpg", avatar :  '/images/pexels-photo-736716.jpeg', title : 'Lunettes de Soleil', town : 'Agadir', heart: true},
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

<style lang="scss" scoped>
    select{
        background-color: #CD737E;
        color: white;
    }
    .select-field{
        margin: 50px 100px;
    }
    footer{
        margin-top: 50px;
    }
    .pagination{
        margin-top: 100px;
    }
</style>