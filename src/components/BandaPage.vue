<template >
  <div class="bandas">
    <div class="cajaBandas" v-for="genero in generos" :key="genero.nombre">
      <h2 class="nombre-banda">{{ genero.nombre }}</h2>
      <img  class="imagen_banda" :src="require(`@/assets/${genero.imagen}`)" alt="Imagen de {{ genero.nombre }}" />
      <p  class="descripcion">{{ genero.descripcion }}</p>
      <p class="descripcion">Banda: {{ genero.banda }}</p>
    </div>
  </div>
</template>

<script setup>
import generosData from '@/assets/Banda.json';

const generos = generosData.generos;
</script>

<style scoped>


.bandas{
  display: grid;
  grid-template-columns: repeat(1,1fr);
  padding-top: 12rem;
}

@media (min-width:768px){
.bandas{
  display: grid;
  grid-template-columns: repeat(2,1fr);
margin: 10rem 10rem;
gap: 2rem;
padding-top: 1rem;
    }}

.cajaBandas{
  border: 1px solid #ccc;
padding: 2rem;
border-radius: 15px;
background-color:#F5F8F9;
text-align: center;

}
.imagen_banda{
  width: 20rem;
}
.descripcion{
  padding:2rem;
}
.contenedor{
  grid-gap: 20px;
padding: 6rem;

max-width: 120rem;
}
.nombre-banda{
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 2.8rem;
}
.descripcion{
  text-align: justify;
  font-family: "Nanum Myeongjo", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
}
.nombre-banda{
  color:#42b983;
  border: 1px solid black;
  background-color: black;
  border-radius: 15px;

  
}
</style>


