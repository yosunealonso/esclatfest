<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { Ticket, Info } from 'lucide-vue-next';
import * as htmlToImage from 'html-to-image';

const actividadSeleccionada = ref<string>('');

const nombre = ref('');
const email = ref('');
const telefono = ref('');
const asistentes = ref(1);

const inscripcionCompletada = ref(false);
const comprobanteRef = ref<HTMLElement | null>(null);
const comprobanteContainerRef = ref<HTMLElement | null>(null);

const mostrarCompra = ref(false);
const tipoEntrada = ref('');

const compradorNombre = ref('');
const compradorEmail = ref('');
const compradorCantidad = ref(1);
const compraCompletada = ref(false);

const diaSeleccionado = ref('');
const diasSeleccionados = ref<string[]>([]);

const abrirCompra = (tipo: string) => {
  tipoEntrada.value = tipo;
  mostrarCompra.value = true;
  compraCompletada.value = false;

  diaSeleccionado.value = '';
  diasSeleccionados.value = [];
};

const cerrarCompra = () => {
  mostrarCompra.value = false;
};

const finalizarCompra = () => {
  compraCompletada.value = true;
};

const enviarInscripcion = async (e: Event) => {
  e.preventDefault();

  inscripcionCompletada.value = true;

  await nextTick();

  comprobanteContainerRef.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

const descargarComprobante = async () => {
  if (!comprobanteRef.value) return;

  const dataUrl = await htmlToImage.toJpeg(
    comprobanteRef.value,
    {
      quality: 0.95,
      pixelRatio: 2
    }
  );

  const link = document.createElement('a');
  link.download = 'comprobante-esclat.jpg';
  link.href = dataUrl;
  link.click();
};

</script>

<template>
  <div class="w-full min-h-screen bg-[#fff3d7] text-[#2f1204] py-12 overflow-hidden">

    <div class="container mx-auto px-5 max-w-[96%] relative space-y-16">

      <section class="relative">

        <div class="space-y-2">
          <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight">
            Entradas y Acceso
          </h1>

          <p class="font-articulat-medium text-[#2f1204]/80 text-lg">
            Consigue tu entrada para los conciertos o reserva tu plaza gratuita para las actividades.
          </p>
        </div>

        <img
          src="/estrella.png"
          alt=""
          class="absolute top-26 -right-15 w-40 md:w-50 md:top-15 lg:w-60 lg:top-10 lg:-right-20 pointer-events-none"
        />
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div
          class="border-2 border-[#c7b8a6] bg-[#fff3d7] p-6 md:p-8 flex flex-col justify-between min-h-[340px]"
        >

          <div class="space-y-6">

            <div
              class="bg-[#808d26] text-[#fff3d7] px-5 py-3 w-fit uppercase text-sm font-articulat-bold flex items-center gap-2">
              <Ticket class="h-4 w-4" />
              <span>Acceso con Entrada</span>
            </div>

            <div>
              <h2 class="text-2xl md:text-3xl uppercase font-articulat-bold mb-4">
                Conciertos y Shows
              </h2>

              <p class="text-lg leading-relaxed max-w-xl">
                Compra tu entrada para acceder a los conciertos, actuaciones en directo y sesiones especiales del festival.
              </p>
            </div>

          </div>

          <a
            href="#entradas-pases"
            class="mt-10 bg-[#808d26] text-[#fff3d7] text-center py-5 uppercase text-xl font-articulat-bold hover:opacity-90 transition block"
          >
            Comprar Entradas / Pases
          </a>

        </div>

        <div
          class="border-2 border-[#c7b8a6] bg-[#fff3d7] p-6 md:p-8 flex flex-col justify-between min-h-[340px]"
        >

          <div class="space-y-6">
            <div
              class="bg-[#8bb2f1] text-[#fff3d7] px-5 py-3 w-fit uppercase text-sm font-articulat-bold flex items-center gap-2">
              <Info class="h-4 w-4" />
              <span>Gratuito - Aforo Limitado</span>
            </div>

            <div>
              <h2 class="text-2xl md:text-3xl uppercase font-articulat-bold mb-4">
                Talleres, Charlas y Más
              </h2>

              <p class="text-lg leading-relaxed max-w-xl">
                Reserva gratuitamente tu plaza para participar en talleres, exposiciones comentadas, encuentros y actividades especiales.
              </p>

            </div>
          </div>
          <a
            href="#formulario-registro"
            @click="actividadSeleccionada = 'Taller / Charla'"
            class="mt-10 bg-[#8bb2f1] text-[#fff3d7] text-center py-5 uppercase text-xl font-articulat-bold hover:opacity-90 transition"
          >
            Reservar Plaza / Inscribirse
          </a>
        </div>
      </section>

      

      <section
        id="entradas-pases"
        class="scroll-mt-20 border-2 border-[#c7b8a6] bg-[#fff3d7] p-8 md:p-12"
      >
        <h2 class="text-center text-3xl md:text-4xl uppercase font-articulat-bold mb-12">
          Entradas y Pases Completos
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[#808d26] p-8 text-left text-[#fff3d7] min-h-[360px] flex flex-col justify-between">
            <div>
              <h3 class="text-3xl text-center uppercase font-articulat-bold mb-6">
                Entrada x Día
              </h3>
              <p>• Acceso a todos los conciertos de una única jornada del festival.</p>
              <p>• Acceso a las zonas de relax y alimentación.</p>
              <p>• Pulsera para acceder e ingresar libremente al espacio.</p>
              <p>• Entrada conmemorativa personalizada.</p>
            </div>
            <button
              @click="abrirCompra('1 día')"
              class="bg-[#fff3d7] text-[#2f1204] px-8 py-4 uppercase font-articulat-bold cursor-pointer"
            >
              Comprar
            </button>
          </div>

          <div class="bg-[#8bb2f1] p-8 text-left text-[#fff3d7] min-h-[360px] flex flex-col justify-between">
            <div>
              <h3 class="text-3xl text-center uppercase font-articulat-bold mb-6">
                Entrada x 2 Días
              </h3>
              <p>• Acceso a todos los conciertos de dos jornadas a elección del festival.</p>
              <p>• Acceso a las zonas de relax y alimentación.</p>
              <p>• Pulsera para acceder e ingresar libremente al espacio.</p>
              <p>• Entrada conmemorativa personalizada.</p>
            </div>
            <button
              @click="abrirCompra('2 días')"
              class="bg-[#fff3d7] text-[#2f1204] px-8 py-4 uppercase font-articulat-bold cursor-pointer"
            >
              Comprar
            </button>
          </div>

          <div class="bg-[#de3f26] p-8 text-left text-[#fff3d7] min-h-[360px] flex flex-col justify-between">
            <div>
              <h3 class="text-3xl text-center uppercase font-articulat-bold mb-6">
                Abono Completo
              </h3>
              <p>• Acceso a todos los conciertos de las tres jornadas del festival.</p>
              <p>• Acceso a las zonas de relax y alimentación.</p>
              <p>• Pulsera para acceder e ingresar libremente al espacio.</p>
              <p>• Entrada conmemorativa personalizada.</p>
            </div>
            <button
              @click="abrirCompra('abono completo')"
              class="bg-[#fff3d7] text-[#2f1204] px-8 py-4 uppercase font-articulat-bold cursor-pointer"
            >
              Comprar
            </button>
          </div>
        </div>
      </section>

      <section
        id="formulario-registro"
        class="scroll-mt-20 border-2 border-[#c7b8a6] bg-[#fff3d7] p-8 md:p-12 min-h-[500px] relative"
      >
        <h2 class="text-center text-3xl md:text-4xl uppercase font-articulat-bold mb-12">
          Inscripción a Talleres, Charlas y Más
        </h2>
        <div class="max-w-3xl mx-auto">
          <form
            @submit="enviarInscripcion"
            name="inscripciones"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            class="space-y-6"
          >
            <input
              type="hidden"
              name="form-name"
              value="inscripciones"
            />

            <p class="hidden">
              <label>
                No rellenar:
                <input name="bot-field" />
              </label>
            </p>

            <div class="space-y-2">
              <label
                for="nombre"
                class="block uppercase font-articulat-bold text-sm"
              >
                Nombre completo
              </label>

              <input
                v-model="nombre"
                id="nombre"
                name="nombre"
                type="text"
                required
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#de3f26]"
              />
            </div>

            <div class="space-y-2">
              <label
                for="email"
                class="block uppercase font-articulat-bold text-sm"
              >
                Email
              </label>

              <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                required
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#de3f26]"
              />
            </div>

            <div class="space-y-2">
              <label
                for="telefono"
                class="block uppercase font-articulat-bold text-sm"
              >
                Teléfono (opcional)
              </label>

              <input
                v-model="telefono"
                id="telefono"
                name="telefono"
                type="tel"
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#de3f26]"
              />
            </div>

            <div class="space-y-2">
              <label
                for="actividad"
                class="block uppercase font-articulat-bold text-sm"
              >
                Actividad
              </label>

              <select
                id="actividad"
                name="actividad"
                required
                v-model="actividadSeleccionada"
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#de3f26]"
              >
                <option disabled value="">
                  Selecciona una actividad
                </option>

                <option>
                  Taller: Barro y sonido
                </option>

                <option>
                  Taller: Fanzine lab
                </option>

                <option>
                  Taller: Upcycling de ropa
                </option>

                <option>
                  Proyección: Cine de foso
                </option>

                <option>
                  Charla: Ansiedad y autotune
                </option>

                <option>
                  Charla: ¿Dónde estaban las tías?
                </option>

                <option>
                  Charla: El impacto de la IA generativa
                </option>

                <option>
                  Charla: Vivir del cuento (Literalmente)
                </option>

              </select>
            </div>

            <div class="space-y-2">
              <label
                for="asistentes"
                class="block uppercase font-articulat-bold text-sm"
              >
                Número de asistentes
              </label>

              <input
                v-model="asistentes"
                id="asistentes"
                name="asistentes"
                type="number"
                min="1"
                max="4"
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#de3f26]"
              />  
            </div>

            <div class="space-y-2">
              <label
                for="comentarios"
                class="block uppercase font-articulat-bold text-sm"
              >
                Comentarios
              </label>

              <textarea
                id="comentarios"
                name="comentarios"
                rows="4"
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#de3f26]"
                placeholder="Necesidades de accesibilidad, dudas o información adicional..."
              />
            </div>

            <label class="flex items-start gap-3">
              <input
                type="checkbox"
                required
                name="proteccion-datos"
                class="mt-1"
              />

              <span class="text-sm">
                Acepto el tratamiento de mis datos para gestionar la inscripción a las actividades del festival.
              </span>
            </label>

            <button
              type="submit"
              class="w-full bg-[#de3f26] text-[#fff3d7] py-5 uppercase text-xl font-articulat-bold hover:opacity-90 transition"
            >
              Enviar inscripción
            </button>

          </form>

          <div
            v-if="inscripcionCompletada"
            ref="comprobanteContainerRef"
            class="mt-12 space-y-6"
          >
            <div
              ref="comprobanteRef"
              class="bg-[#fff3d7] border-2 border-[#2f1204] p-8 relative overflow-hidden"
            >

              <img
                src="/7.PNG"
                alt=""
                class="absolute top-4 right-4 w-20 opacity-20"
              />

              <p
                class="text-[#de3f26] uppercase font-articulat-bold text-sm tracking-widest"
              >
                Festival ESCLAT 2026
              </p>

              <h3
                class="text-4xl font-articulat-bold uppercase mt-2 mb-8"
              >
                Comprobante de inscripción
              </h3>

              <div class="space-y-3 text-lg">
                <p>
                  <strong>Nombre:</strong>
                  {{ nombre }}
                </p>

                <p>
                  <strong>Email:</strong>
                  {{ email }}
                </p>

                <p>
                  <strong>Actividad:</strong>
                  {{ actividadSeleccionada }}
                </p>

                <p>
                  <strong>Asistentes:</strong>
                  {{ asistentes }}
                </p>

                <p>
                  <strong>Estado:</strong>
                  Reserva confirmada
                </p>
              </div>

              <div class="border-t-2 border-[#2f1204]/20 mt-8 pt-4">
                <p class="uppercase font-articulat-bold">
                  Las Naves · Valencia
                </p>

                <p class="text-sm opacity-70">
                  Presenta este comprobante en el punto de acceso de la actividad.
                </p>
              </div>

              </div>

              <button
                @click="descargarComprobante"
                class="w-full bg-[#808d26] text-[#fff3d7] py-5 uppercase text-xl font-articulat-bold hover:opacity-90 transition"
              >
                Descargar comprobante JPG
              </button>
            </div>

        </div>

        

      </section>

    </div>

    <div
  v-if="mostrarCompra"
  class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto"
>
  <div
    :class="[
      'w-full max-w-2xl p-8 relative max-h-[calc(100vh-2rem)] overflow-y-auto',
      compraCompletada ? 'bg-[#de3f26]' : 'bg-[#fff3d7]'
    ]"
  >
        <button
          @click="cerrarCompra"
          class="absolute top-4 right-4 text-2xl font-bold"
        >
          ×
        </button>

        <p
          class="uppercase text-[#fff3d7] font-articulat-bold tracking-widest text-sm"
        >
          Festival ESCLAT 2026
        </p>

        <h3
          class="text-[#2f1204] text-3xl uppercase font-articulat-bold mt-2 mb-8"
        >
          Compra de entradas
        </h3>

        <div v-if="!compraCompletada" class="space-y-5 ">

          <div>
            <label class="block uppercase font-articulat-bold text-sm mb-2">
              Tipo de entrada
            </label>

            <input
              :value="tipoEntrada"
              disabled
              class="w-full border-2 border-[#c7b8a6] bg-[#f5ead1] px-4 py-3"
            />
          </div>

          <div v-if="tipoEntrada === '1 día'">
            <label class="block uppercase font-articulat-bold text-sm mb-2">
              Selecciona el día
            </label>

            <select
              v-model="diaSeleccionado"
              class="w-full border-2 border-[#c7b8a6] px-4 py-3"
            >
              <option value="">Seleccionar</option>
              <option>Viernes</option>
              <option>Sábado</option>
              <option>Domingo</option>
            </select>
          </div>

          <div v-if="tipoEntrada === '2 días'">
            <label class="block uppercase font-articulat-bold text-sm mb-2">
              Selecciona los días
            </label>

            <div class="space-y-2">
              <label class="flex gap-2">
                <input type="checkbox" value="Viernes" v-model="diasSeleccionados" />
                Viernes
              </label>

              <label class="flex gap-2">
                <input type="checkbox" value="Sábado" v-model="diasSeleccionados" />
                Sábado
              </label>

              <label class="flex gap-2">
                <input type="checkbox" value="Domingo" v-model="diasSeleccionados" />
                Domingo
              </label>
            </div>
          </div>

          <div>
            <label class="block uppercase font-articulat-bold text-sm mb-2">
              Nombre completo
            </label>

            <input
              v-model="compradorNombre"
              type="text"
              class="w-full border-2 border-[#c7b8a6] px-4 py-3"
            />
          </div>

          <div>
            <label class="block uppercase font-articulat-bold text-sm mb-2">
              Email
            </label>

            <input
              v-model="compradorEmail"
              type="email"
              class="w-full border-2 border-[#c7b8a6] px-4 py-3"
            />
          </div>

          <div>
            <label class="block uppercase font-articulat-bold text-sm mb-2">
              Cantidad
            </label>

            <input
              v-model="compradorCantidad"
              type="number"
              min="1"
              max="10"
              class="w-full border-2 border-[#c7b8a6] px-4 py-3"
            />
          </div>

          <button
            @click="finalizarCompra"
            class="w-full bg-[#de3f26] text-[#fff3d7] py-4 uppercase font-articulat-bold"
          >
            Finalizar compra
          </button>

        </div>

        <div
          v-else
          class="bg-[#fff3d7] border-2 border-[#2f1204] p-8 relative overflow-hidden"
        >

         <!-- COMPROBANTE -->

          <p
            class="text-[#de3f26] uppercase font-articulat-bold text-sm tracking-widest"
          >
            Festival ESCLAT 2026
          </p>

          <h3 class="text-4xl font-articulat-bold uppercase mt-2 mb-8">
            Entrada Confirmada
          </h3>

          <div class="space-y-3 text-lg">

            <p>
              <strong>Nombre:</strong>
              {{ compradorNombre }}
            </p>

            <p>
              <strong>Email:</strong>
              {{ compradorEmail }}
            </p>

            <p>
              <strong>Entrada:</strong>
              {{ tipoEntrada }}
            </p>

            <p v-if="tipoEntrada === '1 día'">
              <strong>Día:</strong>
              {{ diaSeleccionado }}
            </p>

            <p v-if="tipoEntrada === '2 días'">
              <strong>Días:</strong>
              {{ diasSeleccionados.join(', ') }}
            </p>

            <p>
              <strong>Cantidad:</strong>
              {{ compradorCantidad }}
            </p>

            <p>
              <strong>Estado:</strong>
              Compra confirmada
            </p>

          </div>

          <div class="text-[#de3f26] border-t-2 border-[#2f1204]/20 mt-8 pt-4">
            <p class="uppercase font-articulat-bold">
              Las Naves · Valencia
            </p>

            <p class="text-sm opacity-70">
              Presenta este ticket en el acceso del festival.
            </p>
          </div>

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