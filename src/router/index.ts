import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArtistaDetalle from '../views/ArtistaDetalle.vue';
import MiHorarioView from '../views/MiHorarioView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/artistas',
    name: 'Artistas',
    component: () => import('../views/ArtistasView.vue')
  },
  {
    path: '/artistas/:id',
    name: 'artist-detail',
    component: ArtistaDetalle,
  },
  {
    path: '/programa',
    name: 'ProgramaParent',
    component: () => import('../views/ProgramaLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/programa/viernes'
      },
      {
        path: 'viernes',
        name: 'ProgramaViernes',
        component: () => import('../views/ProgramaDiaView.vue'),
        props: { dia: 'Viernes' }
      },
      {
        path: 'sabado',
        name: 'ProgramaSabado',
        component: () => import('../views/ProgramaDiaView.vue'),
        props: { dia: 'Sábado' }
      },
      {
        path: 'domingo',
        name: 'ProgramaDomingo',
        component: () => import('../views/ProgramaDiaView.vue'),
        props: { dia: 'Domingo' }
      },
      {
        path: 'mihorario',
        name: 'MiHorario',
        component: MiHorarioView
      }
    ]
  },
  {
    path: '/entradas',
    name: 'Entradas',
    component: () => import('../views/EntradasView.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/InfoView.vue')
  },
  {
    path: '/ropa',
    name: 'Ropa',
    component: () => import('../views/Ropa.vue')
  },
  {
    path: '/accesorios',
    name: 'Accesorios',
    component: () => import('../views/Accesorios.vue')
  },
  {
    path: '/posters',
    name: 'IPosters',
    component: () => import('../views/Posters.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;