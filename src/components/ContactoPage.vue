<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <div class="recuadro">
      <div class="cuadro_info" v-for="contactoItem in contactos" :key="contactoItem.nombre">
        <img  class="imagen_contacto" :src="contactoItem.imagen" alt="Imagen de {{ contactoItem.nombre }}" />
        <h2 class="nombre-contacto">contacto</h2>
        <h2 class="texto-indicativos">NOMBRE:</h2>
        <h2 class="texto">{{ contactoItem.nombre }}</h2>
        <h2 class="texto-indicativos">APELLIDO:</h2>
        <p class="texto">{{ contactoItem.apellido }}</p>
        <h2 class="texto-indicativos">CORREO:</h2>
        <p class="texto">{{ contactoItem.correo }}</p>
        <h2 class="texto-indicativos">NACIONALIDAD:</h2>
        <p class="texto">{{ contactoItem.nacionalidad }}</p>
        <h2 class="texto-indicativos">TELEFONO:</h2>
        <p class="texto">{{ contactoItem.telefono }}</p>
    </div>
       
      </div>
    
  </template>
  
  <script setup>
  import contactosData from '@/assets/Contacto.json';
  console.log(contactosData);
  // Utilizamos una variable para almacenar los datos
  const contactos = contactosData;
  </script>
  
  <style>
.recuadro{
    text-align: center;
    margin: 15rem 1rem ;
 
}

@media (min-width:768px){
    .recuadro{
      text-align: center;
    margin: 10rem 30rem;
    }
    
}

  .cuadro_info{
    display: grid;
    padding-top: 10rem;
    border: 7px solid  #42b983;;
    padding: 10px;
    border-radius: 8px;
    background-color:#F5F8F9;
    line-height: 1rem;
  }
  /* Estilos opcionales */
  .nombre-contacto{
    font-size: 4rem;
    color: #42b983;
    text-align: center;
  text-transform: uppercase;
  }

  h2{
    font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  }
  .imagen_contacto{
    width: 10rem;
    padding-top: 2rem;
    padding-left: 5rem;
  
  }

  @media (min-width:768px){
    .imagen_contacto{
      padding-left: 11rem;
    }
  }


.texto-indicativos{
    font-size: 2rem;
}

  .texto{
    font-size: 1.5rem;
    color: white;
    font-family: "Nanum Myeongjo", serif;
    font-weight: 400;
    font-style: normal;
    border: 1px solid black;
    padding: 1rem;
    border-radius: 8px;
    background-color:black;
  }

  </style>
  