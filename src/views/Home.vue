<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 :style="colorCounter">Mi contador {{ counter }}</h1>
 
    <BtnAction :statee='false'/>
    <BtnAction :statee='true'/>

  </div>
</template>
<script>
import BtnDisminuir from '../components/BtnDismiss'
import BtnAction from '../components/BtnAction'
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    BtnDisminuir,
    BtnAction
  },
  computed: {
    //nos devuelve un objeto
    // el array es porque tenemos multiples states
    ...mapState(["counter"]),
    colorCounter() {
      return [this.counter > 500 ? { color: "green" } : { color: "red" }];
    },
  },
  // actions y mutaciones se hace en las mutaciones
  methods:{
    ...mapActions(['actionIncrement'])
  }
};
</script>
