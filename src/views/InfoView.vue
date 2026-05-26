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
  <div class="container mx-auto px-4 py-12 max-w-4xl space-y-12">
    
    <div class="space-y-2 text-center">
      <h1 class="text-4xl md:text-5xl font-black tracking-tight text-white">Guía del Asistente</h1>
      <p class="text-neutral-400 max-w-xl mx-auto">
        Todo lo que necesitas saber sobre el espacio, entradas y los accesos a ESCLAT 2026.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      
      <div class="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-4">
        <div class="flex items-center gap-2 text-emerald-400 font-bold">
          <Map class="h-5 w-5" />
          <h2 class="text-xl font-bold text-neutral-100">El Espacio</h2>
        </div>
        <p class="text-sm text-neutral-400 leading-relaxed">
          El festival se celebra en <strong class="text-neutral-200">Las Naves</strong> (Carrer de Joan Verdeguer, 16, València), un centro de innovación social y creativa perfectamente conectado.
        </p>
        <p class="text-sm text-neutral-400 leading-relaxed">
          Las actividades se dividirán entre el Patio Central para grandes directos y la Sala Polivalente para los talleres interactivos.
        </p>
      </div>

      <div class="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-4">
        <div class="flex items-center gap-2 text-rose-400 font-bold">
          <ShieldAlert class="h-5 w-5" />
          <h2 class="text-xl font-bold text-neutral-100">Normas de Convivencia</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(norma, index) in FESTIVAL_INFO.normas" :key="index" class="text-sm text-neutral-400 flex items-start gap-2.5 leading-relaxed">
            <span class="h-5 w-5 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-xs text-rose-400 font-mono shrink-0">
              {{ index + 1 }}
            </span>
            <span>{{ norma }}</span>
          </li>
        </ul>
      </div>

    </div>

    <div class="space-y-4 pt-4">
      <div class="flex items-center gap-2 text-emerald-400 font-bold justify-center md:justify-start">
        <HelpCircle class="h-5 w-5" />
        <h2 class="text-2xl font-black text-neutral-100">Dudas Frecuentes</h2>
      </div>

      <div class="space-y-3">
        <div 
          v-for="(faq, index) in FAQS" 
          :key="index"
          class="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-neutral-800/40 transition-colors group"
          >
            <span class="font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors text-sm md:text-base">
              {{ faq.pregunta }}
            </span>
            <ChevronDown 
              :class="[
                'h-5 w-5 text-neutral-500 transition-transform duration-300 shrink-0',
                faqAbierta === index ? 'rotate-180 text-emerald-400' : ''
              ]"
            />
          </button>

          <div 
            v-if="faqAbierta === index"
            class="px-5 pb-5 pt-1 text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/40 bg-neutral-950/20"
          >
            {{ faq.respuesta }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>