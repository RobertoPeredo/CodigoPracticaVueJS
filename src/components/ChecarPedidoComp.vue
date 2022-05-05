<template>
    <div class="mt-5 text-center">

        <hr>
        <p class="h1" style="font-family: 'Hurricane', cursive;">Revisa tu pedido:</p>

        <div class="mt-2">Nombre: {{ $store.state.nombre }} {{ $store.state.apellido }}</div>
        <div class="mt-2">Celular: {{ $store.state.celular }}</div>
        <div class="mt-2">Correo: {{ $store.state.correo }}</div>
        <div class="mt-2">Descripción: {{ $store.state.descripcion }}</div>

      <hr>
        <p  class="h2" style="font-family: 'Hurricane', cursive;">Sabor  o sabores del pastel:</p>
        <div class="mt-2" v-if=" $store.state.checkNaranja==true">Supremo de naranja</div>
        <div class="mt-2" v-if=" $store.state.checkChocolate==true">Chocolate Tradicional</div>
        <div class="mt-2" v-if=" $store.state.checkZanahoria==true">Zanahoria Tradicional</div>
        <div class="mt-2" v-if=" $store.state.checkAleman==true">Alemán</div>
        <div class="mt-2" v-if=" $store.state.checkGuayaba==true">Guayaba</div>
        <div class="mt-2" v-if=" $store.state.checkVainilla==true">Vainilla</div>
        <hr>

        <p  class="h2" style="font-family: 'Hurricane', cursive;">Topping o toppings del pastel:</p>
        <div class="mt-2" v-if=" $store.state.checkMaltesers==true">Maltesers</div>
         <div class="mt-2" v-if=" $store.state.checkMandM==true">M&Ms</div>
        <div class="mt-2" v-if=" $store.state.checkAvellana==true">Avellana rallada</div>
        <div class="mt-2" v-if=" $store.state.checkCubiertaCh==true">Cubierta de crema de chocolate</div>
        <div class="mt-2" v-if=" $store.state.checkFresas==true">Fresas en rodajitas</div>
        <div class="mt-2" v-if=" $store.state.checkCrema==true">Crema pastelera</div>
        <hr>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>