<template>
    <div class="container pt-5 text-center fondo">
        <ChecarPedidoComp></ChecarPedidoComp>
        
        <router-link :to="{name: 'pedidoRealizado'}"><b-button  variant="success"  @click="$store.commit('confirmarpedido') ">Realizar Pedido</b-button></router-link>
         <router-link :to="{name: 'pedidos'}"><b-button  variant="">Regresar</b-button></router-link>
         <FooterComp></FooterComp>
    </div>
</template>

<script>
import ChecarPedidoComp from '@/components/ChecarPedidoComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
  
  components: {
     FooterComp,ChecarPedidoComp 
  }
  

}

</script>


<style scoped>
.fondo{
    background-color: #dbe8ee;
    padding: 0px;
}
</style>