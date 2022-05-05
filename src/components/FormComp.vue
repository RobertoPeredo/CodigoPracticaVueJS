<template>
  <div class="mt-5 text-center">
      <h1 style="font-family: 'Hurricane', cursive;">Completa los siguientes campos para realizar tu pedido:</h1>

      
          <b-row>
              <b-col md="6" class="d-flex justify-content-center">
                <div class="col-10 text-center mb-3 "><b-form-input  v-model="$store.state.nombre " placeholder="Nombre" required></b-form-input>
                <small class="text-danger">{{$store.state.spanNombre}}</small>
                </div>
                
              </b-col>
              <b-col md="6" class="d-flex justify-content-center">
                <div class="col-10 text-center  mb-3"><b-form-input  v-model="$store.state.apellido" placeholder="Apellido" ></b-form-input>
                <small class="text-danger">{{$store.state.spanApellido}}</small>
                </div>
              </b-col>

          </b-row>
         
         <b-row>
              <b-col md="6" class="d-flex justify-content-center">
                <div   class="col-10 text-center mb-3 "><b-form-input type="number" v-model="$store.state.celular" :state="validarCel" placeholder="Celular" ></b-form-input>
                <small>Número de 10 digitos</small><br>
                <small class="text-danger">{{$store.state.spanCelular}}</small>
                </div>
              </b-col>
              <b-col md="6" class="d-flex justify-content-center">
                <div class="col-10 text-center mb-3"><b-form-input type="email" v-model="$store.state.correo" placeholder="Correo" ></b-form-input>
                <small class="text-danger">{{$store.state.spanCorreo}}</small>
                </div>
              </b-col>

          </b-row>

          <b-row class="d-flex justify-content-center">
            <b-col cols="10" md="10"  >
              <div>
              <b-form-textarea  v-model="$store.state.descripcion" placeholder="Añade aquí el mensaje que quieras que aparezca en el pastel así como alguna descripción adicional" ></b-form-textarea>
                <small class="text-danger">{{$store.state.spanDesc}}</small>
              </div>
            </b-col>
          </b-row>
      

      
    
    
     

    
  </div>
</template>



<script>


  export default {
      data() {
      return {   
        
         
      }
      },
      computed:{
      validarCel () { return this.$store.state.celular.length >= 10 ? true : false  }        
    }
  }
</script>