<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { ARTISTAS } from '../data/mockData';

const disciplinaSeleccionada = ref<string>('Todas');

const disciplinas = [
  'Todas',
  'Conciertos',
  'Dj Sets',
  'Talleres',
  'Exposiciones',
  'Charlas'
];

const artistasFiltrados = computed(() => {
  if (disciplinaSeleccionada.value === 'Todas') {
    return ARTISTAS;
  }

  return ARTISTAS.filter(
    artista => artista.disciplina === disciplinaSeleccionada.value
  );
});
</script>

<template>
  <div class="w-full bg-[#fff3d7] text-[#2f1204] py-12 font-articulat-medium">
    
    <div class="container mx-auto px-5 max-w-[96%] space-y-8">
      
      <div class="space-y-2 text-left">
        
        <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight text-[#2f1204]">
          Lineup
        </h1>
        
        <p class="font-articulat-medium text-[#2f1204]/80 text-lg">
          Explora los artistas presentes en esta edición del festival.
        </p>
      </div>

      <div class="flex flex-wrap gap-2 border-b-3 border-[#2f1204]/10 pb-6">
        <button 
          v-for="dis in disciplinas" 
          :key="dis"
          @click="disciplinaSeleccionada = dis"
          :class="[
            'px-4 py-2 text-xs uppercase font-articulat-bold transition-all rounded-none border-[#aaa59b]/50 border-3',
            disciplinaSeleccionada === dis 
              ? 'bg-[#de3f26] text-[#fff3d7]'
              : 'bg-[#fff3d7] text-[#2f1204]/80 hover:bg-[#fff3d7]/50'
          ]"
        >
          {{ dis }}
        </button>
      </div>

      <div
        v-if="artistasFiltrados.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >

        <RouterLink
          v-for="artista in artistasFiltrados"
          :key="artista.id"
          :to="`/artistas/${artista.id}`"
          class="bg-[#fff3d7] border-[#aaa59b]/50 border-3 hover:bg-[#de3f26] hover:border-0 text-[#2f1204] rounded-none overflow-hidden flex flex-col transition-all duration-300 group hover:scale-[1.02]"
        >

          <div class="aspect-video w-full bg-[#1a0a02] relative overflow-hidden">
            <img 
              :src="artista.imagen" 
              :alt="artista.nombre"
              class="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
            />

            <div class="absolute inset-0 bg-[#de3f26] mix-blend-multiply opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>
            
            <span class="absolute top-2 right-2 bg-[#de3f26] group-hover:bg-[#fff3d7] text-[#fff3d7] group-hover:text-[#de3f26] px-2 py-0.5 text-[10px] uppercase font-articulat-bold transition-colors duration-300 z-10">
              {{ artista.disciplina }}
            </span>
          </div>

          <div class="p-4 flex flex-col grow space-y-3">
            <h3 class="text-lg font-articulat-bold uppercase text-[#2f1204] group-hover:text-[#fff3d7] transition-colors duration-300">
              {{ artista.nombre }}
            </h3>
            
            <p class="text-xs md:text-sm text-[#2f1204]/90 group-hover:text-[#fff3d7]/90 leading-relaxed grow line-clamp-3 transition-colors duration-300">
              {{ artista.bio }}
            </p>

            <div class="space-y-1 pt-2.5 border-t border-[#2f1204]/10 group-hover:border-[#fff3d7]/20 transition-colors duration-300">
              <span class="text-[10px] font-articulat-bold text-[#808d26] group-hover:text-[#fff3d7] uppercase tracking-widest block transition-colors duration-300">
                Actividades
              </span>
              <ul class="space-y-0.5">
                <li 
                  v-for="(actividad, index) in artista.actividades" 
                  :key="index"
                  class="text-xs text-[#2f1204] group-hover:text-[#fff3d7] font-articulat-medium flex items-center gap-2 transition-colors duration-300"
                >
                  <span class="h-1.5 w-1.5 bg-[#de3f26] group-hover:bg-[#fff3d7] shrink-0 transition-colors duration-300"></span>
                  <span class="truncate">
                    {{ actividad }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </RouterLink>
      </div>

    </div>
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