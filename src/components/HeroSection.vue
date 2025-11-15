<template>
  <section class="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-pattern"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="py-20 lg:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Main Headline -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Duct Cleaning –
            <span class="text-secondary-400">Fast, Clean & Reliable</span>
          </h1>
          
          <!-- Subheadline -->
          <p class="text-xl md:text-2xl text-gray-300 mb-8">
            Serving Canada – Ontario, Calgary & Beyond
          </p>
          
          <!-- Features -->
          <div class="flex flex-wrap justify-center gap-6 mb-10">
            <div class="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield class="w-5 h-5 mr-2 text-green-400" />
              <span class="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock class="w-5 h-5 mr-2 text-blue-400" />
              <span class="text-sm font-medium">Same Day Service</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star class="w-5 h-5 mr-2 text-yellow-400" />
              <span class="text-sm font-medium">100% Satisfaction</span>
            </div>
          </div>
          
          <!-- CTA Button -->
          <button 
            @click="scrollToForm"
            class="btn-secondary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get a Free Quote
            <ArrowDown class="w-5 h-5 ml-2 inline" />
          </button>
          
          <!-- Phone Number -->
          <div class="mt-8">
            <a 
              href="tel:+12264552415" 
              class="text-2xl font-bold text-secondary-400 hover:text-secondary-300 transition-colors duration-200 flex items-center justify-center"
            >
              <Phone class="w-6 h-6 mr-2" />
              +1 (226) 455-2415
            </a>
            <p class="text-gray-400 mt-2">Call now for immediate assistance</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, Clock, Star, ArrowDown, Phone } from 'lucide-vue-next'

const scrollToForm = () => {
  const formElement = document.getElementById('lead-form')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>



<style scoped>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>

