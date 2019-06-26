<template>
    <div>
        <hero bannerbg="connexion" heroTitle="CONNEXION" darkbg></hero>
        
        <div class="content columns">
            <img class="column is-half" src="/images/login.png" alt="a smartphone">
            <div class="theform column is-half">
                <div class="choice columns">
                    <button class="button column is-half">SE CONNECTER</button>
                    <button class="button column is-half">S'INSCRIRE</button>
                </div>

                <form class="formulaire" action="">
                    <input class="email" type="email" placeholder="E-mail"> <br>
                    <input class="password" type="password" placeholder="Mot de passe"> <br>

                    <input class="checkbox" type="checkbox"><label for="">Se souvenir de moi</label> <br>
                    <a href="#">Mot de passe perdu ?</a> <br>
                    <div class="control">
                        <button class="valider button is-primary">VALIDER</button>
                    </div>
                </form>

                <form class="social-media" action="">
                    <label>OU PLUS FACILEMENT AVEC</label> <br>
                    <div class="sm-links columns">
                        <a href="#" class="column button is-half fb">Facebook</a>
                        <a href="#" class="column button is-half google">Google +</a>
                    </div>
                </form>
            </div>
        </div>
        <thefooter></thefooter>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .content{
        width: 80%;
        margin: 60px auto;
        height: 100vh;
    }
    .content img{
        margin-right: 25px;
    }
    .theform{
        height: 96%;
        margin-top: 10px;
        border: 1px solid #b3d4c8;
    }
    .social-media{
        margin-top: 50px;
    }
    .social-media label{
        width: 270px;
        display: block;
        text-align: center;
        margin: 25px auto;
        font-size: 21px;
    }

    .choice{
        margin-top: 15px;
    }

    .choice, .sm-links{
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-around;
    }
    .choice .button, .sm-links .button{
        margin: 25px auto;
        height: 48px;
        display: block;
        width: 40%;
        transition: border 0.3s ease;
    }
    .choice .button:hover{
        border: 2px solid #00d1b2;
    }
    .fb{
        background-color: #3b5998;
        color: white;
    }
    .google{
       background-color:  #d62d20;
        color: white; 
    }
    .sm-links .button{
        margin-top: 0;
    }
    .formulaire{
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
    .formulaire label{
        margin-left: 20px; 
    }
    .formulaire a{
        display: block;
        margin-top: 25px;
    }
    .formulaire a, .formulaire .checkbox, .formulaire .valider{
        margin-left: 25px;
    }
    .email, .password{
        border: none;
        border-bottom: 1px solid #0a0a0a;
        display: block;
        width: 90%;
        margin: 20px auto;
    }
    .valider{
        transition: all 0.5s ease;
    }
    .valider:hover{
        background-color: white;
        color: #00d1b2;
        border-color: #00d1b2;
    }
</style>