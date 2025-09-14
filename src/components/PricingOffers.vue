<template>
  <section class="py-16 bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Pricing & Packages
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive packages or special deals designed to meet your specific needs and budget.
        </p>
      </div>
      
      <!-- Main Packages -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Basic Package -->
        <div class="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
            <div class="text-4xl font-bold text-primary-600 mb-4">$99</div>
            <p class="text-gray-600">Perfect for regular maintenance</p>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Unlimited Duct Cleaning</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Unlimited Vents Cleaning</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Main Line Cleaning</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Herbal Sanitizer Spray</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Inspection of Furnace, Dryervent, AC etc.</span>
            </li>
          </ul>
          
          <button class="w-full btn-primary">
            Buy Now
          </button>
        </div>
        
        <!-- Premium Package -->
        <div class="bg-white border-2 border-secondary-500 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
          
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
            <div class="text-4xl font-bold text-secondary-600 mb-4">$199</div>
            <p class="text-gray-600">Comprehensive cleaning solution</p>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Unlimited Duct Cleaning</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Unlimited Vents Cleaning</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">DryerVent Cleaning</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Natural Disinfectant Spray</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Inspection of Furnace Units, Coil etc.</span>
            </li>
          </ul>
          
          <button class="w-full btn-secondary">
            Buy Now
          </button>
        </div>
        
        <!-- Deluxe Package -->
        <div class="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Deluxe</h3>
            <div class="text-4xl font-bold text-accent-600 mb-4">$399</div>
            <p class="text-gray-600">Complete premium service</p>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Unlimited Duct Cleaning</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Unlimited Vents Cleaning</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">DryerVent/Exhaust Fan Cleaning</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Brushing Service</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Furnace/AC Coil Cleaning</span>
            </li>
            <li class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700">Natural Disinfectant Spray</span>
            </li>
          </ul>
          
          <button class="w-full btn-accent">
            Buy Now
          </button>
        </div>
      </div>
      
      <!-- Special Deals -->
      <div class="bg-gray-50 rounded-xl p-8">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Special Deals</h3>
          <p class="text-gray-600">Mix and match services for the best value</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="flex justify-between items-center mb-4">
              <h4 class="font-semibold text-gray-900">Ducts + Dryer Vent</h4>
              <span class="text-2xl font-bold text-primary-600">$115</span>
            </div>
            <button class="w-full bg-primary-100 text-primary-700 hover:bg-primary-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Book Now
            </button>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="flex justify-between items-center mb-4">
              <h4 class="font-semibold text-gray-900">Duct + Furnace + Dryer Vent</h4>
              <span class="text-2xl font-bold text-primary-600">$169</span>
            </div>
            <button class="w-full bg-primary-100 text-primary-700 hover:bg-primary-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Book Now
            </button>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="flex justify-between items-center mb-4">
              <h4 class="font-semibold text-gray-900">Duct + Furnace + Dryer Vent + Return Line</h4>
              <span class="text-2xl font-bold text-primary-600">$199</span>
            </div>
            <button class="w-full bg-primary-100 text-primary-700 hover:bg-primary-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Book Now
            </button>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="flex justify-between items-center mb-4">
              <h4 class="font-semibold text-gray-900">Complete + Brushing Service</h4>
              <span class="text-2xl font-bold text-primary-600">$259</span>
            </div>
            <button class="w-full bg-primary-100 text-primary-700 hover:bg-primary-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Book Now
            </button>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div class="flex justify-between items-center mb-4">
              <h4 class="font-semibold text-gray-900">Ultimate Package + AC Coil</h4>
              <span class="text-2xl font-bold text-primary-600">$319</span>
            </div>
            <button class="w-full bg-primary-100 text-primary-700 hover:bg-primary-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Book Now
            </button>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">Not sure which package is right for you?</p>
        <button 
          @click="scrollToForm"
          class="btn-secondary text-lg px-8 py-4"
        >
          Get a Custom Quote
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const scrollToForm = () => {
  const formElement = document.getElementById('lead-form')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

