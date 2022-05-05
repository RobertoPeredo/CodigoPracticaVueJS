<template>
  <div class="home">
    
    <CarruselComp></CarruselComp>
    <FooterComp></FooterComp>
    
  </div>
</template>

<script>
// @ is an alias to /src

import CarruselComp from '@/components/CarruselComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
     CarruselComp, FooterComp
  }
}
</script>

