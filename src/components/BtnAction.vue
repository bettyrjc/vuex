<template>
  <button @click='actionBtn({statee: statee, numero: 50})' >{{btnText}}</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:{
        statee: Boolean
    },
    computed:{
        btnText (){
        return this.statee ? 'Aumentar' : 'Disminuir' 
        }
    },
    methods:{
        ...mapActions(['actionBtn'])
    }
    }
</script>

<style>

</style>