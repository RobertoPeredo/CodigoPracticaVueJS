<template>
	<div class="mt-5 text-center mx-auto">	
        <h1 style="font-family: 'Hurricane', cursive;">NUESTROS SABORES:</h1>
        <b-row class="mt-5">
            <!-- tarjeta1 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card 
                    :img-src="require('../assets/naranja.png')"
                    img-top 
                    img-width="418"
                    img-height="209"
                    header="Supremo de naranja"
                      
                    class="mb-5 resaltar d-block img-fluid w-100 "
                >
                
                <b-card-text>
                    Pan de naranja húmedo en tres leches con cheescake en el centro.
                </b-card-text>               
                </b-card>
            </b-col>

         <!-- tarjeta2 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/chocolate.png')"
                    img-top   
                    img-width="418"
                    img-height="209"
                    class="mb-5 resaltar img-fluid "
                    header="Chocolate Tradicional"                 
                >
                <b-card-text>
                    Pan de chocolate artesanal con relleno y cubierta de chocolate.
                </b-card-text>               
                </b-card>
            </b-col>

         <!-- tarjeta3 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/zanahoria.png')"
                    img-top   
                    class="mb-5 resaltar"
                    img-width="418"
                    img-height="209"
                    header="Zanahoria Tradicional"
                >
                <b-card-text>
                    Pan esponjoso de zanahoria con nuestro ya conocido betún de mantequilla.
                </b-card-text>               
                </b-card>
            </b-col>


        </b-row>

        <b-row class="mt-5">
            <!-- tarjeta1 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/marmoleado.png')"
                    img-top   
                    class="mb-5 resaltar"
                    img-width="418"
                    img-height="209"
                    header="Alemán"
                >
                <b-card-text>
                    Pan marmoleado relleno y cubierto con cajeta, coco y nuez.
                </b-card-text>               
                </b-card>
            </b-col>

         <!-- tarjeta2 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/guayaba.png')"
                    img-top   
                    class="mb-5 resaltar"
                    img-width="418"
                    img-height="209"
                    header="Guayaba"
                >
                <b-card-text>
                    Pan artesanal de guayaba con cubierta de ate de guayaba.
                </b-card-text>               
                </b-card>
            </b-col>

         <!-- tarjeta3 -->
            <b-col  cols="12" md="6" lg="4">
                <b-card
                    :img-src="require('../assets/vainilla.png')"
                    img-top   
                    class="mb-5 resaltar"
                    img-width="418"
                    img-height="209"
                    header="Vainilla"
                >
                <b-card-text>
                    Delicioso pan de vainilla con relleno y cubierta de ciruela.
                </b-card-text>               
                </b-card>
            </b-col>


        </b-row>
		<hr><hr>

	</div>
</template>


<script>
export default {
    name : 'SaboresComp'
}
</script>

<style scoped>
.resaltar:hover{
    scale: 1.5;
    border: 3px solid #7c9dcd;
    

}
</style>