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
  <div class="w-full min-h-screen  bg-[#fff3d7] text-[#2f1204] py-12 font-articulat-medium overflow-hidden">

    <div class="container mx-auto px-5 max-w-[96%] relative space-y-14">

      <div class="space-y-2 text-left">
        <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight]">
          Guia del Asistente
        </h1>

        <p class="font-articulat-medium border-b-3 border-[#2f1204]/10 pb-6 text-[#2f1204]/80 text-lg">
          Todo lo que necesitas saber sobre el espacio, entradas y los accesos a ESCLAT 2026.
        </p>


        
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        <div class="bg-[#fff3d7] text-[#2f1204]" >
        
          <div class="space-y-6">

            <h2 class="text-3xl md:text-4xl font-articulat-bold uppercase leading-none">
              El Espacio
            </h2>

            <div class="space-y-6 text-xl leading-relaxed">
              <p>
                El festival se celebra en Las Naves (Carrer de Joan Verdeguer, 16, València), un centro de innovación social y creativa perfectamente conectado.
              </p>

              <p>
                Consulte la ubicación de cada actividad en la sección de programa. Dentro del recinto tendrá acceso al folleto del festival, que incluye esta misma información así como un mapa de Las Naves.
              </p>

              <p>
                Consulte la ubicación de cada actividad en la sección de programa. Dentro del recinto tendrá acceso al folleto del festival, que incluye esta misma información así como un mapa de Las Naves.
                En cuanto al transporte público, puede utilizar las líneas 5, 6, 7, y 8 de metro o las líneas 4, 19, 30, 94, 95 y 99 de autobús.
              </p>
            </div>

          </div>
        </div>

        <div class="bg-[#fff3d7] text-[#2f1204] py-10" >

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

      <div class="space-y-6 text-xl leading-relaxed">

        <h2 class="text-3xl md:text-4xl font-articulat-bold uppercase leading-none">
          Dudas Frecuentes
        </h2>

        <div class="space-y-3">

          <div
            v-for="(faq, index) in FAQS"
            :key="index"
            :class="[
              'border-[#aaa59b]/30 border-2 overflow-hidden transition-all duration-300',
              faqAbierta === index
                ? 'bg-[#de3f26] text-[#fff3d7] border-0'
                : 'bg-[#fff3d7] text-[#2f1204]'
            ]"
          >

            <button
              @click="toggleFaq(index)"
              :class="[
                'w-full flex justify-between items-center text-left px-6 py-5 uppercase font-articulat-bold text-lg md:text-2xl transition-all',
                faqAbierta === index
                  ? 'bg-[#de3f26] text-[#fff3d7]'
                  : 'text-[#2f1204] hover:bg-[#de3f26] hover:text-[#fff3d7]']">
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
              class="px-6 pb-6 text-[#fff3d7] text-lg leading-relaxed"
            >
              {{ faq.respuesta }}
            </div>

          </div>
        </div>
      </div>

      <!-- <img
        src="/vinilo.png"
        alt="Decoración vinilo"
        class="absolute left-[-90px] top-[450px] w-[220px] mb-10 z-20 pointer-events-none"
      /> -->

      <img
        src="/1.PNG"
        alt="Decoración estrella"
        class="absolute hidden sm:block lg:right-0 lg:-top-25 lg:w-55 rotate-[12deg] z-20 pointer-events-none"
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