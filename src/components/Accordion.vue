<template>
    <div class="card">
        <div class="card-content">
            <span class="card-title">{{ fruit.title }}</span>
            <button class="btn" @click="toggle = ! toggle">Description</button>
            <p v-if="toggle">{{ fruit.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Accordion",
    
    props:[
        'fruit'
    ],

    data(){
        return {
            toggle: false
        }
    }
}
</script>

<style>

</style>