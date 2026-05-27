<script setup lang="ts">
import { ref } from 'vue';
import { Ticket, Info } from 'lucide-vue-next';

const actividadSeleccionada = ref<string>('');
</script>

<template>
  <div class="w-full min-h-screen bg-[#dd2f03] text-[#2f1204] py-12 overflow-hidden">
    
    <div class="container mx-auto px-5 max-w-[96%] space-y-10 relative">
      
      <div class="space-y-2 text-left">
        <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight text-[#2f1204]">
          Entradas y Acceso
        </h1>

        <p class="text-[#2f1204] text-lg md:text-2xl max-w-4xl leading-relaxed">
          Consigue tu pase para los conciertos o reserva tu plaza gratuita para las actividades.
        </p>
      </div>

      <!-- CARDS -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        
        <!-- CONCIERTOS -->
        <div class="bg-[#fff3d7] p-6 md:p-8 flex flex-col justify-between min-h-[420px] relative z-10">
          
          <div class="space-y-6">
            
            <div class="bg-[#7d9400] text-[#fff3d7] px-5 py-3 w-fit uppercase text-sm font-articulat-bold tracking-wide flex items-center gap-2">
              <Ticket class="h-4 w-4" />
              <span>Acceso con Entrada</span>
            </div>

            <div class="space-y-4">
              <h2 class="text-3xl md:text-4xl font-articulat-bold uppercase leading-none text-[#2f1204]">
                Conciertos y Shows
              </h2>

              <p class="text-lg md:text-2xl leading-relaxed text-[#2f1204] max-w-xl">
                Para disfrutar de los directos de gran formato y las sesiones nocturnas es necesario adquirir una entrada oficial del festival.
              </p>
            </div>
          </div>

          <button class="w-full bg-[#7d9400] hover:opacity-90 transition-all text-[#fff3d7] py-5 uppercase text-2xl font-articulat-bold mt-10">
            Comprar Entradas / Pases
          </button>
        </div>

        <!-- TALLERES -->
        <div class="bg-[#efe4c9] p-6 md:p-8 flex flex-col justify-between min-h-[420px] relative z-10">
          
          <div class="space-y-6">

            <div class="bg-[#89a9e8] text-[#fff3d7] px-5 py-3 w-fit uppercase text-sm font-articulat-bold tracking-wide flex items-center gap-2">
              <Info class="h-4 w-4" />
              <span>Gratuito - Aforo Limitado</span>
            </div>

            <div class="space-y-4">
              <h2 class="text-3xl md:text-4xl font-articulat-bold uppercase leading-none text-[#2f1204]">
                Talleres, Charlas y Mas
              </h2>

              <p class="text-lg md:text-2xl leading-relaxed text-[#2f1204] max-w-xl">
                Para disfrutar de las actividades formativas y experiencias interactivas es necesario reservar plaza previamente.
              </p>
            </div>
          </div>

          <a 
            href="#formulario-registro"
            @click="actividadSeleccionada = 'Taller / Charla'"
            class="w-full bg-[#89a9e8] hover:opacity-90 transition-all text-[#fff3d7] py-5 uppercase text-2xl font-articulat-bold text-center block mt-10"
          >
            Comprar Entradas / Pases
          </a>
        </div>

      </div>

      <!-- IMAGENES DECORATIVAS -->
      
      <!-- izquierda -->
      <img
        src="/teclado.png"
        alt="Decoración teclado"
        class="absolute bottom-[-220px] left-[-110px] w-65 md:w-85 z-20 pointer-events-none scale-120 "
      />

      <!-- derecha -->
      <img
        src="/hojas.png"
        alt="Decoración tickets"
        class="absolute bottom-[-150px] right-[-110px] w-65 md:w-85 z-20 pointer-events-none"
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