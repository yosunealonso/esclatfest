<script setup lang="ts">
import { ref, computed } from 'vue';
import { ARTISTAS, type Artista } from '../data/mockData';
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
  <div class="container mx-auto px-4 py-12 max-w-6xl space-y-10">
    
    <div class="space-y-2">
      <div class="flex items-center gap-2 text-emerald-400 font-mono text-sm font-bold uppercase tracking-wider">
        <Sparkles class="h-4 w-4" />
        <span>Line-up Oficial ESCLAT 2026</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-black tracking-tight text-white">
        Creadores y Artistas
      </h1>
      <p class="text-neutral-400 max-w-xl">
        Explora las propuestas que cruzan música, pensamiento y tecnología.
      </p>
    </div>

    <div class="flex flex-wrap gap-3 border-b border-neutral-900 pb-6">
      <button 
        v-for="dis in disciplinas" 
        :key="dis"
        @click="disciplinaSeleccionada = dis"
        :class="[
          'px-4 py-2 rounded-xl text-sm font-semibold transition-all border',
          disciplinaSeleccionada === dis 
            ? 'bg-emerald-400 text-neutral-950 border-emerald-400 shadow-lg shadow-emerald-500/10 scale-105' 
            : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-neutral-200 hover:border-neutral-700'
        ]"
      >
        {{ dis }}
      </button>
    </div>
    <div v-if="artistasFiltrados.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="artista in artistasFiltrados" 
        :key="artista.id"
        class="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden group hover:border-neutral-700 transition-all flex flex-col"
      >
        <div class="aspect-video w-full bg-neutral-950 relative overflow-hidden">
          <img 
            :src="artista.imagen" 
            :alt="artista.nombre"
            class="object-cover w-full h-full filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
          <span class="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono font-bold border border-neutral-800 text-emerald-400">
            {{ artista.disciplina }}
          </span>
        </div>

        <div class="p-6 flex flex-col grow space-y-4">
          <h3 class="text-xl font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
            {{ artista.nombre }}
          </h3>
          
          <p class="text-sm text-neutral-400 leading-relaxed grow">
            {{ artista.bio }}
          </p>

          <div class="space-y-2 pt-4 border-t border-neutral-800/60">
            <span class="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Actividades en el festival:</span>
            <ul class="space-y-1.5">
              <li 
                v-for="(actividad, index) in artista.actividades" 
                :key="index"
                class="text-xs text-neutral-300 flex items-center gap-2"
              >
                <span class="h-1.5 w-1.5 bg-emerald-400 rounded-full shrink-0"></span>
                <span>{{ actividad }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>