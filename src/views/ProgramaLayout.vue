<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { CalendarDays } from 'lucide-vue-next'; 
</script>

<template>
  <div class="container mx-auto px-4 py-12 max-w-5xl space-y-8">
    
    <div class="space-y-2 text-center md:text-left">
      <div class="flex items-center justify-center md:justify-start gap-2 text-emerald-400 font-mono text-sm font-bold uppercase tracking-wider">
        <CalendarDays class="h-4 w-4" />
        <span>Horarios y Espacios oficiales</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-black tracking-tight text-white">
        Programa del Festival
      </h1>
      <p class="text-neutral-400 max-w-xl">
        Descubre la distribución de actividades en Las Naves. 
      </p>
    </div>

    <nav class="flex justify-center md:justify-start bg-neutral-900 p-1.5 rounded-2xl border border-neutral-800 max-w-md w-full">
      <RouterLink 
        to="/programa/viernes" 
        class="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all"
        active-class="bg-emerald-400 text-neutral-950 font-bold shadow-md"
      >
        Viernes 23
      </RouterLink>
      
      <RouterLink 
        to="/programa/sabado" 
        class="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all"
        active-class="bg-emerald-400 text-neutral-950 font-bold shadow-md"
      >
        Sábado 24
      </RouterLink>
      
      <RouterLink 
        to="/programa/domingo" 
        class="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all"
        active-class="bg-emerald-400 text-neutral-950 font-bold shadow-md"
      >
        Domingo 25
      </RouterLink>
    </nav>

    <div class="pt-2">
      <RouterView />
    </div>

  </div>
</template>