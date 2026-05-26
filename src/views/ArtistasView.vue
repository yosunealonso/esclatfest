<script setup lang="ts">
import { ref, computed } from 'vue';
import { ARTISTAS} from '../data/mockData';
import { Sparkles } from 'lucide-vue-next';

const disciplinaSeleccionada = ref<string>('Todas');

const disciplinas = ['Todas', 'Conciertos', 'Dj Sets', 'Talleres', 'Exposiciones', 'Charlas'];

const artistasFiltrados = computed(() => {
  if (disciplinaSeleccionada.value === 'Todas') {
    return ARTISTAS;
  }
  return ARTISTAS.filter(artista => artista.disciplina === disciplinaSeleccionada.value);
});
</script>

<template>
  <div class="w-full bg-[#fff3d7] text-[#2f1204] py-12 font-articulat-medium">
    <div class="container mx-auto px-4 max-w-6xl space-y-10">
      
      <div class="space-y-2">
        <div class="flex items-center gap-2 text-[#7a8c36] font-articulat-bold text-xs uppercase tracking-widest">
          <Sparkles class="h-4 w-4 fill-[#7a8c36]" />
          <span>Line-up Oficial ESCLAT 2026</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight text-[#2f1204]">
          Creadores y Artistas
        </h1>
        <p class="text-[#2f1204]/80 max-w-xl text-sm">
          Explora las propuestas que cruzan música, pensamiento y tecnología.
        </p>
      </div>

      <div class="flex flex-wrap gap-2 border-b-2 border-[#2f1204]/10 pb-6">
        <button 
          v-for="dis in disciplinas" 
          :key="dis"
          @click="disciplinaSeleccionada = dis"
          :class="[
            'px-4 py-2 text-xs uppercase font-articulat-bold border-2 transition-all rounded-none',
            disciplinaSeleccionada === dis 
              ? 'bg-[#dd2f03] text-[#fff3d7] border-[#dd2f03]' 
              : 'bg-transparent text-[#2f1204]/80 border-[#2f1204]/20 hover:border-[#2f1204] hover:bg-[#2f1204]/5'
          ]"
        >
          {{ dis }}
        </button>
      </div>

      <div v-if="artistasFiltrados.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="artista in artistasFiltrados" 
          :key="artista.id"
          class="bg-[#2f1204] text-[#fff3d7] rounded-none overflow-hidden flex flex-col border border-[#2f1204] group"
        >
          <div class="aspect-video w-full bg-[#1a0a02] relative overflow-hidden">
            <img 
              :src="artista.imagen" 
              :alt="artista.nombre"
              class="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <span class="absolute top-2 right-2 bg-[#dd2f03] text-[#fff3d7] px-2 py-0.5 text-[10px] uppercase font-articulat-bold rounded-none">
              {{ artista.disciplina }}
            </span>
          </div>

          <div class="p-5 flex flex-col grow space-y-3">
            <h3 class="text-xl font-articulat-bold uppercase text-[#fff3d7]">
              {{ artista.nombre }}
            </h3>
            
            <p class="text-xs md:text-sm text-[#fff3d7]/90 leading-relaxed grow">
              {{ artista.bio }}
            </p>

            <div class="space-y-2 pt-4 border-t border-[#fff3d7]/10">
              <span class="text-xs font-articulat-bold text-[#7a8c36] uppercase tracking-widest block">Actividades en el festival:</span>
              <ul class="space-y-1">
                <li 
                  v-for="(actividad, index) in artista.actividades" 
                  :key="index"
                  class="text-xs text-[#fff3d7] font-articulat-medium flex items-center gap-2"
                >
                  <span class="h-2 w-2 bg-[#dd2f03] shrink-0 rounded-none"></span>
                  <span>{{ actividad }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.font-articulat-bold {
  font-family: "articulat-cf", sans-serif;
  font-weight: 700;
}
.font-articulat-medium {
  font-family: "articulat-cf", sans-serif;
  font-weight: 600;
}
</style>