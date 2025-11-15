<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <RegionSelector v-if="!regionStore.region" />
    <div v-else>
      <AppHeader />
      <main>
        <router-view />
      </main>
      <AppFooter />
      <WhatsAppFloat />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
import RegionSelector from './components/RegionSelector.vue';
import { useRegionStore } from "@/store/regionStore";

const regionStore = useRegionStore();

</script>

