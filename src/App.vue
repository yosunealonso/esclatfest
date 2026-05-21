<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { Menu, X, Zap } from 'lucide-vue-next'; // Iconos de Lucide según requisitos técnicos

const menuAbierto = ref(false);
const toggleMenu = () => {
  menuAbierto.value = !menuAbierto.value;
};
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col font-sans selection:bg-emerald-400 selection:text-neutral-950">
    
    <header class="border-b border-neutral-800 bg-neutral-900/60 backdrop-blur sticky top-0 z-50">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <RouterLink to="/" class="flex items-center gap-2 text-2xl font-black tracking-tighter text-emerald-400 hover:opacity-90 transition-opacity">
          <Zap class="h-6 w-6 fill-emerald-400" />
          <span>ESCLAT.</span>
        </RouterLink>
        
        <nav class="hidden md:flex items-center space-x-8 font-medium text-sm tracking-wide">
          <RouterLink to="/" class="hover:text-emerald-400 transition-colors" active-class="text-emerald-400">Home</RouterLink>
          <RouterLink to="/artistas" class="hover:text-emerald-400 transition-colors" active-class="text-emerald-400">Artistas</RouterLink>
          <RouterLink to="/programa" class="hover:text-emerald-400 transition-colors" active-class="text-emerald-400">Programa</RouterLink>
          <RouterLink to="/entradas" class="hover:text-emerald-400 transition-colors" active-class="text-emerald-400">Entradas / Acceso</RouterLink>
          <RouterLink to="/info" class="hover:text-emerald-400 transition-colors" active-class="text-emerald-400">Espacios & Dudas</RouterLink>
        </nav>

        <button @click="toggleMenu" class="md:hidden p-2 text-neutral-400 hover:text-neutral-100 transition-colors" aria-label="Abrir menú">
          <Menu v-if="!menuAbierto" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </button>
      </div>

      <div v-if="menuAbierto" class="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 py-4 space-y-3 flex flex-col font-medium">
        <RouterLink to="/" @click="menuAbierto = false" class="py-2 hover:text-emerald-400" active-class="text-emerald-400">Home</RouterLink>
        <RouterLink to="/artistas" @click="menuAbierto = false" class="py-2 hover:text-emerald-400" active-class="text-emerald-400">Artistas</RouterLink>
        <RouterLink to="/programa" @click="menuAbierto = false" class="py-2 hover:text-emerald-400" active-class="text-emerald-400">Programa</RouterLink>
        <RouterLink to="/entradas" @click="menuAbierto = false" class="py-2 hover:text-emerald-400" active-class="text-emerald-400">Entradas / Acceso</RouterLink>
        <RouterLink to="/info" @click="menuAbierto = false" class="py-2 hover:text-emerald-400" active-class="text-emerald-400">Espacios & Dudas</RouterLink>
      </div>
    </header>

    <main class="flex-grow">
      <RouterView />
    </main>

    <footer class="border-t border-neutral-900 bg-neutral-950 py-12 text-sm text-neutral-500">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="font-bold text-neutral-300 text-base">ESCLAT Festival 2026</p>
          <p class="mt-1">Música, pensament i creativitat jove en Las Naves, València.</p>
        </div>
        <div class="text-neutral-600 text-xs text-center md:text-right">
          <p>Proyecto Transversal 4 • Grado en Diseño y Tecnologías Creativas</p>
          <p>Facultat de Belles Arts de Sant Carles</p>
        </div>
      </div>
    </footer>
  </div>
</template>