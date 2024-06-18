<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
  <div class="template">
    <nav class="navegacion">
      <img src="../assets/letrero.png" alt="" class="imagen_navegacion">
      <router-link to="/" class="navegacion__enlace">INICIO</router-link>
      <router-link to="/contacto" class="navegacion__enlace">CONTACTO</router-link>
      <router-link to="/perfil" class="navegacion__enlace">RICK</router-link>
      <router-link to="/banda" class="navegacion__enlace">BANDA</router-link>
    </nav>

    <img src="../assets/imagen.png" alt="" class="imagen_inicio" v-if="route.path === '/'">

    <div class="contenedor">
      <router-view/>
    </div>

    <footer v-if="route.path !== '/'">
      <p class="footer__texto">Realizado por Luz Angela Fernandez.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const datos = ref("");
const route = useRoute();

const actualizarDatos = () => {
  switch (route.path) {
    case '/':
      datos.value = 'Rick';
      break;
    case '/contacto':
      datos.value = 'Contacto';
      break;
    case '/perfil':
      datos.value = 'Perfil';
      break;
    case '/banda':
      datos.value = 'Banda';
      break;
  }
}


onMounted(() => {
  actualizarDatos();
});
</script>


<style scoped>


h2{
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 2.5rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  padding-top: 2rem;
  color: #42b983;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-size: 2rem;
}
p{
  font-family: "Nanum Myeongjo", serif;
    font-weight: 400;
    font-style: normal;

}

.imagen_inicio{
  width: 12rem;
margin-left: 5rem;

}

@media (min-width:768px){
    .imagen_inicio{
      width: 15rem;
  margin-left: 40rem;
    }
  
}


.template {
  background-image: url(../assets/rick4.png);
  box-sizing: border-box; /* Hack Elimina Efecto caja */
  font-size: 62.5%; /* Mejora el entorno de diseño */
  background-repeat: no-repeat;
   background-size: 100%;
   background-attachment: fixed;
   padding-top: 6rem;
 


  }
 *, *:before, *:after {
    box-sizing: inherit;
 }


 
.navegacion{
   position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff; /* Color del texto */
  background: black;
  display: grid;
  justify-content: center;
  text-align: center;
  line-height: 0.8rem;
  padding: 1rem  ;

  
   
    
}
@media (min-width:768px){
    .navegacion{
    display: flex;
    padding: 2rem 3rem ;
    gap: 4rem;
    line-height: 2rem;
    }
  
}



.navegacion__enlace{
    color:#42b983;
    
}

.navegacion__enlace:hover{
    color: white;
}

.imagen_navegacion{
  width: 20rem; 
}

footer{
  background: black;
  color:#42b983;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  padding: 2rem;
  font-size: 2rem;
  text-align: center;
 

 
}

</style>

