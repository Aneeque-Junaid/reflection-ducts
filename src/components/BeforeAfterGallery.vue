<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Before & After Results
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          See the dramatic difference our professional duct cleaning makes. Click the arrows to reveal the transformation.
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
            <!-- Image Container -->
            <div class="aspect-w-16 aspect-h-12 bg-gray-200 flex items-center justify-center relative overflow-hidden" style="min-height: 250px;">
              <!-- Before Image -->
              <div 
                class="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out"
                :class="activeIndices[index] === 0 ? 'translate-x-0' : '-translate-x-full'"
              >
                <div class="text-center p-8">
                  <Camera class="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p class="text-gray-500 font-medium">Before</p>
                  <p class="text-sm text-gray-400 mt-2">{{ item.title }}</p>
                </div>
              </div>
              
              <!-- After Image -->
              <div 
                class="absolute inset-0 flex items-center justify-center bg-green-50 transition-transform duration-500 ease-in-out"
                :class="activeIndices[index] === 1 ? 'translate-x-0' : 'translate-x-full'"
              >
                <div class="text-center p-8">
                  <Camera class="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <p class="text-green-600 font-medium">After</p>
                  <p class="text-sm text-gray-600 mt-2">Professionally Cleaned</p>
                </div>
              </div>
              
              <!-- Status Badge -->
              <div class="absolute top-4 left-4 z-10">
                <span 
                  class="px-3 py-1 rounded-full text-sm font-semibold text-white transition-colors duration-300"
                  :class="activeIndices[index] === 0 ? 'bg-red-500' : 'bg-green-500'"
                >
                  {{ activeIndices[index] === 0 ? 'Before' : 'After' }}
                </span>
              </div>
              
              <!-- Navigation Arrows -->
              <div class="absolute inset-0 flex items-center justify-between px-2 z-10">
                <button 
                  @click="toggleImage(index, 'prev')"
                  :disabled="activeIndices[index] === 0"
                  class="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200"
                  :class="activeIndices[index] === 0 ? 'opacity-0 cursor-not-allowed' : 'opacity-90 hover:opacity-100'"
                >
                  <ChevronLeft class="w-5 h-5 text-gray-700" />
                </button>
                
                <button 
                  @click="toggleImage(index, 'next')"
                  :disabled="activeIndices[index] === 1"
                  class="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200"
                  :class="activeIndices[index] === 1 ? 'opacity-0 cursor-not-allowed' : 'opacity-90 hover:opacity-100'"
                >
                  <ChevronRight class="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
          
          <!-- Card Content -->
          <div class="p-6">
            <h3 class="font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm">{{ item.description }}</p>
            
            <!-- Progress Dots -->
            <div class="flex justify-center space-x-2 mt-4">
              <div 
                class="w-2 h-2 rounded-full transition-colors duration-300"
                :class="activeIndices[index] === 0 ? 'bg-red-500' : 'bg-gray-300'"
              ></div>
              <div 
                class="w-2 h-2 rounded-full transition-colors duration-300"
                :class="activeIndices[index] === 1 ? 'bg-green-500' : 'bg-gray-300'"
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4 text-lg">Ready to see these results in your home?</p>
        <button 
          @click="scrollToForm"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
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

const activeIndices = ref(Array(6).fill(0)) // 0 = before, 1 = after

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

const toggleImage = (index: number, direction: 'next' | 'prev') => {
  if (direction === 'next' && activeIndices.value[index] === 0) {
    activeIndices.value[index] = 1
  } else if (direction === 'prev' && activeIndices.value[index] === 1) {
    activeIndices.value[index] = 0
  }
}

const scrollToForm = () => {
  const formElement = document.getElementById('lead-form')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>