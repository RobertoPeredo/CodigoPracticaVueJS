<template>
  <div>
    <b-carousel
      id="carousel-1"
      
      :interval="2000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      
    >
      <!-- Imagen 1 -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/foto1.png"
            alt="image slot"
          >
        </template>
        <p class=" h1 fuente">LOS MEJORES PASTELES DEL MUNDO</p>
      </b-carousel-slide>

      <!-- Imagen 2-->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/foto2.png"
            alt="image slot"
          >
        </template>
        <p class=" h1 fuente">LOS MEJORES PASTELES DEL MUNDO</p>
      </b-carousel-slide>

      <!-- Imagen 3-->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/foto3.png"
            alt="image slot"
          >
        </template>
        <p class=" h1 fuente">LOS MEJORES PASTELES DEL MUNDO</p>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/foto4.png"
            alt="image slot"
          >
        </template>
        <p class=" h1 fuente">LOS MEJORES PASTELES DEL MUNDO</p>
      </b-carousel-slide>

    </b-carousel>

   
  </div>
</template>



<script>

export default {
    name : 'CarruselComp'
}


</script>

<style scoped>
.fuente{
  font-family: 'Hurricane', cursive;
  
}
</style>