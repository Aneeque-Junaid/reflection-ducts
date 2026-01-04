<template>
  <div id="app" class="min-h-screen bg-gray-50 relative">

    <AppHeader />
    <HeroSection />
    <main>
      <router-view v-if="initialized"/>
    </main>
    <AppFooter />
    <WhatsAppFloat />

    <RegionSelector v-if="!region" class="region-modal" />

  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
import RegionSelector from './components/RegionSelector.vue'
import HeroSection from './components/HeroSection.vue';
import { useRegionStore } from "@/store/regionStore";
import { storeToRefs } from 'pinia'


const { region, initialized } = storeToRefs(useRegionStore());

</script>

<style>
.region-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  backdrop-filter: blur(6px);
}
</style>
