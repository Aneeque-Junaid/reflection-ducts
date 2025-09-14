<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
    <WhatsAppFloat />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
</script>

