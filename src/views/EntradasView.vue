<script setup lang="ts">
import { ref } from 'vue';
import { Ticket, CheckCircle2, GraduationCap, Info, Send } from 'lucide-vue-next';

const inscrito = ref<boolean>(false);
const nombreUsuario = ref<string>('');
const emailUsuario = ref<string>('');
const actividadSeleccionada = ref<string>('');

const procesarInscripcion = () => {
  if (nombreUsuario.value && emailUsuario.value && actividadSeleccionada.value) {
    inscrito.value = true;
  }
};
</script>

<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl space-y-12">
    
    <div class="space-y-2 text-center">
      <h1 class="text-4xl md:text-5xl font-black tracking-tight text-white">Entradas y Acceso</h1>
      <p class="text-neutral-400 max-w-xl mx-auto">
        Consigue tu pase para los conciertos o reserva tu plaza gratuita para las actividades de aprendizaje y pensamiento.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      
      <div class="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between space-y-6">
        <div class="space-y-3">
          <div class="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider bg-emerald-500/10 w-fit px-2.5 py-1 rounded-md border border-emerald-500/20">
            <Ticket class="h-3.5 w-3.5" />
            <span>Acceso con Entrada</span>
          </div>
          <h2 class="text-2xl font-bold text-neutral-100">Conciertos y DJ Sets</h2>
          <p class="text-sm text-neutral-400 leading-relaxed">
            Para disfrutar de los directos de gran formato y las sesiones nocturnas es necesario adquirir una entrada oficial del festival.
          </p>
          
          <div class="flex items-center gap-2.5 bg-neutral-950 p-3 rounded-xl border border-neutral-800 text-xs text-neutral-300">
            <GraduationCap class="h-5 w-5 text-emerald-400 shrink-0" />
            <span><strong>Descuento Estudiantil:</strong> Introduce tu carnet univeritario en la pasarela para obtener un 25% de descuento.</span>
          </div>
        </div>
        
        <button class="w-full text-center py-2.5 bg-emerald-400 hover:bg-emerald-500 text-neutral-950 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/10">
          Comprar Entrada General / Estudiante
        </button>
      </div>

      <div class="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between space-y-6">
        <div class="space-y-3">
          <div class="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider bg-amber-500/10 w-fit px-2.5 py-1 rounded-md border border-amber-500/20">
            <Info class="h-3.5 w-3.5" />
            <span>Gratuito · Aforo Limitado</span>
          </div>
          <h2 class="text-2xl font-bold text-neutral-100">Talleres, Charlas y Expos</h2>
          <p class="text-sm text-neutral-400 leading-relaxed">
            El acceso al conocimiento, laboratorios interactivos y salas de exposiciones es <strong class="text-neutral-200">completamente gratuito</strong>. No obstante, al celebrarse en aulas con capacidad reducida, requiere registro previo.
          </p>
        </div>
        
        <a 
          href="#formulario-registro" 
          @click="actividadSeleccionada = 'Taller Creativo / Charla'"
          class="w-full text-center py-2.5 bg-neutral-950 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 rounded-xl text-sm font-semibold transition-all hover:border-neutral-700"
        >
          Inscribirse a una Actividad
        </a>
      </div>

    </div>

    <div id="formulario-registro" class="text-neutral-600 text-xs font-mono text-center italic pt-4">
      [ El formulario reactivo de inscripción se situará aquí abajo ]
    </div>

  </div>
</template>