<script setup lang="ts">
import { computed, ref } from 'vue';
import { AGENDA } from '../data/mockData';
import * as htmlToImage from 'html-to-image';

const horarioRef = ref<HTMLElement | null>(null);

const favoritos = ref<string[]>(
  JSON.parse(localStorage.getItem('favoritos') || '[]')
);

const eventosFavoritos = computed(() =>
  AGENDA.filter(e => favoritos.value.includes(e.id))
);

const viernes = computed(() =>
  eventosFavoritos.value.filter(e => e.dia === 'Viernes')
);

const sabado = computed(() =>
  eventosFavoritos.value.filter(e => e.dia === 'Sábado')
);

const domingo = computed(() =>
  eventosFavoritos.value.filter(e => e.dia === 'Domingo')
);

const descargarHorario = async () => {
  if (!horarioRef.value) return;

  const dataUrl = await htmlToImage.toJpeg(horarioRef.value, {
    quality: 0.95,
    pixelRatio: 2
  });

  const link = document.createElement('a');
  link.download = 'mi-horario-esclat.jpg';
  link.href = dataUrl;
  link.click();
};
</script>

<template>
  <div class="space-y-6">

    <div class="flex justify-between items-center">
      <h1 class="text-4xl font-articulat-bold uppercase text-[#2f1204]">
        Mi horario
      </h1>

      <button
        @click="descargarHorario"
        class="bg-[#de3f26] text-[#fff3d7] px-5 py-3 uppercase font-articulat-bold hover:scale-105 transition-transform"
      >
        Descargar JPG
      </button>
    </div>

    <div
      ref="horarioRef"
      class="bg-[#fff3d7] p-8 md:p-12 border-b-15 border-[#2f1204]/10 pb-6 space-y-10"
    >
        <div
        class="relative border-b-4 border-[#2f1204]/20 pb-10 min-h-65 flex flex-col justify-center items-center overflow-visible"
        >
        <img
            src="/8.PNG"
            alt=""
            class="absolute top-0 left-0 w-20 sm:w-30 md:w-39 object-contain pointer-events-none select-none"
        />
        <img
            src="/1.PNG"
            alt=""
            class="absolute top-35 -right-6 w-20 sm:w-25 sm:right-2 sm:top-25 md:w-33 md:top-18 object-contain pointer-events-none select-none"
        />
        <h1
            class="relative z-10 font-variex text-[#de3f26] text-6xl md:text-8xl leading-none"
        >
            eSclat
        </h1>
        <p
            class="relative z-10 font-articulat-bold uppercase text-[#2f1204] text-xl md:text-3xl mt-5 text-center"
        >
            Mi horario personal
        </p>
        </div>

      <div v-if="viernes.length">
        <h2 class="font-articulat-bold uppercase text-3xl text-[#de3f26] mb-4">
          Viernes 23
        </h2>

        <div class="space-y-3">
          <div
            v-for="evento in viernes"
            :key="evento.id"
            class="border-2 border-[#2f1204]/20 p-4"
          >
            <h3 class="font-articulat-bold uppercase text-xl">
              {{ evento.titulo }}
            </h3>

            <p>
              {{ evento.hora }} · {{ evento.espacio }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="sabado.length">
        <h2 class="font-articulat-bold uppercase text-3xl text-[#de3f26] mb-4">
          Sábado 24
        </h2>

        <div class="space-y-3">
          <div
            v-for="evento in sabado"
            :key="evento.id"
            class="border-2 border-[#2f1204]/20 p-4"
          >
            <h3 class="font-articulat-bold uppercase text-xl">
              {{ evento.titulo }}
            </h3>

            <p>
              {{ evento.hora }} · {{ evento.espacio }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="domingo.length">
        <h2 class="font-articulat-bold uppercase text-3xl text-[#de3f26] mb-4">
          Domingo 25
        </h2>

        <div class="space-y-3">
          <div
            v-for="evento in domingo"
            :key="evento.id"
            class="border-2 border-[#2f1204]/20 p-4"
          >
            <h3 class="font-articulat-bold uppercase text-xl">
              {{ evento.titulo }}
            </h3>

            <p>
              {{ evento.hora }} · {{ evento.espacio }}
            </p>
          </div>
        </div>
      </div>

      <div
        v-if="eventosFavoritos.length === 0"
        class="text-center py-10"
      >
        <p class="text-xl text-[#2f1204]/60 uppercase font-articulat-bold">
          No has añadido actividades a tu horario
        </p>
      </div>

      <div class="border-t-4 border-[#2f1204]/20 pt-6 text-center">
        <p class="uppercase font-articulat-bold text-[#2f1204]">
          Festival ESCLAT 2026 · Valencia
        </p>
      </div>

    </div>

  </div>
</template>

<style scoped>
.font-articulat-bold {
  font-family: "articulat-cf", sans-serif;
  font-weight: 800;
}
</style>