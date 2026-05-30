<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
 <div class="w-full min-h-screen bg-[#fff3d7] text-[#2f1204] py-12">
  <div class="container mx-auto px-5 max-w-[96%]">

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">

      <div class="lg:col-span-3 space-y-8">

        <div class="space-y-2 text-left">
          <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight text-[#2f1204]">
            Horarios por día
          </h1>

          <p class="font-articulat-medium text-[#2f1204]/80 text-lg">
            Descubre la distribucion de actividades y crea tu horario personalizado.
          </p>
        </div>

        <nav class="flex flex-wrap gap-2 border-b-2 border-[#2f1204]/10 pb-6">

          <RouterLink
            to="/programa/viernes"
            class="px-4 py-2 text-xs uppercase font-articulat-bold transition-all rounded-none border-[#aaa59b]/30 border-2 bg-[#fff3d7] text-[#2f1204]/80 hover:bg-[#fff3d7]/50"
            active-class="!bg-[#dd2f03] !text-[#fff3d7] !border-[#dd2f03]"
          >
            Viernes 23
          </RouterLink>

          <RouterLink
            to="/programa/sabado"
            class="px-4 py-2 text-xs uppercase font-articulat-bold transition-all rounded-none border-[#aaa59b]/30 border-2 bg-[#fff3d7] text-[#2f1204]/80 hover:bg-[#fff3d7]/50"
            active-class="!bg-[#dd2f03] !text-[#fff3d7] !border-[#dd2f03]"
          >
            Sábado 24
          </RouterLink>

          <RouterLink
            to="/programa/domingo"
            class="px-4 py-2 text-xs uppercase font-articulat-bold transition-all rounded-none border-[#aaa59b]/30 border-2 bg-[#fff3d7] text-[#2f1204]/80 hover:bg-[#fff3d7]/50"
            active-class="!bg-[#dd2f03] !text-[#fff3d7] !border-[#dd2f03]"
          >
            Domingo 25
          </RouterLink>

          <RouterLink
            to="/programa/mihorario"
            class="px-4 py-2 text-xs uppercase font-articulat-bold transition-all rounded-none border-[#aaa59b]/30 border-2 bg-[#fff3d7] text-[#2f1204]/80 hover:bg-[#fff3d7]/50"
            active-class="!bg-[#dd2f03] !text-[#fff3d7] !border-[#dd2f03]"
          >
            Mi horario
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
  font-weight: 800;
}

.font-articulat-medium {
  font-family: "articulat-cf", sans-serif;
  font-weight: 600;
}
</style>