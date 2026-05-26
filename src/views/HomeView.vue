<script setup lang="ts">
import { Play } from 'lucide-vue-next';
import { FESTIVAL_INFO } from '../data/mockData';
</script>

<template>
  <div class="pb-20 bg-[#fff3d7]">
    
    <section class="relative min-h-[85vh] flex flex-col items-center justify-center bg-[#dd2f03] px-4 overflow-hidden">      
      
      <div class="absolute lg:text-5xl top-6 left-6 md:left-12 font-articulat-medium text-[#2f1204] md:text-base tracking-wider uppercase">
        20 - 23.10 2026
      </div>

      <div class="absolute lg:text-5xl top-6 right-6 md:right-12 font-articulat-medium text-[#2f1204] md:text-base tracking-wider">
        Las Naves, València
      </div>

      <div class="container mx-auto text-center relative z-10 flex flex-col items-center justify-center pt-24 pb-8">
        
        <h1 class="relative z-10 font-variex text-[#fff3d7] text-7xl md:text-[13rem] lg:text-[16rem] leading-none uppercase select-none">
          esclat
        </h1>
        
        <img 
          src="/baterista.png" 
          alt="Ilustración Baterista ESCLAT" 
          class="relative z-20 -mt-24 md:-mt-52 lg:-mt-55 w-96 md:w-175 lg:w-480 h-auto object-contain pointer-events-none drop-shadow-2xl" 
        />
                
      </div>
    </section>

    <div class="w-full bg-[#2f1204] overflow-hidden py-6 flex select-none border-y border-[#fff3d7]/10 -mt-px relative z-30">
      <div class="flex animate-marquee whitespace-nowrap font-articulat-bold text-[#fff3d7] text-3xl md:text-6xl tracking-widest uppercase">
        <span class="mx-4">FESTIVAL DE MUSICA, PENSAMENT I CREATIVIDAD | CONCIERTOS | DJ SETS | TALLERES | CHARLAS | EXPOSICIONES |</span>
        <span class="mx-4">FESTIVAL DE MUSICA, PENSAMENT I CREATIVIDAD | CONCIERTOS | DJ SETS | TALLERES | CHARLAS | EXPOSICIONES |</span>
        <span class="mx-4">FESTIVAL DE MUSICA, PENSAMENT I CREATIVIDAD | CONCIERTOS | DJ SETS | TALLERES | CHARLAS | EXPOSICIONES |</span>
      </div>
    </div>

    <section class="relative w-full min-h-[75vh] py-24 md:py-32 mt-0 flex items-center justify-center px-4 overflow-hidden">
      
      <img 
        src="/publico.jpg" 
        class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" 
      />

      <div class="absolute inset-0 bg-black/25 z-10 pointer-events-none"></div>

      <div class="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-articulat-bold text-[#fff3d7] uppercase leading-tight drop-shadow-xl">
          Creación joven para escuchar, pensar y crear
        </h2>
        
        <div class="space-y-4 max-w-3xl">
          <p class="text-xl md:text-2xl text-[#fff3d7] font-articulat-demibold leading-relaxed drop-shadow-lg">
            {{ FESTIVAL_INFO.descripcion }}
          </p>
        </div>

      </div>
    </section>

    <section class="w-full mt-0">
      <div class="grid md:grid-cols-2 gap-0 w-full">
        
        <div class="bg-[#8baee9] p-12 md:p-20 flex flex-col justify-start rounded-none border-none">
          <h3 class="text-4xl md:text-5xl lg:text-6xl font-articulat-bold text-[#fff3d7] uppercase tracking-wide mb-6 leading-tight">
            Música<br>en directo
          </h3>
          <p class="text-[#fff3d7] font-articulat-demibold text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl">
            Un 60% de la programación dedicado en exclusiva a conciertos en vivo que combinan de manera orgánica propuestas tanto emergentes como consolidadas.
          </p>
        </div>

        <div class="bg-[#7a8c36] p-12 md:p-20 flex flex-col justify-start items-end text-right rounded-none border-none">
          <h3 class="text-4xl md:text-5xl lg:text-6xl font-articulat-bold text-[#fff3d7] uppercase tracking-wide mb-6 leading-tight">
            Pensamiento<br>y creatividad
          </h3>
          <p class="text-[#fff3d7] font-articulat-demibold text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl">
            Un 40% centrado en talleres interactivos, conversaciones en formatos accesibles, contenidos audiovisuales y videojuegos independientes.
          </p>
        </div>

      </div>
    </section>

    <section id="spot" class="w-full bg-[#fff3d7] py-16 md:py-24 flex items-center justify-center px-4 md:px-12 scroll-mt-24">
      
      <div class="aspect-video w-full max-w-6xl bg-[#dd2f03] border-2 border-[#2f1204]/10 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group cursor-pointer">
        
        <div class="absolute inset-0 bg-linear-to-t from-[#2f1204]/40 via-transparent to-transparent opacity-80 z-0"></div>
        
        <div class="h-20 w-20 md:h-24 md:w-24 text-[#fff3d7] bg-[#2f1204] group-hover:bg-[#7a8c36] p-6 md:p-7 rounded-full border border-[#fff3d7]/20 group-hover:scale-110 transition-all duration-300 relative z-10 flex items-center justify-center shadow-2xl">
          <Play class="h-full w-full fill-[#fff3d7]" />
        </div>

      </div>
    </section>

  </div>
</template>

<style>

.font-variex {
  font-family: "variex", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.font-articulat-bold {
  font-family: "articulat-cf", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.font-articulat-demibold {
  font-family: "articulat-cf", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.font-articulat-medium {
  font-family: "articulat-cf", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee-infinite 25s linear infinite;
}

@keyframes marquee-infinite {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-33.333%, 0, 0);
  }
}
</style>