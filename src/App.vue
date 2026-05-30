<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { Menu, X} from 'lucide-vue-next'; 
const menuAbierto = ref(false);
const toggleMenu = () => {
  menuAbierto.value = !menuAbierto.value;
};
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col font-sans selection:text-neutral-950">
    
    <header class="bg-[#2f1204] sticky top-0 z-100 shadow-md">
      <div class="w-full px-6 md:px-12 h-16 flex items-center justify-between">     

        <RouterLink to="/" class="font-variex text-[#fff3d7] text-3xl tracking-wide hover:opacity-90 transition-opacity">
          eSclat
        </RouterLink>
        
        <nav class="hidden md:flex items-center space-x-8 font-articulat-medium text-xl tracking-wider">
          <RouterLink to="/artistas" class="text-[#fff3d7] hover:text-[#8bb2f1] transition-colors" active-class="text-[#8bb2f1]">ARTISTAS</RouterLink>
          <RouterLink to="/programa" class="text-[#fff3d7] hover:text-[#8bb2f1] transition-colors" active-class="text-[#8bb2f1]">PROGRAMA</RouterLink>
          <RouterLink to="/entradas" class="text-[#fff3d7] hover:text-[#8bb2f1] transition-colors" active-class="text-[#8bb2f1]">ENTRADAS</RouterLink>
          <RouterLink to="/info" class="text-[#fff3d7] hover:text-[#8bb2f1] transition-colors" active-class="text-[#8bb2f1]">FAQs</RouterLink>
        </nav>

        <button @click="toggleMenu" class="md:hidden p-2 text-[#fff3d7] hover:opacity-80 transition-opacity" aria-label="Abrir menú">
          <Menu v-if="!menuAbierto" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </button>
      </div>

      <div v-if="menuAbierto" class="md:hidden bg-[#2f1204] border-t border-amber-950/20 px-4 py-4 space-y-3 flex flex-col font-articulat text-sm tracking-wider">
        <RouterLink to="/artistas" @click="menuAbierto = false" class="py-2 text-[#fff3d7] hover:text-[#8bb2f1]" active-class="text-[#8bb2f1]">ARTISTAS</RouterLink>
        <RouterLink to="/programa" @click="menuAbierto = false" class="py-2 text-[#fff3d7] hover:text-[#8bb2f1]" active-class="text-[#8bb2f1]">PROGRAMA</RouterLink>
        <RouterLink to="/entradas" @click="menuAbierto = false" class="py-2 text-[#fff3d7] hover:text-[#8bb2f1]" active-class="text-[#8bb2f1]">ENTRADAS</RouterLink>
        <RouterLink to="/info" @click="menuAbierto = false" class="py-2 text-[#fff3d7] hover:text-[#8bb2f1]" active-class="text-[#8bb2f1]">FAQs</RouterLink>
      </div>
    </header>

    <main class="grow">
      <RouterView />
    </main>

    <footer class=" bg-[#2f1204] py-12 text-sm text-[#fff3d7]">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="font-bold text-[#fff3d7] text-base">ESCLAT Festival 2026</p>
          <p class="mt-1">Música, pensament i creativitat jove en Las Naves, València.</p>
        </div>
        <div class="text-neutral-600 text-xs text-center md:text-right">
          <p>esclat bla bla bla</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url("https://use.typekit.net/wzo0fzz.css");

.font-variex {
  font-family: "variex", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.font-articulat {
  font-family: "articulat-cf-medium", sans-serif;
  font-weight: 800;
  font-style: normal;
}
</style>