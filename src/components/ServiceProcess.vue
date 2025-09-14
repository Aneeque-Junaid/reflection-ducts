<template>
  <section class="py-16 bg-gray-100">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How We Work
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Our proven 4-step process ensures thorough, professional duct cleaning that delivers exceptional results every time.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Step 1 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Search class="w-8 h-8 text-white" />
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Book a Free Inspection
          </h3>
          <p class="text-gray-600">
            We start with a comprehensive inspection of your ductwork to assess the cleaning needs and provide an accurate quote.
          </p>
        </div>
        
        <!-- Step 2 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Wrench class="w-8 h-8 text-white" />
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Professional Cleaning
          </h3>
          <p class="text-gray-600">
            Our trained technicians use industry-standard equipment to thoroughly clean your ducts, vents, and HVAC components.
          </p>
        </div>
        
        <!-- Step 3 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <CheckCircle class="w-8 h-8 text-white" />
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Review & Approval
          </h3>
          <p class="text-gray-600">
            We conduct a thorough review of our work with you, ensuring everything meets our high standards and your expectations.
          </p>
        </div>
        
        <!-- Step 4 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Sparkles class="w-8 h-8 text-white" />
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              4
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Results Delivered
          </h3>
          <p class="text-gray-600">
            Enjoy cleaner air, improved HVAC efficiency, and peace of mind knowing your ducts are professionally maintained.
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
import { Search, Wrench, CheckCircle, Sparkles } from 'lucide-vue-next'

const scrollToForm = () => {
  const formElement = document.getElementById('lead-form')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

