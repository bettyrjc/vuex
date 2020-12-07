<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="text" >
    <p>{{text}}</p>
  </div>
</template>



<script>
  export default {
      data(){
        return{
          text:''
        }
      }
  }
</script>

<style>

</style>