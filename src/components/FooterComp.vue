<template>
    <div   class="fuente">

        <footer class=" altura" >

            <div class="text-center pt-4 " >
                <p class="h2 text-light" >Pastelería Galactica</p>
            </div>

            <!-- -----1----- -->
            <b-row class="m-3 p-3 text-center text-light">
                <!-- col1 -->
                <b-col  cols="12" md="4" >
                            <p class="h3 mb-3 text-primary"> Redes:</p>
                            <p class="h4">>Facebook <i class="bi bi-facebook"></i></p>
                            <p class="h4">>Instagram</p>
                            <p class="h4">>Twitter</p>
                </b-col>

                <!-- col2 -->
                <b-col  cols="12" md="4" >
                    <p class="h3 mb-3 text-primary"> Contacto:</p>
                    <p class="h4">>Telefono: 22 22 22 22 22</p>
                    <p class="h4">>Dirección: Calle Neptuno #8</p>
                    <p class="h4">>Horario de atención Lunes a viernes de 11 am a 10pm</p>
                </b-col>

                <!-- col3 -->
                <!-- <b-col  cols="12" md="6" lg="4"> -->
                <b-col  cols="12" md="4">
                    <p class="h3 mb-3 text-primary"> LaunchX:</p>
                     <p class="h4">>Inovvaccion virtual</p>
                     <p class="h4">>Programming by Roberto Peredo</p>
                     <p class="h4">>Design by Roberto Peredo</p>
                </b-col>
            </b-row>
            
            

            
        </footer>

    </div>
</template>

<script>export default {
    name : 'FooterComp'
}
</script>

<style scoped>
.altura
{
    height: 50%;
    width: 100%;
    background-color: #7c9dcd;
    margin: 0px;
    padding: 0px;
}
.fuente{
    font-family: 'Hurricane', cursive;
}
</style>