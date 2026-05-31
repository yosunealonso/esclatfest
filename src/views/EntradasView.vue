<script setup lang="ts">
import { ref } from 'vue';
import { Ticket, Info } from 'lucide-vue-next';

const actividadSeleccionada = ref<string>('');
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
          class="absolute -top-6 right-0 w-44 md:w-56 pointer-events-none"
        />
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div
          class="border-4 border-[#c7b8a6] bg-[#fff3d7] p-6 md:p-8 flex flex-col justify-between min-h-[340px]"
        >

          <div class="space-y-6">

            <div
              class="bg-[#7d9400] text-[#fff3d7] px-5 py-3 w-fit uppercase text-sm font-articulat-bold flex items-center gap-2">
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
            class="mt-10 bg-[#7d9400] text-[#fff3d7] text-center py-5 uppercase text-xl font-articulat-bold hover:opacity-90 transition block"
          >
            Comprar Entradas / Pases
          </a>

        </div>

        <div
          class="border-4 border-[#c7b8a6] bg-[#fff3d7] p-6 md:p-8 flex flex-col justify-between min-h-[340px]"
        >

          <div class="space-y-6">
            <div
              class="bg-[#89a9e8] text-[#fff3d7] px-5 py-3 w-fit uppercase text-sm font-articulat-bold flex items-center gap-2">
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
            class="mt-10 bg-[#89a9e8] text-[#fff3d7] text-center py-5 uppercase text-xl font-articulat-bold hover:opacity-90 transition"
          >
            Reservar Plaza / Inscribirse
          </a>
        </div>
      </section>

      <img
        src="/estrella.png"
        alt=""
        class="absolute top-[300px] left-[-50px] w-32 md:w-44 pointer-events-none"
      />

      <section
        id="entradas-pases"
        class="scroll-mt-20 border-4 border-[#c7b8a6] bg-[#fff3d7] p-8 md:p-12"
      >
        <h2 class="text-center text-3xl md:text-4xl uppercase font-articulat-bold mb-12">
          Entradas y Pases Completos
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[#7d9400] p-8 text-left text-[#fff3d7] min-h-[360px] flex flex-col justify-between">
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
              class="bg-[#fff3d7] text-[#2f1204] px-8 py-4 uppercase font-articulat-bold"
            >
              Comprar
            </button>
          </div>

          <div class="bg-[#89a9e8] p-8 text-left text-[#fff3d7] min-h-[360px] flex flex-col justify-between">
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
              class="bg-[#fff3d7] text-[#89a9e8] px-8 py-4 uppercase font-articulat-bold"
            >
              Comprar
            </button>
          </div>

          <div class="bg-[#dd2f03] p-8 text-left text-[#fff3d7] min-h-[360px] flex flex-col justify-between">
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
              class="bg-[#fff3d7] text-[#dd2f03] px-8 py-4 uppercase font-articulat-bold"
            >
              Comprar
            </button>
          </div>
        </div>
      </section>

      <section
        id="formulario-registro"
        class="scroll-mt-20 border-4 border-[#c7b8a6] bg-[#fff3d7] p-8 md:p-12 min-h-[500px] relative"
      >
        <h2 class="text-center text-3xl md:text-4xl uppercase font-articulat-bold mb-12">
          Inscripción a Talleres, Charlas y Más
        </h2>
        <div class="max-w-3xl mx-auto">
          <form
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
                id="nombre"
                name="nombre"
                type="text"
                required
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#dd2f03]"
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
                id="email"
                name="email"
                type="email"
                required
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#dd2f03]"
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
                id="telefono"
                name="telefono"
                type="tel"
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#dd2f03]"
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
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#dd2f03]"
              >
                <option disabled value="">
                  Selecciona una actividad
                </option>

                <option>
                  Taller: Ansiedad y Autotune
                </option>

                <option>
                  Charla: ¿Dónde estaban las tías?
                </option>

                <option>
                  Taller de Producción Musical
                </option>

                <option>
                  Visiones Emergentes
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
                id="asistentes"
                name="asistentes"
                type="number"
                min="1"
                max="4"
                value="1"
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#dd2f03]"
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
                class="w-full border-2 border-[#c7b8a6] bg-[#fff3d7] px-4 py-3 outline-none focus:border-[#dd2f03]"
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
              class="w-full bg-[#dd2f03] text-[#fff3d7] py-5 uppercase text-xl font-articulat-bold hover:opacity-90 transition"
            >
              Enviar inscripción
            </button>

          </form>

        </div>

        <img
          src="/estrella.png"
          alt=""
          class="absolute bottom-0 right-0 w-32 md:w-48 pointer-events-none"
        />

      </section>

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