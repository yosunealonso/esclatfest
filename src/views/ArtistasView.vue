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
  </div>
</template>