import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombre: '',
    apellido:'',
    celular:'',
    correo:'',
    descripcion:'',

    checkNaranja: false,
    checkChocolate: false,
    checkZanahoria: false,
    checkAleman: false,
    checkGuayaba: false,
    checkVainilla: false,

    checkMaltesers: false,
    checkMandM: false,
    checkAvellana: false,
    checkCubiertaCh: false,
    checkFresas: false,
    checkCrema: false,
    dataPedidos:[],


    validarNombre:false,
    spanNombre: '',
    validarApellido:false,
    spanApellido: '',
    validarCelular:false,
    spanCelular: '',
    validarCorreo:false,
    spanCorreo: '',
    validarDesc:false,
    spanDesc: '',    


    validarSabores:false,
    validarSaboresSpam:'',
    validarToppings:false,
    validarToppingSpam:''


  },
  getters: {
    
  },
  mutations: {  
    borrartodo(state){
      state.nombre= '',
    state.apellido='',
    state.celular='',
    state.correo='',
    state.descripcion='',
    state.checkNaranja= false,
    state.checkChocolate= false,
    state.checkZanahoria= false,
    state.checkAleman= false,
    state.checkGuayaba= false,
    state.checkVainilla= false,

    state.checkMaltesers= false,
    state.checkMandM= false,
    state.checkAvellana= false,
    state.checkCubiertaCh= false,
    state.checkFresas= false,
    state.checkCrema= false,

    state.validarNombre=false,
    state.spanNombre= '',
    state.validarApellido=false,
    state.spanApellido= '',
    state.validarCelular=false,
    state.spanCelular= '',
    state.validarCorreo=false,
    state.spanCorreo= '',
    state.validarDesc=false,
    state.spanDesc= '',    


    state.validarSabores=false,
    state.validarSaboresSpam='',
    state.validarToppings=false,
    state.validarToppingSpam=''
    },
    confirmarpedido(state){

      var data={
        nombre: state.nombre,
        apellido:  state.apellido,
        celular: state.celular,
        correo: state.correo,
        descripcion: state.descripcion,
        checkNaranja: state.checkNaranja,
        checkChocolate: state.checkChocolate,
        checkZanahoria:state.checkZanahoria,
        checkAleman: state.checkAleman,
        checkGuayaba: state.checkGuayaba,
        checkVainilla: state.checkVainilla,
    
        checkMaltesers: state.checkMaltesers,
        checkMandM: state.checkMandM,
        checkAvellana: state.checkAvellana,
        checkCubiertaCh: state.checkCubiertaCh,
        checkFresas: state.checkFresas,
        checkCrema: state.checkCrema
        
      }
      state.dataPedidos.push(data);
      console.log(state.dataPedidos);
      state.nombre= '',
    state.apellido='',
    state.celular='',
    state.correo='',
    state.descripcion='',
    state.checkNaranja= false,
    state.checkChocolate= false,
    state.checkZanahoria= false,
    state.checkAleman= false,
    state.checkGuayaba= false,
    state.checkVainilla= false,

    state.checkMaltesers= false,
    state.checkMandM= false,
    state.checkAvellana= false,
    state.checkCubiertaCh= false,
    state.checkFresas= false,
    state.checkCrema= false

    
      
    },
    validarPedido(state){
      //validar nombre
      if (state.nombre!='')
      {
        state.validarNombre=true
      state.spanNombre=""
      }
      else
      {
        state.validarNombre=false
        state.spanNombre="Por favor rellena este campo"
      }
      //validar apellido
      if (state.apellido!='')
      {
        state.validarApellido=true
      state.spanApellido=""
      }
      else
      {
        state.validarApellido=false
        state.spanApellido="Por favor rellena este campo"
      }

      //validar celular
      if (state.celular!='')
      {
        state.validarCelular=true
      state.spanCelular=""
      }
      else
      {
        state.validarCelular=false
        state.spanCelular="Por favor rellena este campo"
      }

      //validar correo
      if (state.correo!='')
      {
        state.validarCorreo=true
      state.spanCorreo=""
      }
      else
      {
        state.validarCorreo=false
        state.spanCorreo="Por favor rellena este campo"
      }
      //validar descripcion
      if (state.descripcion!='')
      {
        state.validarDesc=true
      state.spanDesc=""
      }
      else
      {
        state.validarDesc=false
        state.spanDesc="Por favor rellena este campo"
      }
    //valdacion de los campos del sabor del pastel
      if(state.checkNaranja==false & state.checkChocolate==false & state.checkZanahoria==false & state.checkAleman==false & state.checkGuayaba==false & state.checkVainilla==false)
      {
        state.validarSabores=false;
        state.validarSaboresSpam="Selecciona al menos un sabor de pastel"
      }
      else if(state.checkNaranja==true | state.checkChocolate==true | state.checkZanahoria==true | state.checkAleman==true | state.checkGuayaba==true | state.checkVainilla==true)
      {
        state.validarSabores=true;
        state.validarSaboresSpam=""
      }
      //validacion de los campos de los topping
      if(state.checkMaltesers==false & state.checkMandM==false & state.checkAvellana==false & state.checkCubiertaCh==false & state.checkFresas==false & state.checkCrema==false)
      {
        state.validarToppings=false;
        state.validarToppingSpam="Selecciona al menos un topping"
      }
      else if(state.checkMaltesers==true | state.checkMandM==true | state.checkAvellana==true | state.checkCubiertaCh==true | state.checkFresas==true | state.checkCrema==true)
      {
        state.validarToppings=true;
        state.validarToppingSpam=""
      }

      if(state.validarNombre==true & state.validarApellido==true & state.validarCelular==true & state.validarCorreo==true & state.validarDesc==true & state.validarSabores==true & state.validarToppings==true)
      {
        router.push('revisarPedido')
      }
      else{
        router.push('/pedidos')
        
      }

    }
  

  },
  actions: {
  },
  modules: {
  }
})
