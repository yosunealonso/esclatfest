<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { CalendarDays } from 'lucide-vue-next'; 
</script>

<template>
 <div class="w-full min-h-screen bg-[#fff3d7] text-[#2f1204] py-12 font-articulat-medium">
  <div class="container mx-auto px-5 max-w-[96%]">    
    
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
      
      <div class="lg:col-span-3 space-y-8">
        
        <div class="space-y-2 text-left">
          <div class="flex items-center justify-start gap-2 text-[#7a8c36] font-articulat-bold text-xs uppercase tracking-widest">
            <CalendarDays class="h-4 w-4" />
            <span>Horarios y Espacios oficiales</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight text-[#2f1204]">
            Horarios por día
          </h1>
          <p class="text-[#2f1204]/80 text-lg">
            Descubre la distribucion de actividades y crea tu horario personalizado. 
          </p>
        </div>

        <nav class="flex justify-start bg-[#2f1204] p-1.5 rounded-none border border-[#2f1204] max-w-md w-full">
          <RouterLink 
            to="/programa/viernes" 
            class="flex-1 text-center py-2.5 rounded-none text-xs uppercase font-articulat-bold tracking-wider transition-all text-[#fff3d7]/70 hover:text-[#fff3d7]"
            active-class="bg-[#dd2f03] !text-[#fff3d7] font-articulat-bold"
          >
            Viernes 23
          </RouterLink>
          
          <RouterLink 
            to="/programa/sabado" 
            class="flex-1 text-center py-2.5 rounded-none text-xs uppercase font-articulat-bold tracking-wider transition-all text-[#fff3d7]/70 hover:text-[#fff3d7]"
            active-class="bg-[#dd2f03] !text-[#fff3d7] font-articulat-bold"
          >
            Sábado 24
          </RouterLink>
          
          <RouterLink 
            to="/programa/domingo" 
            class="flex-1 text-center py-2.5 rounded-none text-xs uppercase font-articulat-bold tracking-wider transition-all text-[#fff3d7]/70 hover:text-[#fff3d7]"
            active-class="bg-[#dd2f03] !text-[#fff3d7] font-articulat-bold"
          >
            Domingo 25
          </RouterLink>
        </nav>

        <div class="pt-2">
          <RouterView />
        </div>
      </div>

      <div class="lg:block lg:col-span-2 sticky top-12 flex justify-center overflow-visible">
        <img 
          src="/dos.png" 
          alt="Ilustración del festival" 
          class="w-[130%] max-w-none mt-30 object-contain scale-125 mb-20"
        />
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