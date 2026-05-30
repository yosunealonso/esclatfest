<script setup lang="ts">
import { computed, ref } from 'vue';
import { AGENDA } from '../data/mockData';
import { Clock, MapPin, Tag, Star } from 'lucide-vue-next';

const favoritos = ref<string[]>(
  JSON.parse(localStorage.getItem('favoritos') || '[]')
);

const toggleFavorito = (id: string) => {
  if (favoritos.value.includes(id)) {
    favoritos.value = favoritos.value.filter(f => f !== id);
  } else {
    favoritos.value.push(id);
  }

  localStorage.setItem(
    'favoritos',
    JSON.stringify(favoritos.value)
  );
};

const esFavorito = (id: string) => {
  return favoritos.value.includes(id);
};

const props = defineProps<{
  dia: 'Viernes' | 'Sábado' | 'Domingo';
}>();

const eventosDelDia = computed(() => {
  return AGENDA.filter(evento => evento.dia === props.dia);
});
</script>

<template>
  <div class="w-full min-h-screen bg-[#fff3d7] text-[#2f1204] font-articulat-medium">
    <div class="space-y-6 text-[#2f1204] font-articulat-medium">

      <div v-if="eventosDelDia.length > 0" class="space-y-4">
        <div
          v-for="evento in eventosDelDia"
          :key="evento.id"
          class="relative bg-[#fff3d7] border-[#aaa59b]/30 border-3 hover:bg-[#dd2f03] hover:border-0 text-[#2f1204] rounded-none overflow-hidden flex flex-col transition-all duration-300 group hover:shadow-lg p-4 md:p-4"
        >
          <button
            @click="toggleFavorito(evento.id)"
            class="absolute top-4 right-4 z-30 cursor-pointer"
          >
            <Star
              :class="[
                'w-6 h-6 transition-all',
                esFavorito(evento.id)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-[#2f1204] group-hover:text-[#fff3d7]'
              ]"
            />
          </button>
          <div class="space-y-1 grow">
            <div class="flex flex-wrap gap-2 items-center text-xs">

              <span
                class="flex items-center gap-1 text-[#fff3d7] group-hover:text-[#2f1204] bg-[#dd2f03] group-hover:bg-[#fff3d7] px-2.5 py-1 rounded-none font-articulat-bold uppercase tracking-wider"
              >
                <Clock class="h-3.5 w-3.5" />
                {{ evento.hora }}
              </span>

              <span
                class="flex items-center gap-1 text-[#fff3d7]/90 bg-[#1a0a02] px-2.5 py-1 rounded-none border border-[#fff3d7]/10 uppercase font-articulat-bold"
              >
                <MapPin class="h-3.5 w-3.5 text-[#7a8c36]" />
                {{ evento.espacio }}
              </span>
            </div>

            <h3
              class="text-xl font-articulat-bold uppercase text-[#2f1204] group-hover:text-[#fff3d7] transition-colors"
            >
              {{ evento.titulo }}
            </h3>

            <p
              class="text-sm text-[#2f1204] group-hover:text-[#fff3d7] max-w-3xl leading-relaxed pb-2"
            >
              {{ evento.descripcion }}
            </p>
          </div>

          <div class="shrink-0">
            <span
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-articulat-bold uppercase bg-[#1a0a02] border border-[#fff3d7]/10 text-[#fff3d7]"
            >
              <Tag class="h-3 w-3 text-[#7a8c36]" />
              {{ evento.categoria }}
            </span>
          </div>

        </div>
      </div>

      <div
        v-else
        class="text-center py-12 bg-transparent rounded-none border-2 border-[#2f1204]/20 border-dashed"
      >
        <p
          class="text-[#2f1204]/60 text-sm font-articulat-bold uppercase tracking-wider"
        >
          No hay actividades programadas para este día todavía.
        </p>
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