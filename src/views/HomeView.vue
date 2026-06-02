<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Play } from 'lucide-vue-next';

const fechaObjetivo = new Date('2026-10-23T11:00:00').getTime();

const dias = ref<number>(0);
const horas = ref<number>(0);
const minutes = ref<number>(0);
const segundos = ref<number>(0);

const calcularCuentaRegresiva = () => {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia > 0) {
    dias.value = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    horas.value = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    segundos.value = Math.floor((diferencia % (1000 * 60)) / 1000);
  } else {
    dias.value = 0;
    horas.value = 0;
    minutes.value = 0;
    segundos.value = 0;
  }
};

let intervalo: ReturnType<typeof setInterval>;

onMounted(() => {
  calcularCuentaRegresiva();
  intervalo = setInterval(calcularCuentaRegresiva, 1000);
});

onUnmounted(() => {
  clearInterval(intervalo);
});
</script>

<template>
  <div class="bg-[#fff3d7]">
    
    <div class="w-full bg-[#fff3d7] text-[#dd2f03] font-articulat-demibold text-center py-4 text-4xl md:text-4xl relative">
     {{ dias }} DÍAS, {{ horas }} HORAS, {{ minutes }} MINUTOS Y {{ segundos }} SEGUNDOS PARA ESCLAT 2026
    </div>
    
    <section class="relative min-h-[90vh] flex flex-col items-center justify-between bg-[#dd2f03] py-16 overflow-hidden">      
      
      <img 
        src="/publico.png" 
        class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" 
      />
      
      <div class=" bg-black/30 z-10 pointer-events-none"></div>

      <div class="container mx-auto relative z-20 flex flex-col justify-between h-full w-full flex-1">
        
        <div class="w-full flex justify-center">
          <h1 class="font-variex text-[#fff3d7] text-9xl md:text-[14rem] lg:text-[23rem] select-none text-center">
            eSclat
          </h1>
        </div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end w-full text-[#fff3d7] mt-auto pt-12">
          
          <div class="text-left font-articulat-demibold text-3xl sm:text-4xl md:text-4xl lg:text-6xl uppercase leading-[1.1] max-w-2xl select-none">
            Festival de música<br>pensament i<br>creativitat
          </div>
          
          <div class="text-left md:text-right font-articulat-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl  leading-[1.2] shrink-0 select-none">
            23-25.10<br>2026<br>Las Naves, València
          </div>

        </div>
                
      </div>
    </section>

    <section id="spot" class="w-full bg-[#2f1204] flex items-center justify-center scroll-mt-24">
  
      <div class="aspect-video w-full bg-[#2f1204] border-y-2 border-[#2f1204]/10 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group cursor-pointer">
        
        <div class="absolute inset-0 bg-linear-to-t from-[#2f1204]/40 via-transparent to-transparent opacity-80 z-0"></div>
        
        <div class="h-20 w-20 md:h-24 md:w-24 text-[#fff3d7] bg-[#2f1204] group-hover:bg-[#dd2f03] p-6 md:p-7 rounded-full group-hover:scale-110 transition-all duration-300 relative z-10 flex items-center justify-center shadow-2xl">
          <Play class="h-full w-full fill-[#fff3d7]" />
        </div>

      </div>
    </section>

    
    <section class="w-full bg-[#fff3d7]">
      <div class="grid py-10 md:grid-cols-2 items-end gap-8 w-full mb-5">
        
        <div class="px-8 md:px-16 lg:px-24 flex flex-col items-start justify-center">
          
          <h3 class="font-articulat-bold uppercase text-[#dd2f03] text-2xl md:text-4xl lg:text-5xl">
            Festival de música<br>
            pensamiento y<br>
            creatividad
          </h3>
          
          <p class="mt-8 text-[#dd2f03] font-articulat-demibold text-xl md:text-2xl max-w-2xl">
            Esclat es un festival dirigido a público joven que combina música en directo con talleres, conversaciones y otras propuestas vinculadas a la creación contemporánea. Busca ser una amplificación para las voces de los artistas emergentes del país.
          </p>
          
          <a
          href="/entradas"
          class="mt-8 inline-flex items-center justify-center bg-[#8baee9] hover:scale-105 transition-transform duration-300 px-3 py-3 font-articulat-bold uppercase text-[#fff3d7] text-base md:text-xl"
          >
          Entradas
        </a>
        
      </div>
      
      <div class="flex items-end justify-end md:justify-end self-end">          
        <img
        src="/baterista1.png"
        alt="Baterista ESCLAT"
        class="w-[120%] md:w-[120%] max-w-5xl h-auto object-contain select-none pointer-events-none translate-y-5"
        />
      </div>
      
    </div>
  </section>

  <div class="w-full bg-[#2f1204] overflow-hidden py-6 flex select-none  relative z-30">
    <div class="flex animate-marquee whitespace-nowrap font-articulat-bold text-[#fff3d7] text-3xl md:text-4xl tracking-widest uppercase">
      <span class="mx-4">FESTIVAL DE MUSICA, PENSAMENT I CREATIVIDAD | CONCIERTOS | DJ SETS | TALLERES | CHARLAS | EXPOSICIONES |</span>
      <span class="mx-4">FESTIVAL DE MUSICA, PENSAMENT I CREATIVIDAD | CONCIERTOS | DJ SETS | TALLERES | CHARLAS | EXPOSICIONES |</span>
      <span class="mx-4">FESTIVAL DE MUSICA, PENSAMENT I CREATIVIDAD | CONCIERTOS | DJ SETS | TALLERES | CHARLAS | EXPOSICIONES |</span>
    </div>
  </div>

    <section class="relative w-full bg-[#fff3d7] md:py-15 overflow-x-visible">
  
      <img
        src="/cascos.png"
        alt="Cascos"
        class="absolute -bottom-12.5 w-32 md:w-48 lg:w-56 h-auto object-contain pointer-events-none select-none z-50"
      />

      <div class="relative z-10 px-6 md:px-12 lg:px-16">
        
        <h2 class="font-articulat-bold uppercase text-[#2f1204] text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-14 text-center">
          Escucha la playlist oficial de Esclat 2026
        </h2>

        <div class="w-full rounded-[3rem] overflow-hidden bg-[#dd2f03] p-2 md:p-4">
          
          <iframe
            style="border-radius: 2.5rem"
            src="https://open.spotify.com/embed/playlist/6Dadud4pF7SaHwwfAmgZdi"
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen            
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </section>

    <section class="relative w-full bg-[#8baee9] py-20 md:py-20 overflow-visible">
  
      <img
        src="/estrelaa.png"
        alt="Estrella decorativa"
        class="absolute -bottom-16 md:-bottom-24 -right-10 md:-right-16 w-30 md:w-40 lg:w-60 h-auto object-contain pointer-events-none select-none z-20"
      />

      <div class="relative z-10 px-6 md:px-12 lg:px-16">
        
        <h2 class="font-articulat-bold uppercase text-[#2f1204] text-4xl md:text-4xl lg:text-5xl text-center mb-16">
          Merch
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-end">
          
          <a
            href="/ropa"
            class="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:-rotate-3"
          >
            <img
              src="/camiseta1.png"
              alt="Ropa"
              class="w-44 md:w-56 lg:w-64 h-auto object-contain pointer-events-none select-none transition-transform duration-300"
            />

            <h3 class="mt-10 font-articulat-bold uppercase text-[#2f1204] text-3xl md:text-4xl">
              Ropa
            </h3>
          </a>

          <a
            href="/accesorios"
            class="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:rotate-2"
          >
            <img
              src="/tote.png"
              alt="Accesorios"
              class="w-52 md:w-64 lg:w-72 h-auto object-contain pointer-events-none select-none transition-transform duration-300"
            />

            <h3 class="mt-10 font-articulat-bold uppercase text-[#2f1204] text-3xl md:text-4xl">
              Accesorios
            </h3>
          </a>

          <a
            href="/posters"
            class="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:-rotate-2"
          >
            <img
              src="/poster1.png"
              alt="Posters"
              class="w-49 md:w-60 lg:w-69 h-auto object-contain pointer-events-none select-none transition-transform duration-300"
            />

            <h3 class="mt-10 font-articulat-bold uppercase text-[#2f1204] text-3xl md:text-4xl">
              Posters
            </h3>
          </a>

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
  font-weight: 800;
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