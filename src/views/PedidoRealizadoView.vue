<template>
    <div class="container pt-5 text-center fondo">
      <div class="d-flex flex-column d-flex align-items-center">
        <img src="@/assets/logo.png" alt="">
      
        <img src="@/assets/gracias.gif" alt="">
        
        <p class="h1 my-5">Tu pedido fue enviado</p>
        <p class="h2 mb-5">Pronto nos pondremos en contacto contigo</p>
      </div>
        <FooterComp></FooterComp>
    </div>
</template>

<script>

import FooterComp from '@/components/FooterComp.vue'
export default {
  
  components: {
      FooterComp
  }
  

}

</script>

<style scoped>
.fondo{
    background-color: #dbe8ee;
    padding: 0px;
}
</style>