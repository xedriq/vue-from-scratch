import Vue from 'vue'

Vue.component('accordion', {
    props:[
        'fruit'
    ],
    template: `
        <div class="card">
            <div class="card-content">
                <span class="card-title">{{ fruit.title }}</span>
                <button class="btn" @click="toggle = ! toggle">Description</button>
                <p v-if="toggle">{{ fruit.description }}</p>
            </div>
        </div>
    `,
    data(){
        return {
            toggle: false
        }
    }
})

new Vue({
    el: '#app',
    data:{
        items: [
            {title: 'Avocado', description:'Yum!'},
            {title: 'Kalamansi', description:'Sour!'},
            {title: 'Mango', description:'Sweet!'},
        ]
    },
})
