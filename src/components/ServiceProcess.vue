<template>
  <section class="py-16 bg-gray-100">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Cleaning Process
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide professional duct and vent cleaning using a powerful vacuum-truck system to remove dust and debris. The service takes about 90–120 minutes, ending with a Herbal Benefect disinfectant treatment to eliminate bacteria and germs.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="item in stepsData"
          :key="item.step"
          class="text-center group"
        >
          <div class="relative mb-6">
            <div
              class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            >
              <component :is="item.icon" class="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            {{ item.title }}
          </h3>

          <p class="text-gray-600">
            {{ item.description }}
          </p>
        </div>
      </div>
      
      <!-- Process Flow Connector (Desktop) -->
      <div class="hidden lg:block relative mt-8">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full opacity-30"></div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-12">
        <button 
          @click="scrollToForm"
          class="btn-primary text-lg px-8 py-4"
        >
          Start Your Free Inspection
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { stepsData } from '@/utils/contentData'

const scrollToForm = () => {
  const formElement = document.getElementById('lead-form')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

