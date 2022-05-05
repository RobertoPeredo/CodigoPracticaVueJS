<template>
  <div class="text-center mx-auto">
    <hr>
    <h1 style="font-family: 'Hurricane', cursive;">Selecciona el o los toppings para acompañar tu pastel</h1>
    <!-- row1 -->
   <b-row>
     <span class="bg-danger mt-3 h2 text-light ">{{$store.state.validarToppingSpam}}</span>
     <!-- tarjeta1  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkMaltesers" name="check-button" button button-variant="outline-secondary" >
      <b-card 
                    
                    :img-src="require('../assets/malteser.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                    header="Maltesers"
                >
                <b-card-text>
                    Delicioso pan de vainilla con relleno y cubierta de ciruela.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col>   
      <!-- tarjeta2  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkMandM" name="check-button" button button-variant="outline-secondary">
      <b-card 
                    
                    :img-src="require('../assets/m&m.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                    header="M&Ms"
                >
                <b-card-text>
                    Delicioso pan de vainilla con relleno y cubierta de ciruela.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col> 
      <!-- tarjeta3  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkAvellana" name="check-button" button button-variant="outline-secondary">
      <b-card 
                    
                    :img-src="require('../assets/avellana.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                    header="Avellanas ralladas"
                >
                <b-card-text>
                    Delicioso pan de vainilla con relleno y cubierta de ciruela.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col> 




   </b-row>

    <!-- row2 -->
    <b-row>
     <!-- tarjeta1  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkCubiertaCh " name="check-button" button button-variant="outline-secondary">
      <b-card 
                    
                    :img-src="require('../assets/cremachocolate.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                    header="Cubierta de crema de chocolate"
                >
                <b-card-text>
                    Delicioso pan de vainilla con relleno y cubierta de ciruela.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col>   
      <!-- tarjeta2  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkFresas" name="check-button" button button-variant="outline-secondary">
      <b-card 
                    
                    :img-src="require('../assets/Fresas.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                    header="Fresas en rodajitas"
                >
                <b-card-text>
                    Delicioso pan de vainilla con relleno y cubierta de ciruela.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col> 
      <!-- tarjeta3  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkCrema" name="check-button" button button-variant="outline-secondary">
      <b-card 
                  
                    :img-src="require('../assets/Cremapastelera.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                    header="Crema pastelera"
                >
                <b-card-text>
                    Delicioso pan de vainilla con relleno y cubierta de ciruela.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col> 

    


   </b-row>
    
    



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