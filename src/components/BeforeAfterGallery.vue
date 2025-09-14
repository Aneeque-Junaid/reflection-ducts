<template>
  <section class="py-16 bg-gray-100">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Before & After Results
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          See the dramatic difference our professional duct cleaning makes. These real client transformations speak for themselves.
        </p>
      </div>
      
      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="(item, index) in galleryItems" 
          :key="index"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div class="relative">
            <div class="aspect-w-16 aspect-h-12 bg-gray-200 flex items-center justify-center">
              <div class="text-center p-8">
                <Camera class="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p class="text-gray-500 font-medium">{{ item.title }}</p>
                <p class="text-sm text-gray-400 mt-2">{{ item.description }}</p>
              </div>
            </div>
            <div class="absolute top-4 left-4">
              <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Before
              </span>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                After
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
      
      <!-- Slider Controls (for future implementation) -->
      <div class="flex justify-center items-center space-x-4">
        <button 
          @click="previousSlide"
          class="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
          :disabled="currentSlide === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
        >
          <ChevronLeft class="w-6 h-6 text-gray-600" />
        </button>
        
        <div class="flex space-x-2">
          <div 
            v-for="(_, index) in Math.ceil(galleryItems.length / 3)" 
            :key="index"
            class="w-3 h-3 rounded-full transition-colors duration-200"
            :class="currentSlide === index ? 'bg-primary-500' : 'bg-gray-300'"
          ></div>
        </div>
        
        <button 
          @click="nextSlide"
          class="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
          :disabled="currentSlide === Math.ceil(galleryItems.length / 3) - 1"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === Math.ceil(galleryItems.length / 3) - 1 }"
        >
          <ChevronRight class="w-6 h-6 text-gray-600" />
        </button>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4 text-lg">Ready to see these results in your home?</p>
        <button 
          @click="scrollToForm"
          class="btn-primary text-lg px-8 py-4"
        >
          Schedule Your Cleaning
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Camera, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const currentSlide = ref(0)

const galleryItems = [
  {
    title: 'Residential Duct System',
    description: 'Complete transformation of a home duct system with years of buildup removed.'
  },
  {
    title: 'Dryer Vent Cleaning',
    description: 'Dangerous lint buildup completely removed, improving safety and efficiency.'
  },
  {
    title: 'Furnace Coil Cleaning',
    description: 'HVAC coils restored to like-new condition for optimal performance.'
  },
  {
    title: 'Commercial Ductwork',
    description: 'Office building ductwork cleaned to improve air quality for employees.'
  },
  {
    title: 'Return Air Ducts',
    description: 'Return air system thoroughly cleaned and sanitized.'
  },
  {
    title: 'Vent Covers',
    description: 'All vent covers cleaned and polished to perfection.'
  }
]

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const nextSlide = () => {
  if (currentSlide.value < Math.ceil(galleryItems.length / 3) - 1) {
    currentSlide.value++
  }
}

const scrollToForm = () => {
  const formElement = document.getElementById('lead-form')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

