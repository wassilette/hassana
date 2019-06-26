<template>
    <div>
        <hero bannerbg="donner" heroTitle="FAIRE UN DON"></hero>

        <main>
            <form action="">
                <div class="columns">
                    <label class="column" for="title">Titre</label>
                    <input class="column input" name="title" type="text"> 
                </div>
                
                <div class="columns">
                    <label class="column" for="cat">Catégorie</label>
                    <div class="field column">
                        <div class="control">
                            <div class="select">
                                <select name="cat">
                                    <option value="">Vêtements et Accessoires</option>
                                    <option value="">Chaussures</option>
                                    <option value="">Bricolage et Construction</option>
                                    <option value="">Automobile et Moto</option>
                                    <option value="">Vaisselle</option>
                                    <option value="">Électroménager et Produits d'entretien</option>
                                    <option value="">Jeux et Jouets</option>
                                    <option value="">Linge de Maison</option>
                                    <option value="">Livres</option>
                                    <option value="">Loisirs et Sports</option>
                                    <option value="">Matériel Scolaire</option>
                                    <option value="">Mobilier et Décoration</option>
                                    <option value="">Multimédia et High-Tech</option>
                                    <option value="">Puériculture</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <img src="/images/photo-input.png" alt="photo input" v-show="!uploaded"><img :src="previewImage"  class="uploading-image" v-show="uploaded" style="display: block;" /> 
                <div class="field">
                    <div class="columns file">
                        <label class="column is-half is-centered file-label">
                            <input class="file-input" type="file" accept="image/jpeg" @change=uploadImage id="file-input">
                            <span class="file-cta">
                                <span class="file-icon">
                                <font-awesome-icon icon="upload" />
                                </span>
                                <span class="file-label">
                                Parcourir...
                                </span>
                            </span>
                        </label>
                    </div>
                </div>

                <div class="columns">
                    <label class="column" for="town">Ville</label>
                    <input class="column input is-primary" name="town" type="text">
                </div>

                <div class="columns">
                    <label class="column" for="state">État</label>
                    <div class="column">
                        <input type="radio" id="huey" name="state" value="huey" checked>
                        <label for="huey">Très bon état</label> <br>
                        <input type="radio" id="huey" name="state" value="huey" checked>
                        <label for="huey">Bon état</label> <br>
                        <input type="radio" id="huey" name="state" value="huey" checked>
                        <label for="huey">Mauvais état</label> <br>
                    </div>
                </div>
                
                <div class="columns">
                    <label class="column" for="desc">Description</label>
                    <div class="column field">
                        <div class="control">
                            <textarea class="textarea" placeholder="Détaillez l'annonce"></textarea>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <label class="column" for="target">Cibles</label>
                    <div class="column">
                        <input type="radio" id="huey" name="target" value="huey" checked>
                        <label for="huey">Grand Public</label> <br>
                        <input type="radio" id="huey" name="target" value="huey" checked>
                        <label for="huey">Associations</label> <br>
                    </div>
                </div>

                <input class="envoyer bouton button is-primary" value="Publier" type="submit">
            </form>
        </main>

        <thefooter></thefooter>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    
    Vue.use(VueAxios, axios)

    export default {
        name:'imageUpload',
        data(){
            return{
               previewImage:null,
               uploaded:false
            }
        },
        methods:{
            uploadImage(e){
                this.uploaded = true;
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log(this.previewImage);
                };
            }
        }
     }
</script>

<style scoped>
    .uploading-image{
        float: left;
        height: 300px;
    }
    main{
        width: 60%;
        margin: 60px auto;
    }
    .select, .control, .field{
        width: 100%;
    }
    .input, select{
        border-color: #406191 !important;
        width: 75%;
        float: right;
    }
    textarea{
        border-color: #406191 !important;
    }
    label{
        font-size: 18px;
        font-family: "Caviar Dreams", sans-serif;
    }
    img{
        display: block;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    .columns{
        margin-bottom: 25px;
    }
    .file {
        margin: 25px auto;
        text-align: center;
        margin-bottom: 45px;
    }
    #file-input{
        background-color: #406191 !important;
        color: white;
    }
    .bouton, .file-label{
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .bouton{
        width: 150px;
        margin-top: 45px;
        transition: all 0.5s ease;
    }
    .envoyer:hover{
        background-color: white !important;
        color: #406191 !important;
        font-weight: bolder;
        border-color: #406191 !important;
    }
</style>