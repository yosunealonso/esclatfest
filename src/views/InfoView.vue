<script setup lang="ts">
import { ref } from 'vue';
import { FESTIVAL_INFO, FAQS } from '../data/mockData';
import { HelpCircle, ShieldAlert, Map, ChevronDown } from 'lucide-vue-next';

const faqAbierta = ref<number | null>(null);

const toggleFaq = (index: number) => {
  if (faqAbierta.value === index) {
    faqAbierta.value = null;  
  } else {
    faqAbierta.value = index; 
  }
};
</script>

<template>
    <div class="w-full min-h-screen bg-[#fff3d7] text-[#2f1204] py-12 font-articulat-medium">
  <div class="container mx-auto px-4 py-12 max-w-4xl space-y-12 text-[#2f1204] font-articulat-medium">
    
    <div class="space-y-2 text-center">
      <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight text-[#2f1204]">Guía del Asistente</h1>
      <p class="text-[#2f1204]/80 max-w-xl mx-auto text-sm">
        Todo lo que necesitas saber sobre el espacio, entradas y los accesos a ESCLAT 2026.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      
      <div class="bg-[#2f1204] border border-[#2f1204] p-6 rounded-none space-y-4 text-[#fff3d7]">
        <div class="flex items-center gap-2 text-[#7a8c36] font-articulat-bold uppercase tracking-wider text-xs">
          <Map class="h-5 w-5" />
          <h2 class="text-xl font-articulat-bold uppercase text-[#fff3d7]">El Espacio</h2>
        </div>
        <p class="text-sm text-[#fff3d7]/90 leading-relaxed">
          El festival se celebra en <strong class="text-[#fff3d7] font-articulat-bold">Las Naves</strong> (Carrer de Joan Verdeguer, 16, València), un centro de innovación social y creativa perfectamente conectado.
        </p>
        <p class="text-sm text-[#fff3d7]/80 leading-relaxed">
          Las actividades se dividirán entre el Patio Central para grandes directos y la Sala Polivalente para los talleres interactivos.
        </p>
      </div>

      <div class="bg-[#2f1204] border border-[#2f1204] p-6 rounded-none space-y-4 text-[#fff3d7]">
        <div class="flex items-center gap-2 text-[#dd2f03] font-articulat-bold uppercase tracking-wider text-xs">
          <ShieldAlert class="h-5 w-5" />
          <h2 class="text-xl font-articulat-bold uppercase text-[#fff3d7]">Normas de Convivencia</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(norma, index) in FESTIVAL_INFO.normas" :key="index" class="text-sm text-[#fff3d7]/90 flex items-start gap-2.5 leading-relaxed">
            <span class="h-5 w-5 rounded-none bg-[#1a0a02] border border-[#fff3d7]/10 flex items-center justify-center text-xs text-[#dd2f03] font-articulat-bold shrink-0">
              {{ index + 1 }}
            </span>
            <span>{{ norma }}</span>
          </li>
        </ul>
      </div>

    </div>

    <div class="space-y-4 pt-4">
      <div class="flex items-center gap-2 text-[#7a8c36] font-articulat-bold justify-center md:justify-start uppercase tracking-wider text-xs">
        <HelpCircle class="h-5 w-5" />
        <h2 class="text-2xl font-articulat-bold uppercase text-[#2f1204]">Dudas Frecuentes</h2>
      </div>

      <div class="space-y-2">
        <div 
          v-for="(faq, index) in FAQS" 
          :key="index"
          class="bg-[#2f1204] border border-[#2f1204] rounded-none overflow-hidden transition-all text-[#fff3d7]"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-[#1a0a02]/40 transition-colors group"
          >
            <span class="font-articulat-bold uppercase text-[#fff3d7] group-hover:text-[#dd2f03] transition-colors text-sm md:text-base tracking-wide">
              {{ faq.pregunta }}
            </span>
            <ChevronDown 
              :class="[
                'h-5 w-5 text-[#fff3d7]/50 transition-transform duration-300 shrink-0',
                faqAbierta === index ? 'rotate-180 text-[#dd2f03]' : ''
              ]"
            />
          </button>

          <div 
            v-if="faqAbierta === index"
            class="px-5 pb-5 pt-2 text-xs md:text-sm text-[#fff3d7]/80 leading-relaxed border-t border-[#fff3d7]/10 bg-[#1a0a02]/30"
          >
            {{ faq.respuesta }}
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