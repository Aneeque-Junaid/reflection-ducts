<template>
  <section class="py-16 bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Customers Say
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers have to say about our duct cleaning services.
        </p>
      </div>
      
      <!-- Reviews Carousel -->
      <div class="mb-12">
        <ReviewCarousel />
      </div>
      
      <!-- Review Stats -->
      <div class="bg-primary-50 rounded-xl p-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div class="text-gray-700">Happy Customers</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary-600 mb-2">8+</div>
            <div class="text-gray-700">Years Experience</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div class="text-gray-700">Satisfaction Rate</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div class="text-gray-700">Customer Support</div>
          </div>
        </div>
      </div>
      
      <!-- Social Proof -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-6">Follow us on social media for more customer stories and updates</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://www.facebook.com/Info.reflectionducts" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <Facebook class="w-5 h-5 mr-2" />
            Follow on Facebook
          </a>
          <a 
            href="https://wa.me/+12264552415"
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <MessageCircle class="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MessageCircle, Facebook } from 'lucide-vue-next'
import ReviewCarousel from '@/components/ReviewCarousel.vue'
</script>