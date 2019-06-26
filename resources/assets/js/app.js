
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
window.Vue = require('vue');
import 'bulma/css/bulma.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

library.add(faUpload);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 //Elements Components
Vue.component('hero', require('./components/elements/Hero.vue'));
Vue.component('navbar', require('./components/elements/Navbar.vue'));
Vue.component('about', require('./components/elements/About.vue'));
Vue.component('nouveauxDons', require('./components/elements/NvxDons.vue'));
Vue.component('chiffres', require('./components/elements/Chiffres.vue'));
Vue.component('partners', require('./components/elements/Partners.vue'));
Vue.component('thefooter', require('./components/elements/Footer.vue'));

Vue.component('don', require('./components/elements/Don.vue'));

//Pages Components
Vue.component('index', require('./components/pages/Index.vue'));
var aboutUs = Vue.component('about-us', require('./components/pages/AboutUs.vue'));
var thecategories = Vue.component('categories', require('./components/pages/Categories.vue'));
var commntCaMarche = Vue.component('comment', require('./components/pages/Comment.vue'));
var faireUnDon = Vue.component('donner', require('./components/pages/FaireDon.vue'));
var favs = Vue.component('favoris', require('./components/pages/Favoris.vue'));
var connect = Vue.component('connexion', require('./components/pages/Connexion.vue'));
var error = Vue.component('erreur', require('./components/pages/Erreur.vue'));
var theconditions = Vue.component('conditions', require('./components/pages/Conditions.vue'));
var compte = Vue.component('mon-compte', require('./components/pages/MonCompte.vue'));
var desc = Vue.component('description-don', require('./components/pages/Description.vue'));
var dons = Vue.component('thecategorie', require('./components/pages/Categorie.vue'));



const app = new Vue({
    el: '#app'
});

const about = new Vue({
    el: '#about',
    components: { 'about-us' : aboutUs }
});

const categories = new Vue({
    el: '#categories',
    components: { 'categories' : thecategories }
});

const comment = new Vue({
    el: '#comment',
    components: { 'comment' : commntCaMarche }
});

const donner = new Vue({
    el: '#faireUnDon',
    components: { 'donner' : faireUnDon }
});

const favoris = new Vue({
    el: '#favoris',
    components: { 'favoris' : favs }
});

const connexion = new Vue({
    el: '#connexion',
    components: { 'connexion' : connect }
});

const erreur = new Vue({
    el: '#erreur',
    components: { 'erreur' : error }
});

const conditions = new Vue({
    el: '#conditions',
    components: { 'conditions' : theconditions }
});

const profil = new Vue({
    el: '#monCompte',
    components: { 'mon-compte' : compte }
});

const description = new Vue({
    el: '#description',
    components: { 'description-don' : desc }
});

const categorie = new Vue({
    el: '#categorie',
    components: { 'thecategorie' : dons }
});