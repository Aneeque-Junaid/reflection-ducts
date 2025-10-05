<template>
  <div
    class="group relative flex flex-col rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:-translate-y-1 bg-gradient-to-br from-primary-100 via-primary-50 to-white"
  >
    <div
      class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <div class="flex items-start justify-between mb-5 relative z-10">
      <div>
        <h4
          class="font-semibold text-gray-900 text-lg group-hover:text-primary-700 transition-colors duration-200"
        >
          {{ title }}
        </h4>
        <p class="text-gray-500 text-sm mt-1">Special combo offer</p>
      </div>
      <div
        class="bg-white text-primary-700 font-bold text-xl rounded-lg px-3 py-1 shadow-sm border border-primary-100"
      >
        {{ price }}
      </div>
    </div>

    <!-- 👇 This pushes the bottom section down -->
    <div class="mt-auto flex items-center justify-between pt-6 relative z-10">
      <div class="flex items-center text-gray-500 text-sm">
        <SparklesIcon class="w-4 h-4 text-primary-500 mr-2" />
        <span>Best Value</span>
      </div>

      <button
        class="relative overflow-hidden bg-primary-600 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 group-hover:bg-primary-700 group-hover:shadow-lg"
      >
        <span class="relative z-10">Book Now</span>
        <span
          class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sparkles as SparklesIcon } from 'lucide-vue-next'

defineProps<{
  title: string
  price: string
}>()

</script>
