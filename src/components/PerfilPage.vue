<template>
  
  <div class="contenedor">
  <div v-for="item in items" :key="item.id" class="carta">
    <!-- Imagen del personaje -->
    <div class="carta-imagen">
      <img :src="item.image" alt="" class="imagen" @click="showCharacterDetails(item)">
    </div>
    <!-- Información del personaje -->
    <div class="carta-info">
      <h2 class="nombre">{{ item.name }}</h2>
      <p class="character">Especie: {{ item.species }}</p>
      <p class="character">Estado: {{ item.status }}</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from '@/axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const items = ref([]);

    const valoresRick = async () => {
      try {
        const response = await axios.get('/character/');
        items.value = response.data.results;
        console.log(items.value);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }

    const showCharacterDetails = (character) => {
      // Obtener enlaces de los episodios y convertirlos como HTML
      const episodeLinks = character.episode.map((episodeUrl) => {
        return `<a href="${episodeUrl}" target="_blank">${episodeUrl}</a>`;
      });

      const episodeDetails = episodeLinks.join('<br>');

      // Abre una nueva ventana con los detalles del personaje y enlaces de episodios
      const characterWindow = window.open();
      if (characterWindow) { // Verifica si se pudo abrir la ventana
        characterWindow.document.write(`
          <html>
            <head>
              <title>${character.name} - Detalles de los Episodios</title>
              <style>
                /* Puedes agregar estilos adicionales aquí */
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                  background-color: #fff; /* Fondo blanco */
                }
                .character-details {
                  margin-top: 20px;
                }
              </style>
            </head>
            <body>
              <h2>Enlaces de los Capítulos:</h2>
              ${episodeDetails}
            </body>
          </html>
        `);
      } else {
        console.error('No se pudo abrir la ventana emergente.');
      }
    }

    onMounted(() => {
      valoresRick();
    });

    return { items, showCharacterDetails };
  }
}
</script>

  
  <style scoped>
 .contenedor {
  display: grid;
  grid-template-columns: repeat(1,1fr);
  padding-top: 12rem;
}

@media (min-width:768px){
    .contenedor{
grid-template-columns: repeat(2, 1fr);
grid-gap: 20px;
padding: 6rem;

 
    }
}

.carta {

display: grid;
grid-template-columns: repeat(1,1fr);
}

@media (min-width:768px){
.carta{
display: flex;
border: 1px solid #ccc;
padding: 10px;
border-radius: 8px;
background-color:#F5F8F9;
gap: 2rem;

    }}



.carta-imagen {
flex: 0 0 auto;
text-align: center;
}

.imagen{
border-radius: 50%;
width: 15rem;
padding-left: 2rem;
}


.carta-info {
border: 1px solid #ccc;
background-color: #BEFFC7;
/* Asegúrate de que el contenido se alinee correctamente */
flex: 1;
padding-top: 3rem;
 /* Añade espacio entre la imagen y la información */
line-height: 2rem;
text-align: center;
}

.nombre{
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 2.8rem;
}
p{
  font-family: "Nanum Myeongjo", serif;
    font-weight: 400;
    font-style: normal;
}
.character{
  font-size: 1rem;

}
  </style>
  