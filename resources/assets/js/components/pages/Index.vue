<template>
    <div id="#top" class="home">
        <hero bannerbg="home" heroTitle="Hassana" homepage></hero>
        <about></about>
        <nouveauxDons></nouveauxDons>
        <chiffres></chiffres>
        <partners></partners>
        <thefooter></thefooter>
    </div>
</template>
<script>
  import VAnimateCss from 'v-animate-css'
    export default {
        props : ['title']
    }
</script>
<style>
    body{
        font-family: 'Muli', sans-serif;
    }
     h2{
        width: 50%;
        text-align: center;
        font-family: "Caviar Dreams", sans-serif;
        margin: 65px auto;
        margin-top: 25px;
        padding-top: 65px;
        font-weight: lighter;
        text-transform: uppercase;
    }

    @media screen and (max-width: 640px) {
        h2{
           font-size: 21px !important; 
           margin: 35px auto;
           margin-top: 10px;
        }
        p{
            font-size: 16px;
        }
    }
</style>