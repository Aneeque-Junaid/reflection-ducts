<!-- components/RegionSelector.vue -->
<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-lg w-80 text-center space-y-4">

      <h2 class="text-xl font-semibold">Select Your Region</h2>

      <button 
        class="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        @click="set('Ontario')"
      >
        Ontario
      </button>

      <button 
        class="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        @click="set('Alberta')"
      >
        Alberta
      </button>

    </div>
  </div>
</template>

<script setup>
import { useRegionStore } from "@/store/regionStore";
const regionStore = useRegionStore();

function set(value) {
  regionStore.setRegion(value);
}
</script>
