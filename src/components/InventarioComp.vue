<template>
    <div class=" mt-5 text-center mx-auto">

            <h1>Inventario</h1>
            <!-- row 1 -->
            <b-row class="mt-3">
                <!-- tarjeta1 -->
               <b-col cols="6" md="4" lg="3">
                    <b-card
                    title="Huevo"
                    :img-src="require('../assets/huevos.jpg')"
                    img-alt="Image"
                    img-top
                    img-width="180"
                    img-height="180"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    >
                    <b-card-text  :class="{ 'rojo': contadorHuevo < 3}">
                    Cantidad: {{contadorHuevo}}
                    </b-card-text>
                    
                    <b-button  @click="subirContadorHuevo" variant="primary">+</b-button>
                    <b-button @click="bajarContadorHuevo" variant="info">-</b-button>
                     </b-card>
                </b-col>
                <!-- tarjeta2 -->
                <b-col cols="6" md="4" lg="3">
                    <b-card
                    title="Harina"
                    :img-src="require('../assets/harina.jpg')"
                    img-alt="Image"
                    img-top
                    img-width="180"
                    img-height="180"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    >
                     <b-card-text :class="{ 'rojo': contadorHarina < 3}">
                    Cantidad: {{contadorHarina}}
                    </b-card-text>
                    

                    <b-button  @click="subirContadorHarina" variant="primary">+</b-button>
                    <b-button @click="bajarContadorHarina" variant="info">-</b-button>
                     </b-card>
                </b-col>
                <!-- tarjeta3 -->
                <b-col cols="6" md="4" lg="3">
                    <b-card
                    title="Leche"
                    :img-src="require('../assets/leche.jpg')"
                    img-alt="Leche"
                    img-top
                    img-width="180"
                    img-height="180"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    >
                     <b-card-text :class="{ 'rojo': contadorLeche < 3}">
                    Cantidad: {{contadorLeche}}
                    </b-card-text>
                   
                    <b-button  @click="subirContadorLeche" variant="primary">+</b-button>
                    <b-button @click="bajarContadorLeche" variant="info">-</b-button>
                     </b-card>
                </b-col>
                <!-- tarjeta4 -->
                <b-col cols="6" md="4" lg="3">
                    <b-card
                    title="Mantequilla"
                    :img-src="require('../assets/mantequilla.jpg')"
                    img-alt="Image"
                    img-top
                    img-width="180"
                    img-height="180"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    >
                     <b-card-text :class="{ 'rojo': contadorMantequilla < 3}"> 
                    Cantidad: {{contadorMantequilla}}
                    </b-card-text>
                

                    <b-button  @click="subirContadorMantequilla" variant="primary">+</b-button>
                    <b-button @click="bajarContadorMantequilla" variant="info">-</b-button>
                     </b-card>
                </b-col>

            </b-row>
            <!-- row2 -->
            <b-row class="mt-3">
                <!-- tarjeta1 -->
               <b-col cols="6" md="4" lg="3">
                    <b-card
                    title="Chocolate"
                    :img-src="require('../assets/chocolateInv.jpg')"
                    img-alt="Chocolate"
                    img-top
                    img-width="180"
                    img-height="180"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    >
                     <b-card-text :class="{ 'rojo': contadorChocolate < 3}">
                    Cantidad: {{contadorChocolate}}
                    </b-card-text>
                    
                    <b-button  @click="subirContadorChocolate" variant="primary">+</b-button>
                    <b-button @click="bajarContadorChocolate" variant="info">-</b-button>
                     </b-card>
                </b-col>
                <!-- tarjeta2 -->
                <b-col cols="6" md="4" lg="3">
                    <b-card
                    title="Fresas"
                    :img-src="require('../assets/fresasInv.jpg')"
                    img-alt="Image"
                    img-top
                    img-width="180"
                    img-height="180"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    >
                     <b-card-text :class="{ 'rojo': contadorFresas < 3}">
                    Cantidad: {{contadorFresas}}
                    </b-card-text>

                    <b-button  @click="subirContadorFresas" variant="primary">+</b-button>
                    <b-button @click="bajarContadorFresas" variant="info">-</b-button>
                     </b-card>
                </b-col>
                <!-- tarjeta3 -->
                <b-col cols="6" md="4" lg="3">
                    <b-card
                    title="Crema pastelera"
                    :img-src="require('../assets/cremaInv.jpg')"
                    img-alt="Image"
                    img-top
                    img-width="180"
                    img-height="180"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    >
                     <b-card-text :class="{ 'rojo': contadorCrema < 3}">
                    Cantidad: {{contadorCrema}}
                    </b-card-text>
                   
                    <b-button  @click="subirContadorCrema" variant="primary">+</b-button>
                    <b-button @click="bajarContadorCrema" variant="info">-</b-button>
                     </b-card>
                </b-col>
                <!-- tarjeta4 -->
                <b-col cols="6" md="4" lg="3">
                    <b-card
                    title="M&Ms"
                    :img-src="require('../assets/m&ms.jpg')"
                    img-alt="Image"
                    img-top
                    img-width="180"
                    img-height="180"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    >
                     <b-card-text :class="{ 'rojo': contadorM < 3}">
                    Cantidad: {{contadorM}}
                    </b-card-text>
                

                    <b-button  @click="subirContadorM" variant="primary">+</b-button>
                    <b-button @click="bajarContadorM" variant="info">-</b-button>
                     </b-card>
                </b-col>

            </b-row>

             
</div>
    
</template>

<script>

export default {
    data() {
      return {
        contadorHuevo: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
        contadorHarina: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
        contadorLeche: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
        contadorMantequilla: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
        contadorChocolate: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
        contadorFresas: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
        contadorCrema: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
        contadorM: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
        
      
        
      }
    },
    methods: {
      subirContadorHuevo() {
        this.contadorHuevo++
      },
      bajarContadorHuevo() {
        this.contadorHuevo--
      },
//---------------------------------------
      subirContadorHarina() {
        this.contadorHarina++
      },
      bajarContadorHarina() {
        this.contadorHarina--
      },
//------------------------------------
      subirContadorLeche() {
        this.contadorLeche++
      },
      bajarContadorLeche() {
        this.contadorLeche--
      },
//--------------------------------------
      subirContadorMantequilla() {
        this.contadorMantequilla++
      },
      bajarContadorMantequilla() {
        this.contadorMantequilla--
      },
//--------------------------------------
      subirContadorChocolate() {
        this.contadorChocolate++
      },
      bajarContadorChocolate() {
        this.contadorChocolate--
      },
//---------------------------------------
subirContadorFresas() {
        this.contadorFresas++
      },
      bajarContadorFresas() {
        this.contadorFresas--
      },
//---------------------------------------
subirContadorCrema() {
        this.contadorCrema++
      },
      bajarContadorCrema() {
        this.contadorCrema--
      },
//---------------------------------------
subirContadorM() {
        this.contadorM++
      },
      bajarContadorM() {
        this.contadorM--
      },
//---------------------------------------
      CambiarContornoHuevo()
      {
        if(this.contadorHuevo<3){
          this.CambiarContornoHuevo='rojo';
          
        }
        else
        {
          this.CambiarContornoHuevo='';
        }
        
      }

    }
  }
  

 </script>>


<style scoped>
.rojo{
  border-color: red;
  background-color: red;
}
</style>