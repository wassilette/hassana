<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="image is-64x64" href="/">
            <img src="/images/Logo-Hassana.png" alt="logo">
            </a>
        </div>
        <div class="control search is-hidden-mobile">
            <a href="/connexion"><img src="/images/user.png" alt="user icon"></a>
            <img @click="loupe = !loupe" src="/images/Loupe.png" alt="loupe">
            <transition name="fade">
                <input v-show="loupe" class="input searchbar" type="search">
            </transition>
        </div>
        <div class="navbar-menu is-hidden-mobile">
            <a class="navbar-item" href="/">ACCUEIL</a>
            <a class="navbar-item" href="/a-propos">À PROPOS</a>
            <a class="navbar-item" href="/categories">CATÉGORIES</a>
            <a class="navbar-item" href="/faire-un-don">DONNER</a>
        </div>
    </nav>
</template>

<script>
    export default {
        props:{
            loupe : { 
                type: Boolean, 
                default: false
            },
            darkbg : { 
                type: Boolean, 
                default: false
            }
        }
    }
</script>

<style>
    nav{
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        bottom: 25px; 
        background: none;
    }

    .navbar-brand{
        width: 50%;
        height: 100px;
        margin: auto;
        margin-bottom: 8px;
    }

    .navbar-brand a {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    .navbar-menu{
        width: 60%;
        display: flex;
        font-family: 'Caviar Dreams', sans-serif;
        justify-content: space-around;
        margin-left: auto;
        margin-right: auto;
    }

    .navbar-item:hover{
        color: #ca737c !important;
        background: none !important;
        font-weight: bolder !important;
        margin-left: -3px !important;
    }

    .darkbg{
        color: white !important;
    }

    .search{
        position: relative;
        left: 75px;
        bottom: 10px;
    }

    .search img{
        width: 25px;
        margin-left: 25px;
        transition: all .2s ease-in-out;
    }

    .search img:hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    .search img, .searchbar{
        position: relative;
        bottom: 80px;
        float: right;
    }

    .searchbar{
        width: 120px;
        transition : all .2s ease-in-out;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    @media screen and (max-width: 640px) {
        .navbar-brand {
            width: 25%;
        }
    }
</style>
