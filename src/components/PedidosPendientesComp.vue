<template>
    <div class="mt-5">
        <h1>Pedidos pendientes</h1>
        <div class="table-responsive">
          <table class="table table-responsive-sm table-striped ">
        <thead class="thead-dark">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Celular</th>
            <th>Correo electrónico</th>
            <th>Descripción</th>
            <th>Sabor del pastel</th>
            <th>Toppings</th>
            
          </tr>
        </thead>
        <tbody>
            
                <tr v-for="(dataPedido,index) in $store.state.dataPedidos" v-bind:key="index">
              <td>{{dataPedido.nombre}}</td>
              <td>{{dataPedido.apellido}}</td>
              <td>{{dataPedido.celular}}</td>
              <td>{{dataPedido.correo}}</td>
              <td>{{dataPedido.descripcion}}</td>
              <td>
                <p v-if=" dataPedido.checkNaranja==true">Supremo de naranja</p>
                <p v-if=" dataPedido.checkChocolate==true">Chocolate Tradicional</p>
                <p v-if=" dataPedido.checkZanahoria==true">Zanahoria Tradicional</p>
                <p v-if=" dataPedido.checkAleman==true">Alemán</p>
                <p v-if=" dataPedido.checkGuayaba==true">Guayaba</p>
                <p v-if=" dataPedido.checkVainilla==true">Vainilla</p>
            </td>
            <td>
                <p v-if=" dataPedido.checkMaltesers==true">Maltesers</p>
                <p v-if=" dataPedido.checkMandM==true">M&ms</p>
                <p v-if=" dataPedido.checkAvellana==true">Avellanas Ralladas</p>
                <p v-if=" dataPedido.checkCubiertaCh==true">Cubierta de crema de chocolate</p>
                <p v-if=" dataPedido.checkFresas==true">Fresas en rodajitas</p>
                <p v-if=" dataPedido.checkCrema==true">Crema pastelera</p>
            </td>
              
             
            </tr>
            
            
        </tbody>
      </table>
        </div>
          
    </div>
</template>