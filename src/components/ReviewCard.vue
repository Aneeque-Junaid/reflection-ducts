<template>
  <div class="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <!-- Stars -->
    <div class="flex items-center mb-4">
      <div class="flex">
        <Star 
          v-for="star in 5" 
          :key="star"
          :class="[
            'w-5 h-5',
            star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          ]"
        />
      </div>
      <span class="ml-2 text-sm text-gray-600">({{ review.rating }}.0)</span>
    </div>
    
    <!-- Review Text -->
    <blockquote class="text-gray-700 mb-6 italic flex-grow">
      "{{ review.text }}"
    </blockquote>
    
    <!-- Customer Info -->
    <div class="flex items-center mt-auto">
      <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
        {{ review.name.charAt(0) }}
      </div>
      <div class="ml-4">
        <div class="font-semibold text-gray-900">{{ review.name }}</div>
        <div class="text-sm text-gray-600">{{ review.location }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'

interface Review {
  name: string
  location: string
  rating: number
  text: string
}

defineProps<{
  review: Review
}>()
</script>