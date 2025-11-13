<template>
  <div class="fixed bottom-6 right-6 z-50">
    <a 
      href="https://wa.me/+12264552415"
      target="_blank" 
      rel="noopener noreferrer"
      class="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle class="w-6 h-6" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
</script>

