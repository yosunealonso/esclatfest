<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const mostrarCompra = ref(false);
const compraCompletada = ref(false);
const tipoProducto = ref('');

const compradorNombre = ref('');
const compradorEmail = ref('');
const compradorCantidad = ref(1);
const direccion = ref('');

const abrirCompra = (producto: string) => {
  tipoProducto.value = producto;
  mostrarCompra.value = true;
  compraCompletada.value = false;
};

const cerrarCompra = () => {
  mostrarCompra.value = false;
};

const finalizarCompra = () => {
  compraCompletada.value = true;
};

</script>

<template>
  <div class="w-full min-h-screen bg-[#fff3d7] text-[#2f1204] py-12 overflow-hidden">

    <div class="container mx-auto px-6 ">
        <div class="space-y-2 ml-5">
            <h1 class="text-4xl md:text-5xl font-articulat-bold uppercase tracking-tight ">
                Merch · Posters
            </h1>

            <p class="font-articulat-medium text-[#2f1204]/80 text-lg mb-15">
                    Llévate un recuerdo del festival y descubre nuestra selección de accesorios.
            </p>
        </div>
      

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- poster 1 -->
        <div class="border-4 border-[#c7b8a6] bg-[#fff3d7] p-6 flex flex-col items-center text-center">
          <h3 class="font-articulat-bold uppercase text-2xl mb-4">
                Cartel principal
            </h3>

          <img
            src="/poster1.png"
            alt="Cartel principal"
            class="class=w-64 h-80 object-contain hover:scale-105 transition-transform duration-300"
          />

          <button
            @click="abrirCompra('Cartel principal')"
            class="mt-6 bg-[#dd2f03] text-[#fff3d7] px-8 py-3 uppercase font-articulat-bold hover:opacity-90 transition cursor-pointer"
          >
            Comprar
          </button>
        </div>

        <!-- chapa 1 -->
        <div class="border-4 border-[#c7b8a6] bg-[#fff3d7] p-6 flex flex-col items-center text-center">
          <h3 class="font-articulat-bold uppercase text-2xl mb-4">
                Cartel programación I
            </h3>

          <img
            src="/chapa1.png"
            alt="Chapa logo"
            class="w-64 h-80 object-contain hover:scale-105 transition-transform duration-300"
          />

          <button
            @click="abrirCompra('Chapa logo')"
            class="mt-6 bg-[#dd2f03] text-[#fff3d7] px-8 py-3 uppercase font-articulat-bold hover:opacity-90 transition cursor-pointer"
          >
            Comprar
          </button>
        </div>

        <!-- chapa disco -->
        <div class="border-4 border-[#c7b8a6] bg-[#fff3d7] p-6 flex flex-col items-center text-center">
          <h3 class="font-articulat-bold uppercase text-2xl mb-4">
                Cartel programación II
            </h3>

          <img
            src="/chapaDisco.png"
            alt="Chapa disco"
            class="w-64 h-80 object-contain hover:scale-105 transition-transform duration-300"
          />

          <button
            @click="abrirCompra('Chapa disco')"
            class="mt-6 bg-[#dd2f03] text-[#fff3d7] px-8 py-3 uppercase font-articulat-bold hover:opacity-90 transition cursor-pointer"
          >
            Comprar
          </button>
        </div>

      </div>

    </div>

    <!-- MODAL DE COMPRA -->
    <div
      v-if="mostrarCompra"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
    >
      <div
        :class="[
          'w-full max-w-2xl p-8 relative',
          compraCompletada ? 'bg-[#de3f26]' : 'bg-[#fff3d7]'
        ]"
      >
        <button
          @click="cerrarCompra"
          class="absolute top-4 right-4 text-2xl font-bold"
        >
          ×
        </button>

        <p class="uppercase text-[#dd2f03] font-articulat-bold tracking-widest text-sm">
          Festival ESCLAT 2026
        </p>

        <h3 class="text-[#2f1204] text-3xl uppercase font-articulat-bold mt-2 mb-8">
          Compra de Merch
        </h3>

        <div v-if="!compraCompletada" class="space-y-5">

          <div>
            <label class="block uppercase font-articulat-bold text-sm mb-2">
              Producto
            </label>

            <input
              :value="tipoProducto"
              disabled
              class="w-full border-2 border-[#c7b8a6] bg-[#f5ead1] px-4 py-3"
            />
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
              Dirección postal
            </label>

            <input
              v-model="direccion"
              type="text"
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
            class="w-full bg-[#dd2f03] text-[#fff3d7] py-4 uppercase font-articulat-bold"
          >
            Finalizar compra
          </button>

        </div>

        <div
          v-else
          class="bg-[#fff3d7] border-4 border-[#2f1204] p-8"
        >
          <h3 class="text-4xl font-articulat-bold uppercase mb-8">
            Pedido Confirmado
          </h3>

          <div class="space-y-3 text-lg">
            <p><strong>Producto:</strong> {{ tipoProducto }}</p>
            <p><strong>Nombre:</strong> {{ compradorNombre }}</p>
            <p><strong>Email:</strong> {{ compradorEmail }}</p>
            <p><strong>Cantidad:</strong> {{ compradorCantidad }}</p>
            <p><strong>Estado:</strong> Compra confirmada</p>
            
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