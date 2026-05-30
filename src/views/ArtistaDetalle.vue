<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ARTISTAS } from '../data/mockData';

const route = useRoute();

const artista = ARTISTAS.find(
  a => String(a.id) === String(route.params.id)
);

const imagenCabecera = `/cabeceras/${artista?.nombre
  .toLowerCase()
  .replace(/\s+/g, '-')}.cabecera.jpeg`;
</script>

<template>
  <div
    v-if="artista"
    class="min-h-screen bg-[#fff3d7] text-[#2f1204]"
  >
    
  <section class="relative w-full h-[60vh] overflow-hidden">
      
      <img
        :src="imagenCabecera"
        :alt="artista.nombre"
        class="w-full h-full object-cover object-center"
        />
        
      <div class="absolute inset-0 bg-black/40"></div>

      <div class="absolute bottom-10 left-6 md:left-12 lg:left-20 z-10">
        <span class="bg-[#dd2f03] text-[#fff3d7] px-4 py-2 uppercase text-sm font-articulat-bold">
          {{ artista.disciplina }}
        </span>

        <h1 class="mt-4 text-[#fff3d7] text-4xl md:text-5xl uppercase font-articulat-bold">
          {{ artista.nombre }}
        </h1>
      </div>
    </section>

    <section class="px-6 md:px-12 lg:px-20 py-16">
      
      <div class="grid md:grid-cols-2 gap-16 items-end">
        
        <div class="flex flex-col justify-end h-full text-left">
          
          <div>
            <h2 class="font-articulat-bold uppercase text-3xl mb-6">
              Sobre el artista
            </h2>

            <p class="text-lg md:text-xl leading-relaxed">
              {{ artista.bio }}
            </p>

            <div class="mt-12">
              <h3 class="font-articulat-bold uppercase text-2xl mb-4">
                Actividades
              </h3>

              <ul class="space-y-3">
                <li
                  v-for="(actividad, index) in artista.actividades"
                  :key="index"
                  class="flex items-center gap-3 text-lg"
                >
                  <span class="w-3 h-3 bg-[#dd2f03]"></span>
                  {{ actividad }}
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 mt-12">

            <a
              href="/entradas"
              class="bg-[#8baee9] text-[#fff3d7] px-6 py-4 uppercase font-articulat-bold hover:scale-105 transition-transform"
            >
              Comprar entradas
            </a>

          </div>

        </div>

        <div class="overflow-hidden">
          <iframe
            style="border-radius:12px"
            src="https://open.spotify.com/embed/artist/0TnOYISbd1XYRBk9myaseg"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </section>

  </div>
</template>

<style scoped>
.font-articulat-bold {
  font-family: "articulat-cf", sans-serif;
  font-weight: 800;
}

.font-articulat-medium {
  font-family: "articulat-cf", sans-serif;
  font-weight: 600;
}
</style>