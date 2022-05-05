<template>
    <div class="container pt-5 text-center">
        
        <PedidosPendientesComp class="px-5 "></PedidosPendientesComp>
        <InventarioComp class="px-5 "></InventarioComp>
        <FooterComp></FooterComp>
    </div>
    
</template>

<script>
// @ is an alias to /src

import FooterComp from '@/components/FooterComp.vue'
import PedidosPendientesComp from '@/components/PedidosPendientesComp.vue'
import InventarioComp from '@/components/InventarioComp.vue'


export default {
  components: {
  FooterComp, InventarioComp,PedidosPendientesComp
  }
  

}
</script>


<style scoped>
*{
    background-color: #dbe8ee;
    padding: 0px;
}
</style>