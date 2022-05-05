<template>
  <div class="container pt-5">
    
    <SaboresComp class="px-5 "></SaboresComp>
    
    <ToppingsComp class="px-5 "></ToppingsComp>
    <FooterComp></FooterComp>
  </div>
</template>



<script>
// @ is an alias to /src

import FooterComp from '@/components/FooterComp.vue'
import SaboresComp from '@/components/SaboresComp.vue'
import ToppingsComp from '@/components/ToppingsComp.vue'

export default {
  name: 'PastelesView',
  components: {
     FooterComp,SaboresComp, ToppingsComp
  }
}
</script>

<style scoped>
*{
    background-color: #dbe8ee;
    padding: 0px;
}
</style>