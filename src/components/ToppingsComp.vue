<template>
	<div class="mt-5 text-center mx-auto">	
        <h1 style="font-family: 'Hurricane', cursive; ">NUESTROS TOPPINGS:</h1>
        <b-row class="mt-5">
            <!-- tarjeta1 -->
           <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/malteser.png')"
                    img-top 
                    img-width="418"
                    img-height="209"
                    header="Maltesers"
                      
                    class="mb-5 resaltar d-block img-fluid w-100"
                >
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>               
                </b-card>
            </b-col>

         <!-- tarjeta2 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/m&m.png')"
                    img-top   
                    img-width="418"
                    img-height="209"
                    class="mb-5 resaltar "
                    header="M&Ms"
                >
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>               
                </b-card>
            </b-col>

         <!-- tarjeta3 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/avellana.png')"
                    img-top   
                    class="mb-5 resaltar"
                    img-width="418"
                    img-height="209"
                    header="Avellanas ralladas"
                >
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>               
                </b-card>
            </b-col>


        </b-row>

        <b-row class="mt-5">
            <!-- tarjeta1 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/cremachocolate.png')"
                    img-top   
                    class="mb-5 resaltar"
                    img-width="418"
                    img-height="209"
                    header="Cubierta de crema de chocolate"
                >
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>               
                </b-card>
            </b-col>

         <!-- tarjeta2 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/Fresas.png')"
                    img-top   
                    class="mb-5 resaltar"
                    img-width="418"
                    img-height="209"
                    header="Fresas en rodajitas"
                >
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>               
                </b-card>
            </b-col>

         <!-- tarjeta3 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/Cremapastelera.png')"
                    img-top   
                    class="mb-5 resaltar"
                    img-width="418"
                    img-height="209"
                    header="Crema pastelera"
                >
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>               
                </b-card>
            </b-col>


        </b-row>
		
	</div>
</template>


<script>
export default {
    name : 'ToppingsComp'
}
</script>

<style scoped>
.resaltar:hover{
    scale: 1.5;
    border: 3px solid #7c9dcd;
    

}
</style>