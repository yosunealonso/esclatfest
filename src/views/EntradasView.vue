<script setup lang="ts">
import { ref } from 'vue';
import { Ticket, GraduationCap, Info} from 'lucide-vue-next';

// const inscrito = ref<boolean>(false);
// const nombreUsuario = ref<string>('');
// const emailUsuario = ref<string>('');
const actividadSeleccionada = ref<string>('');

// const procesarInscripcion = () => {
//   if (nombreUsuario.value && emailUsuario.value && actividadSeleccionada.value) {
//     inscrito.value = true;
//   }
//};
</script>

<template>
  <div class="w-full min-h-screen bg-[#fff3d7] text-[#2f1204] py-12 font-articulat-medium">
    
    <div class="container mx-auto px-4 max-w-4xl space-y-12">
      
      <div class="space-y-2 text-center">
        <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight text-[#2f1204]">Entradas y Acceso</h1>
        <p class="text-[#2f1204]/80 max-w-xl mx-auto text-sm">
          Consigue tu pase para los conciertos o reserva tu plaza gratuita para las actividades de aprendizaje y pensamiento.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        
        <div class="bg-[#2f1204] border border-[#2f1204] p-6 rounded-none flex flex-col justify-between space-y-6 text-[#fff3d7]">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-[#dd2f03] font-articulat-bold text-xs uppercase tracking-wider bg-[#dd2f03]/10 w-fit px-2.5 py-1 rounded-none border border-[#dd2f03]/20">
              <Ticket class="h-3.5 w-3.5" />
              <span>Acceso con Entrada</span>
            </div>
            <h2 class="text-2xl font-articulat-bold uppercase text-[#fff3d7]">Conciertos y DJ Sets</h2>
            <p class="text-sm text-[#fff3d7]/90 leading-relaxed">
              Para disfrutar de los directos de gran formato y las sesiones nocturnas es necesario adquirir una entrada oficial del festival.
            </p>
            
            <div class="flex items-center gap-2.5 bg-[#1a0a02] p-3 rounded-none border border-[#fff3d7]/10 text-xs text-[#fff3d7]/90">
              <GraduationCap class="h-5 w-5 text-[#7a8c36] shrink-0" />
              <span><strong class="font-articulat-bold">Descuento Estudiantil:</strong> Introduce tu carnet universitario en la pasarela para obtener un 25% de descuento.</span>
            </div>
          </div>
          
          <button class="w-full text-center py-2.5 bg-[#dd2f03] hover:bg-[#dd2f03]/90 text-[#fff3d7] rounded-none text-sm font-articulat-bold uppercase transition-all">
            Comprar Entrada General / Estudiante
          </button>
        </div>

        <div class="bg-[#2f1204] border border-[#2f1204] p-6 rounded-none flex flex-col justify-between space-y-6 text-[#fff3d7]">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-[#7a8c36] font-articulat-bold text-xs uppercase tracking-wider bg-[#7a8c36]/10 w-fit px-2.5 py-1 rounded-none border border-[#7a8c36]/20">
              <Info class="h-3.5 w-3.5" />
              <span>Gratuito · Aforo Limitado</span>
            </div>
            <h2 class="text-2xl font-articulat-bold uppercase text-[#fff3d7]">Talleres, Charlas y Expos</h2>
            <p class="text-sm text-[#fff3d7]/90 leading-relaxed">
              El acceso al conocimiento, laboratorios interactivos y salas de exposiciones es <strong class="text-[#fff3d7] font-articulat-bold">completamente gratuito</strong>. No obstante, al celebrarse en aulas con capacidad reducida, requiere registro previo.
            </p>
          </div>
          
          <a 
            href="#formulario-registro" 
            @click="actividadSeleccionada = 'Taller Creativo / Charla'"
            class="w-full text-center py-2.5 bg-[#1a0a02] hover:bg-[#2f1204] text-[#fff3d7] border border-[#fff3d7]/20 rounded-none text-sm font-articulat-bold uppercase transition-all"
          >
            Inscribirse a una Actividad
          </a>
        </div>

      </div>

      <div id="formulario-registro" class="text-[#2f1204]/60 text-xs font-articulat-medium text-center italic pt-4">
        [ El formulario reactivo de inscripción se situará aquí abajo ]
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