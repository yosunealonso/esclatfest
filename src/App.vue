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
  <div class="min-h-screen bg-[#2f1204] text-[#fff3d7] flex flex-col font-sans selection:text-neutral-950">
    
    <header class="bg-[#2f1204] sticky top-0 z-100 shadow-md">
      <div class="w-full px-6 md:px-12 h-16 flex items-center justify-between">     

        <RouterLink to="/" class="font-variex text-[#fff3d7] text-3xl tracking-wide hover:opacity-90 transition-opacity">
          eSclat
        </RouterLink>
        
        <nav class="hidden md:flex items-center space-x-8 font-articulat-medium text-xl tracking-wider">
          <RouterLink to="/artistas" class="text-[#fff3d7] hover:text-[#8bb2f1] transition-colors" active-class="text-[#8bb2f1]">LINEUP</RouterLink>
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

    <div class="container mx-auto px-6 md:px-12 py-16">

        <div>

          <h4 class="font-articulat uppercase text-sm tracking-widest mb-5 text-[#fff3d7]">
            Organiza
          </h4>

          <div class="flex flex-wrap items-center gap-8">

            <img
              src="/logos/esclat.png"
              alt="ESCLAT"
              class="h-10 object-contain"
            />

            <img
              src="/logos/ajuntament.png"
              alt="Ajuntament de València"
              class="h-10 object-contain"
            />

          </div>
        </div>

        <div class="mt-10 pb-12 border-b border-[#fff3d7]/20">
          <h4 class="font-articulat uppercase text-sm tracking-widest mb-5 text-[#fff3d7]">
            Colaboran
          </h4>
          <div class="flex flex-wrap items-center gap-6">

            <img
              src="/logos/diputacio.png"
              alt="Diputació"
              class="h-8 object-contain"
            />

            <img
              src="/logos/ivaj.png"
              alt="IVAJ"
              class="h-8 object-contain"
            />

            <img
              src="/logos/turia.png"
              alt="Turia"
              class="h-8 object-contain"
            />

            <img
              src="/logos/cocacola.png"
              alt="Coca Cola"
              class="h-8 object-contain"
            />

          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-12 mt-12">
          <div class="space-y-4">

            <h3 class="font-articulat text-xl uppercase">
              ESCLAT Festival
            </h3>

            <p class="text-[#fff3d7]/80 leading-relaxed">
              Música, pensament i creativitat jove.
              Un espai de trobada per a la nova cultura emergent.
            </p>

            <p class="text-[#fff3d7]/60 text-sm">
              Las Naves · València
            </p>
          </div>

          <div class="space-y-4">

            <h3 class="font-articulat text-xl uppercase">
              Contacto
            </h3>

            <div class="space-y-2 text-[#fff3d7]/80">
              <p>ayuda@esclatfestival.com</p>
              <p>Valencia, España</p>
            </div>

            <div class="flex gap-4 pt-2">

              <a
                href="https://instagram.com"
                target="_blank"
                class="hover:text-[#8bb2f1] transition-colors"
              >
                Instagram
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                class="hover:text-[#8bb2f1] transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="font-articulat text-xl uppercase">
              Festival
            </h3>

            <div class="flex flex-col gap-2">

              <RouterLink
                to="/artistas"
                class="hover:text-[#8bb2f1] transition-colors"
              >
                Artistas
              </RouterLink>

              <RouterLink
                to="/programa"
                class="hover:text-[#8bb2f1] transition-colors"
              >
                Programa
              </RouterLink>

              <RouterLink
                to="/entradas"
                class="hover:text-[#8bb2f1] transition-colors"
              >
                Entradas
              </RouterLink>

              <RouterLink
                to="/info"
                class="hover:text-[#8bb2f1] transition-colors"
              >
                Información
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="mt-16 pt-8 border-t border-[#fff3d7]/20 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#fff3d7]/60">

          <p>
            © 2026 ESCLAT Festival. Todos los derechos reservados.
          </p>

          <p>
            Diseño y desarrollo del proyecto ESCLAT.
          </p>

        </div>
      </div>
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