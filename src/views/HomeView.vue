<script setup lang="ts">
import { Play, Calendar, MapPin, Music, Lightbulb, ArrowRight } from 'lucide-vue-next';
import { FESTIVAL_INFO } from '../data/mockData';
</script>

<template>
  <div class="space-y-16 pb-20">
    
    <section class="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-emerald-950/30 border-b border-neutral-900 px-4 overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50"></div>
      
      <div class="container mx-auto max-w-4xl text-center relative z-10 space-y-6">
        <p class="text-emerald-400 font-mono tracking-widest uppercase text-sm font-bold">
          ¿Y si un festival fuera algo más que música?
        </p>
        
        <h1 class="text-5xl md:text-8xl font-black tracking-tighter text-white">
          {{ FESTIVAL_INFO.nombre }} 
        </h1>
        
        <p class="text-xl md:text-2xl text-neutral-300 font-medium max-w-2xl mx-auto leading-relaxed">
          {{ FESTIVAL_INFO.lema }}
        </p>

        <div class="flex flex-wrap justify-center gap-6 pt-4 text-sm md:text-base text-neutral-400 font-medium">
          <div class="flex items-center gap-2 bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-800">
            <Calendar class="h-4 w-4 text-emerald-400" />
            <span>Del 23 al 25 de octubre de 2026</span> 
          </div>
          <div class="flex items-center gap-2 bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-800">
            <MapPin class="h-4 w-4 text-emerald-400" />
            <span>Las Naves (València)</span>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-4 pt-6">
          <RouterLink to="/entradas" class="inline-flex items-center gap-2 bg-emerald-400 text-neutral-950 font-bold px-6 py-3 rounded-xl hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/10 group">
            Conseguir Acceso
            <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </RouterLink>
          <a href="#spot" class="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-neutral-800 border border-neutral-800 transition-all">
            <Play class="h-4 w-4 fill-white" />
            Ver Spot Promocional
          </a>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 max-w-5xl">
      <div class="grid md:grid-cols-2 gap-8 items-center bg-neutral-900/40 p-8 md:p-12 rounded-3xl border border-neutral-900">
        <div class="space-y-4">
          <h2 class="text-3xl font-black text-neutral-100">Creación joven para escuchar, pensar y crear</h2>
          <p class="text-neutral-400 leading-relaxed">{{ FESTIVAL_INFO.descripcion }}</p>
          <p class="text-neutral-400 leading-relaxed">{{ FESTIVAL_INFO.enfoque }}</p>
        </div>
        <div class="bg-gradient-to-tr from-emerald-500/20 to-neutral-900 p-8 rounded-2xl border border-neutral-800 space-y-4">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 block">Enfoque Crítico</span>
          <p class="text-neutral-300 text-sm md:text-base italic leading-relaxed">
            "{{ FESTIVAL_INFO.valores }}"
          </p>
          <div class="flex gap-3 text-xs font-mono text-neutral-400 pt-2">
            <span class="bg-neutral-950 px-3 py-1 rounded-full border border-neutral-800">#DiversidadCultural</span>
            <span class="bg-neutral-950 px-3 py-1 rounded-full border border-neutral-800">#Género</span>
            <span class="bg-neutral-950 px-3 py-1 rounded-full border border-neutral-800">#Sostenibilidad</span>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 max-w-5xl space-y-8">
      <div class="text-center">
        <h2 class="text-3xl font-black text-neutral-100">¿Qué vas a encontrar?</h2>
        <p class="text-neutral-400 mt-2">Dos grandes bloques diseñados de forma participativa para la cultura contemporánea.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4 relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-8 text-9xl font-black text-neutral-800/20 select-none group-hover:text-emerald-500/10 transition-colors">60%</div>
          <div class="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit">
            <Music class="h-6 w-6" />
          </div>
          <h3 class="text-2xl font-bold text-neutral-100">Música en Directo</h3>
          <p class="text-neutral-400 text-sm leading-relaxed">
            Un 60% de la programación dedicado en exclusiva a conciertos en vivo que combinan de manera orgánica propuestas tanto emergentes como consolidadas.
          </p>
        </div>

        <div class="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4 relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-8 text-9xl font-black text-neutral-800/20 select-none group-hover:text-emerald-500/10 transition-colors">40%</div>
          <div class="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit">
            <Lightbulb class="h-6 w-6" />
          </div>
          <h3 class="text-2xl font-bold text-neutral-100">Pensamiento y Creatividad</h3>
          <p class="text-neutral-400 text-sm leading-relaxed">
            Un 40% centrado en talleres interactivos, conversaciones en formatos accesibles, contenidos audiovisuales y videojuegos independientes.
          </p>
        </div>
      </div>
    </section>

    <section id="spot" class="container mx-auto px-4 max-w-5xl space-y-6 scroll-mt-24">
      <div class="border border-neutral-800 bg-neutral-900/20 p-6 rounded-3xl space-y-4 text-center">
        <div class="max-w-2xl mx-auto space-y-2">
          <h2 class="text-2xl font-black text-neutral-100">Spot Publicitario Oficial</h2>
          <p class="text-sm text-neutral-400">
            Spot animado.
          </p>
        </div>
        <div class="aspect-video w-full max-w-3xl mx-auto bg-neutral-900 rounded-2xl border border-neutral-800 flex flex-col items-center justify-center gap-4 shadow-2xl relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
          <Play class="h-16 w-16 text-emerald-400 bg-emerald-500/10 p-4 rounded-full border border-emerald-400/20 group-hover:scale-110 transition-transform relative z-10 cursor-pointer" />
        </div>
      </div>
    </section>

  </div>
</template>