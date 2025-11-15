<template>
  <div
    class="group relative flex flex-col rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 bg-white overflow-hidden"
  >
    <!-- Diagonal corner ribbon for popular deals -->
    <div
      v-if="popular"
      class="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold py-1 px-12 shadow-lg"
    >
      POPULAR
    </div>

    <!-- Deal badge -->
    <div
      class="absolute top-4 left-4 flex items-center gap-1.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
    >
      <TagIcon class="w-3 h-3" />
      <span>DEAL</span>
    </div>

    <!-- Header -->
    <div class="mt-8 mb-4">
      <h4
        class="font-bold text-gray-900 text-xl mb-1 group-hover:text-primary-700 transition-colors duration-200"
      >
        {{ dealTitle }}
      </h4>
      <div class="flex items-center gap-2 text-sm">
        <span class="text-green-600 font-semibold">{{ savings }}</span>
        <span class="text-gray-400">•</span>
        <span class="text-gray-500">Limited time offer</span>
      </div>
    </div>

    <!-- Services list -->
    <div class="flex-1 mb-6">
      <div
        class="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-xl p-4 border border-gray-100"
      >
        <p
          class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3"
        >
          Includes:
        </p>
        <ul class="space-y-2.5">
          <li
            v-for="(service, index) in services"
            :key="index"
            class="flex items-center gap-3 text-gray-700"
          >
            <div
              class="flex-shrink-0 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center"
            >
              <CheckIcon class="w-3 h-3 text-white stroke-[3]" />
            </div>
            <span class="text-sm font-medium">{{ service }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Price and CTA -->
    <div
      class="flex items-center justify-between pt-4 border-t-2 border-dashed border-gray-200"
    >
      <div>
        <p class="text-xs text-gray-500 font-medium mb-1">Special Price</p>
        <p class="text-3xl font-bold text-primary-700">{{ price }}</p>
      </div>

      <button
        class="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
      >
        <span class="relative z-10 flex items-center gap-2">
          <SparklesIcon class="w-4 h-4" />
          Book Deal
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check as CheckIcon, Sparkles as SparklesIcon, Tag as TagIcon } from 'lucide-vue-next'

defineProps<{
  dealTitle: string
  services: string[]
  price: string
  savings: string
  popular?: boolean
}>()
</script>