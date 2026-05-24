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
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-black text-emerald-400 mb-6">ARTISTAS</h1>
    <p class="text-neutral-400">filtros y fichas de los artistas</p>
  </div>
</template>