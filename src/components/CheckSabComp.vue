<template>
  <div class="text-center mx-auto">
    <hr>
    <h1 style="font-family: 'Hurricane', cursive;">Selecciona el o los sabores del pastel</h1>
    <!-- row1 -->
     
    <b-row>
      <span class="bg-danger mt-3 h2 text-light ">{{$store.state.validarSaboresSpam}}</span>
     <!-- tarjeta1  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkNaranja" name="check-button" button button-variant="outline-secondary">
      <b-card 
                    
                    :img-src="require('../assets/naranja.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                   header="Supremo de naranja"
                >
                <b-card-text>
                    Pan de naranja húmedo en tres leches con cheescake en el centro.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col>   
      <!-- tarjeta2  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkChocolate" name="check-button" button button-variant="outline-secondary" >
      <b-card 
                    
                    :img-src="require('../assets/chocolate.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                     header="Chocolate Tradicional"
                >
                <b-card-text>
                    Pan de chocolate artesanal con relleno y cubierta de chocolate.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col> 
      <!-- tarjeta3  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkZanahoria" name="check-button" button button-variant="outline-secondary">
      <b-card 
                    
                    :img-src="require('../assets/zanahoria.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                    header="Zanahoria Tradicional"
                >
                <b-card-text>
                    Pan esponjoso de zanahoria con nuestro ya conocido betún de mantequilla.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col> 




   </b-row>
   

    <!-- row2 -->
    <b-row>
     <!-- tarjeta1  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkAleman" name="check-button" button button-variant="outline-secondary">
      <b-card 
                    
                    :img-src="require('../assets/marmoleado.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                    header="Alemán"
                >
                <b-card-text>
                    Pan marmoleado relleno y cubierto con cajeta, coco y nuez.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col>   
      <!-- tarjeta2  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkGuayaba" name="check-button" button button-variant="outline-secondary">
      <b-card 
                    
                    :img-src="require('../assets/guayaba.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                    header="Guayaba"
                >
                <b-card-text>
                    Pan artesanal de guayaba con cubierta de ate de guayaba.
                </b-card-text>               
                </b-card>
    </b-form-checkbox>

      </b-col> 
      <!-- tarjeta3  -->
      <b-col  cols="12" md="6" lg="4">
        <b-form-checkbox class="mt-5" v-model="$store.state.checkVainilla" name="check-button" button button-variant="outline-secondary">
      <b-card 
                    
                    :img-src="require('../assets/vainilla.png')"
                    img-top   
                    class="mb-5 resaltar text-dark"
                    img-width="418"
                    img-height="209"
                    header="Vainilla "
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