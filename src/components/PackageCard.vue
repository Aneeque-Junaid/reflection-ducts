<template>
  <div
    :class="[
      'bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 relative',
      isPopular ? 'border-secondary-500' : `border-${borderColor}`,
    ]"
  >
    <div
      v-if="isPopular"
      class="absolute -top-4 left-1/2 transform -translate-x-1/2"
    >
      <span class="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
        Most Popular
      </span>
    </div>

    <div class="text-center mb-6">
      <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ name }}</h3>
      <div :class="`text-4xl font-bold text-${color}-600 mb-4`">
        {{ price }}
      </div>
      <p class="text-gray-600">{{ description }}</p>
    </div>

    <ul class="space-y-3 mb-8">
      <li v-for="feature in features" :key="feature" class="flex items-center">
        <Check class="w-5 h-5 text-green-500 mr-3" />
        <span class="text-gray-700">{{ feature }}</span>
      </li>
    </ul>

    <button class="w-full" :class="buttonClass">
      Buy Now
    </button>
  </div>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'

defineProps<{
  name: string
  price: string
  color: string
  description: string
  features: string[]
  borderColor: string
  buttonClass: string
  isPopular?: boolean
}>()

</script>
