import Vue from 'vue'
import Accordion from './components/Accordion.vue'

new Vue({
    el: '#app',

    components:{
        Accordion
    },

    data:{
        items: [
            {title: 'Avocado', description:'Yum!'},
            {title: 'Kalamansi', description:'Sour!'},
            {title: 'Mango', description:'Sweet!'},
        ]
    },
})
