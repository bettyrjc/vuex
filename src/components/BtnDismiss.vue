<template>
<div>
    <p>hola</p>
    <button @click="actionDisminuir(50)">Disminuir</button>
</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    methods:{
    ...mapActions(['actionDisminuir'])
        
    }
}
</script>

<style>

</style>