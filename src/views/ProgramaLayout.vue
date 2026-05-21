<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-black text-emerald-400 mb-2">PROGRAMACIÓN</h1>
    <p class="text-neutral-400 mb-8">Organizada en un 60% música y 40% pensamiento[cite: 26, 27].</p>

    <div class="flex gap-4 border-b border-neutral-800 pb-4 mb-8">
      <RouterLink to="/programa/viernes" class="px-4 py-2 rounded-md hover:bg-neutral-900 transition-colors" active-class="bg-emerald-400 text-neutral-950 font-bold">Viernes 23</RouterLink>
      <RouterLink to="/programa/sabado" class="px-4 py-2 rounded-md hover:bg-neutral-900 transition-colors" active-class="bg-emerald-400 text-neutral-950 font-bold">Sábado 24</RouterLink>
      <RouterLink to="/programa/domingo" class="px-4 py-2 rounded-md hover:bg-neutral-900 transition-colors" active-class="bg-emerald-400 text-neutral-950 font-bold">Domingo 25</RouterLink>
    </div>

    <RouterView />
  </div>
</template>