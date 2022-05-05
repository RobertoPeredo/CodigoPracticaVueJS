<template>
  <div class="container pt-5 text-center fondo">
    <form>
      <FormComp></FormComp>
    <CheckSabComp class="px-5"></CheckSabComp>
    <CheckTopComp class="px-5 mb-5"></CheckTopComp>
    
    <!-- <router-link :to="{name: 'revisarPedido'}"><b-button  variant="success"> Siguiente</b-button></router-link> -->
    
    <!-- <b-button type="submit" :onsubmit="$store.commit('validarPedido')"> siguiente</b-button> -->
    <b-button variant="success"  @click="$store.commit('validarPedido')" >Siguiente</b-button>
    <b-button   variant="" @click="$store.commit('borrartodo')">Reset</b-button>
    
    </form>
    

    <FooterComp></FooterComp>
    
    
  </div>
</template>



<script>
// @ is an alias to /src

import FooterComp from '@/components/FooterComp.vue'
import FormComp from '@/components/FormComp.vue'
import CheckSabComp from '@/components/CheckSabComp.vue'
import CheckTopComp from '@/components/CheckTopComp.vue'


export default {
  name: 'PedidosView',
  components: {
     FooterComp, FormComp, CheckSabComp,CheckTopComp
  }
  

}
</script>


<style scoped>
.fondo{
    background-color: #dbe8ee;
    padding: 0px;
}
</style>