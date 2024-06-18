import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Contacto from './components/ContactoPage.vue';
import Perfil from './components/PerfilPage.vue';
import Banda from './components/BandaPage.vue';


const routes = [
  { path: '/',component: HelloWorld },
  { path: '/perfil',name:"perfil", component: Perfil },
  { path: '/banda',name:"banda", component: Banda },
  { path: '/contacto',name:"contacto", component: Contacto },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
