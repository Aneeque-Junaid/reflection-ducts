<template>
  <div id="app" class="min-h-screen bg-gray-50 relative">

    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
    <WhatsAppFloat />

    <RegionSelector v-if="!regionStore.region" class="region-modal" />

  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
import RegionSelector from './components/RegionSelector.vue'
import { useRegionStore } from "@/store/regionStore";

const regionStore = useRegionStore();
</script>

<style>
.region-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  backdrop-filter: blur(6px);
}
</style>
