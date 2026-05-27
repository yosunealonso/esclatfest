<script setup lang="ts">
import { computed } from 'vue';
import { AGENDA } from '../data/mockData';
import { Clock, MapPin, Tag } from 'lucide-vue-next'; 

const props = defineProps<{
  dia: 'Viernes 23' | 'Sábado 24' | 'Domingo 25';
}>();

const eventosDelDia = computed(() => {
  return AGENDA.filter(evento => evento.dia === props.dia);
});
</script>

<template>
  <div class="w-full min-h-screen bg-[#fff3d7] text-[#2f1204] py-12 font-articulat-medium">
  <div class="space-y-6 text-[#2f1204] font-articulat-medium">
    
    <div v-if="eventosDelDia.length > 0" class="space-y-4">
      <div 
        v-for="evento in eventosDelDia" 
        :key="evento.id"
        class="bg-[#2f1204] border border-[#2f1204] p-6 rounded-none flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all text-[#fff3d7] group"
      >
        <div class="space-y-3 grow">
          <div class="flex flex-wrap gap-2 items-center text-xs">
            
            <span class="flex items-center gap-1 text-[#fff3d7] bg-[#dd2f03] px-2.5 py-1 rounded-none font-articulat-bold uppercase tracking-wider">
              <Clock class="h-3.5 w-3.5" />
              {{ evento.hora }}
            </span>
            
            <span class="flex items-center gap-1 text-[#fff3d7]/90 bg-[#1a0a02] px-2.5 py-1 rounded-none border border-[#fff3d7]/10 uppercase font-articulat-bold">
              <MapPin class="h-3.5 w-3.5 text-[#7a8c36]" />
              {{ evento.espacio }}
            </span>
          </div>

          <h3 class="text-xl font-articulat-bold uppercase text-[#fff3d7] group-hover:text-[#dd2f03] transition-colors">
            {{ evento.titulo }}
          </h3>

          <p class="text-sm text-[#fff3d7]/80 max-w-3xl leading-relaxed">
            {{ evento.descripcion }}
          </p>
        </div>

        <div class="shrink-0">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-articulat-bold uppercase bg-[#1a0a02] border border-[#fff3d7]/10 text-[#fff3d7]">
            <Tag class="h-3 w-3 text-[#7a8c36]" />
            {{ evento.categoria }}
          </span>
        </div>

      </div>
    </div>

    <div v-else class="text-center py-12 bg-transparent rounded-none border-2 border-[#2f1204]/20 border-dashed">
      <p class="text-[#2f1204]/60 text-sm font-articulat-bold uppercase tracking-wider">
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