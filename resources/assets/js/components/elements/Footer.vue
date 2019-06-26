<template>
    <footer>
        <div class="footer-container columns">
            <div class="column b-a-s">
                <h4 class="title is-5">BON À SAVOIR</h4>
                <hr>
                <ul>
                    <li><a href="/conditions">Conditions générales d'utilisation</a></li>
                    <li><a href="/comment-ca-marche">Comment ça marche ?</a></li>
                </ul>
            </div>
            <div class="column logo">
                <img src="/images/Logo-Hassana.png" alt="footer logo">
            </div>
            <div class="column s-n">
                <h4 class="title is-5">SUIVEZ-NOUS</h4>
                <hr>
                <ul>
                    <li><a href="https://www.facebook.com/"><img src="/images/facebook.png" alt=""></a></li>
                    <li><a href="https://www.instagram.com/"><img src="/images/instagram.png" alt=""></a></li>
                    <li><a href="https://twitter.com/"><img src="/images/twitter.png" alt=""></a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            © TOUS DROITS RÉSERVÉS 2019
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    footer{
        background-color: #f4f4f4;
        width: 100%;
        position: absolute;
        border: 1px solid transparent;
    }
    .footer-container{
        width: 80%;
        margin: 20px auto;
        padding-top: 20px;
        padding-bottom: 20px;
        position: relative;
        font-size: 16px;
    }
    .b-a-s{
        text-align: left;
    }
    .b-a-s a{
        color: #0A0A0A;
    }
    .b-a-s a:hover{
        color: #ca737c;;
    }
    .s-n{
        text-align: right;
    }
    .s-n hr{
        float: right;
        margin-right: 12%;
    }
    .logo img{
        display: block;
        width: 80px;
        margin-left: auto;
        margin-right: auto;
    }
    .s-n img{
        width: 30px;
        margin-top: 8px;
        margin-left: 25px;
    }
    .s-n ul{
        position: absolute;
        right: 15px;
    }
    .s-n ul li{
        float: left;
        transition: all .2s ease-in-out;
    }
    .s-n ul li:hover{
        transform: scale(1.1);
    }
    .copyright{
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #0a0a0a;
        color: white;
        font-size: 12px;
    }

    hr{
        background-color: #0A0A0A;
        height: 1px;
        width: 30%;
        margin-top: -15px;
    }

    @media screen and (max-width: 640px) {
        footer{
            height: 50vh;
        }
        .footer-container{
            font-size: 14px;
        }
        .logo img {
            display: none;
        }
        .b-a-s{
            text-align: center;
        }
        .s-n{
            text-align: center;
        }
        .s-n ul{
            position: absolute;
            margin-right: 22%;
        }
        .s-n img{
            width: 25px;
        }
        hr{
            margin-left: 30%;
            position: absolute;
            text-align: center;
        }
        h4{
            font-size: 16px !important;
        }
        .copyright{
            padding-top: 7px;
            padding-bottom: 7px;
            font-size: 8px;
        }
    }
</style>