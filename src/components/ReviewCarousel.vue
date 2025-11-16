<template>
  <div class="relative">
    <!-- Carousel Container -->
    <div class="overflow-hidden">
      <div 
        class="flex ease-in-out"
        :class="{ 'transition-transform duration-500': isTransitioning }"
        :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }"
      >
        <div 
          v-for="(review, index) in duplicatedReviews" 
          :key="index"
          class="flex-shrink-0 px-3"
          :style="{ width: `${100 / itemsPerView}%` }"
        >
          <ReviewCard :review="review" />
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      @click="prev"
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-10"
    >
      <ChevronLeft class="w-6 h-6 text-gray-700" />
    </button>

    <button
      @click="next"
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-10"
    >
      <ChevronRight class="w-6 h-6 text-gray-700" />
    </button>

    <!-- Dots Indicator -->
    <div class="flex justify-center mt-8 gap-2">
      <button
        v-for="(dot, index) in reviews.length"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="[
          index === activeIndex 
            ? 'bg-primary-600 w-8' 
            : 'bg-gray-300 hover:bg-gray-400'
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import ReviewCard from '@/components/ReviewCard.vue'
import { reviews } from '@/utils/contentData'

const currentIndex = ref(0)
const screenWidth = ref(window.innerWidth)
const isTransitioning = ref(true)

const itemsPerView = computed(() => {
  if (screenWidth.value >= 1024) return 3 // lg
  if (screenWidth.value >= 768) return 2 // md
  return 1 // sm
})

// Duplicate reviews for infinite loop
const duplicatedReviews = computed(() => {
  return [...reviews, ...reviews, ...reviews]
})

// Calculate which review is actually active (for dots)
const activeIndex = computed(() => {
  return currentIndex.value % reviews.length
})

const next = () => {
  if (!isTransitioning.value) return
  
  currentIndex.value++
  
  // When we reach the end of the second set, reset to the start of the second set
  if (currentIndex.value >= reviews.length * 2) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = reviews.length
      setTimeout(() => {
        isTransitioning.value = true
      }, 50)
    }, 500)
  }
}

const prev = () => {
  if (!isTransitioning.value) return
  
  currentIndex.value--
  
  // When we reach the start of the second set, reset to the end of the second set
  if (currentIndex.value < reviews.length) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = reviews.length * 2 - 1
      setTimeout(() => {
        isTransitioning.value = true
      }, 50)
    }, 500)
  }
}

const goToSlide = (index: number) => {
  currentIndex.value = reviews.length + index
}

const handleResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  // Start at the middle set for seamless looping
  currentIndex.value = reviews.length
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>