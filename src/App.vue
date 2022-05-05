<template>
  <div id="app" class="fondo">
    
    <b-navbar toggleable="md" type="dark" class="fondo fixed-top ">

      <b-container>
        <b-navbar-item> <img src="./assets/logo.png" width="70px" alt=""></b-navbar-item>
        <b-navbar-brand   href="#"> <span class="h1 fuente"> PASTELERÍA GALÁCTICA</span> </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <div class="mx-auto  ">
            <b-navbar-nav>
              <b-nav-item :to="{name:'home'}" exact> <span class="h5">Home</span></b-nav-item>
              <b-nav-item :to="{name: 'pasteles'}"><span class="h5">Pasteles</span></b-nav-item>
              <b-nav-item :to="{name: 'pedidos'}"><span class="h5">Realiza tu pedido</span></b-nav-item>
              <b-nav-item :to="{name: 'inventario'}"><span class="h5">Inventario</span></b-nav-item>
            </b-navbar-nav>
          </div>

        </b-collapse>
      </b-container>

    </b-navbar>

    <b-container > <router-view/></b-container>
    
  </div>
</template>

<style scoped>
.fuente{
  font-family: 'Hurricane', cursive;
}
.fondo{
    background-color: #7c9ccd7c;
  
}
</style>



