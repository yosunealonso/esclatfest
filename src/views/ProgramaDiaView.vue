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
  <div class="space-y-6">
    
    <div v-if="eventosDelDia.length > 0" class="space-y-4">
      <div 
        v-for="evento in eventosDelDia" 
        :key="evento.id"
        class="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-neutral-700 transition-all group"
      >
        <div class="space-y-3 grow">
          <div class="flex flex-wrap gap-2 items-center text-xs font-mono">
            
            <span class="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-bold">
              <Clock class="h-3.5 w-3.5" />
              {{ evento.hora }}
            </span>
            
            <span class="flex items-center gap-1 text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
              <MapPin class="h-3.5 w-3.5 text-neutral-500" />
              {{ evento.espacio }}
            </span>
          </div>

          <h3 class="text-xl font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
            {{ evento.titulo }}
          </h3>

          <p class="text-sm text-neutral-400 max-w-3xl leading-relaxed">
            {{ evento.descripcion }}
          </p>
        </div>

        <div class="shrink-0">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-neutral-950 border border-neutral-800 text-neutral-300">
            <Tag class="h-3 w-3 text-emerald-400" />
            {{ evento.categoria }}
          </span>
        </div>

      </div>
    </div>

    <div v-else class="text-center py-12 bg-neutral-900/20 rounded-2xl border border-neutral-800 border-dashed">
      <p class="text-neutral-500 text-sm font-medium">
        No hay actividades programadas para este día todavía.
      </p>
    </div>

  </div>
</template>