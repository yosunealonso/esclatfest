<script setup lang="ts">
defineProps<{ dia: string }>();
</script>

<template>
  <div class="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
    <h2 class="text-2xl font-bold text-neutral-100 mb-4">Eventos del {{ dia }}</h2>
    <p class="text-neutral-400">eventos filtrados para el {{ dia.toLowerCase() }}.</p>
  </div>
</template>