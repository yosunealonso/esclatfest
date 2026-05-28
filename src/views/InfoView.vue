<script setup lang="ts">
import { ref } from 'vue';
import { FESTIVAL_INFO, FAQS } from '../data/mockData';
import { ChevronDown } from 'lucide-vue-next';

const faqAbierta = ref<number | null>(null);

const toggleFaq = (index: number) => {
  faqAbierta.value = faqAbierta.value === index ? null : index;
};
</script>

<template>
  <div class="w-full min-h-screen bg-[#efe4c9] text-[#2f1204] py-12 font-articulat-medium overflow-hidden">

    <div class="container mx-auto px-5 max-w-[96%] relative space-y-14">

      <!-- HEADER -->
      <div class="space-y-2 text-left">
        <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight text-[#2f1204]">
          Guia del Asistente
        </h1>

        <p class="text-lg md:text-2xl text-[#2f1204]/90 max-w-4xl leading-relaxed">
          Todo lo que necesitas saber sobre el espacio, entradas y los accesos a ESCLAT 2026.
        </p>
      </div>

      <!-- BLOQUES -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">

        <!-- ESPACIO -->
        <div class="bg-[#7b9200] text-[#fff3d7] p-8 md:p-10 min-h-[320px]">
          
          <div class="space-y-6">

            <h2 class="text-3xl md:text-4xl font-articulat-bold uppercase leading-none">
              El Espacio
            </h2>

            <div class="space-y-6 text-xl leading-relaxed">
              <p>
                El festival se celebra en Las Naves (Carrer de Joan Verdeguer, 16, València), un centro de innovación social y creativa perfectamente conectado.
              </p>

              <p>
                Las actividades se dividirán entre el Patio Central para grandes directos y la Sala Polivalente para los talleres interactivos.
              </p>
            </div>

          </div>
        </div>

        <!-- NORMAS -->
        <div class="bg-[#7b9200] text-[#fff3d7] p-8 md:p-10 min-h-[320px]">

          <div class="space-y-6">

            <h2 class="text-3xl md:text-4xl font-articulat-bold uppercase leading-none">
              Normas de Convivencia
            </h2>

            <ul class="space-y-5 text-xl leading-relaxed">
              <li
                v-for="(norma, index) in FESTIVAL_INFO.normas"
                :key="index"
              >
                {{ norma }}
              </li>
            </ul>

          </div>
        </div>
      </div>

      <!-- FAQS -->
      <div class="space-y-6 relative z-10">

        <h2 class="mt-30 text-3xl md:text-4xl font-articulat-bold uppercase text-[#2f1204]">
          Dudas Frecuentes
        </h2>

        <div class="space-y-3">

          <div
            v-for="(faq, index) in FAQS"
            :key="index"
            class="bg-[#3a0d00] overflow-hidden"
          >

            <button
              @click="toggleFaq(index)"
              class="w-full flex justify-between items-center text-left px-6 py-5 uppercase font-articulat-bold text-[#fff3d7] text-lg md:text-2xl hover:opacity-90 transition-all"
            >
              <span>
                {{ faq.pregunta }}
              </span>

              <ChevronDown
                :class="[
                  'h-6 w-6 transition-transform duration-300 shrink-0',
                  faqAbierta === index ? 'rotate-180' : ''
                ]"
              />
            </button>

            <div
              v-if="faqAbierta === index"
              class="px-6 pb-6 text-[#fff3d7]/90 text-lg leading-relaxed"
            >
              {{ faq.respuesta }}
            </div>

          </div>
        </div>
      </div>

      <!-- DECORACION IZQUIERDA -->
      <img
        src="/vinilo.png"
        alt="Decoración vinilo"
        class="absolute left-[-90px] top-[450px] w-[220px] mb-10 z-20 pointer-events-none"
      />

      <!-- DECORACION DERECHA -->
      <img
        src="/estrella.png"
        alt="Decoración estrella"
        class="absolute right-[-40px] top-[20px] w-[240px] rotate-[12deg] z-20 pointer-events-none"
      />

    </div>
  </div>
</template>

<style scoped>
.font-articulat-bold {
  font-family: "articulat-cf", sans-serif;
  font-weight: 800;
}

.font-articulat-medium {
  font-family: "articulat-cf", sans-serif;
  font-weight: 600;
}
</style>