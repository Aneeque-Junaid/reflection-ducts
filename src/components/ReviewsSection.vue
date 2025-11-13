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
      
      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="(review, index) in reviews" 
          :key="index"
          class="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Stars -->
          <div class="flex items-center mb-4">
            <div class="flex">
              <Star 
                v-for="star in 5" 
                :key="star"
                class="w-5 h-5 text-yellow-400 fill-current"
              />
            </div>
            <span class="ml-2 text-sm text-gray-600">(5.0)</span>
          </div>
          
          <!-- Review Text -->
          <blockquote class="text-gray-700 mb-6 italic">
            "{{ review.text }}"
          </blockquote>
          
          <!-- Customer Info -->
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              {{ review.name.charAt(0) }}
            </div>
            <div class="ml-4">
              <div class="font-semibold text-gray-900">{{ review.name }}</div>
              <div class="text-sm text-gray-600">{{ review.location }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Review Stats -->
      <div class="bg-primary-50 rounded-xl p-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div class="text-gray-700">Happy Customers</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary-600 mb-2">15+</div>
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
        <div class="flex justify-center space-x-6">
          <a 
            href="https://www.facebook.com/Info.reflectionducts" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center bg-gradient-to-r from-blue-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <Facebook class="w-5 h-5 mr-2" />
            Follow on Facebook
          </a>
          <a 
            href="https://wa.me/+12264552415"
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
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
import { Star, MessageCircle, Facebook } from 'lucide-vue-next'

const reviews = [
  {
    name: 'Sarah Johnson',
    location: 'Toronto, ON',
    text: 'Absolutely amazing service! The team was professional, punctual, and thorough. My home\'s air quality has improved dramatically since the duct cleaning. Highly recommend Reflection Ducts!'
  },
  {
    name: 'Mike Chen',
    location: 'Calgary, AB',
    text: 'I was impressed by the attention to detail and the before/after photos they showed me. The difference in my HVAC system\'s efficiency is noticeable. Great value for money!'
  },
  {
    name: 'Jennifer Smith',
    location: 'Mississauga, ON',
    text: 'Professional service from start to finish. They explained everything they were doing and left my home cleaner than when they arrived. The air feels so much fresher now!'
  },
  {
    name: 'David Wilson',
    location: 'Brampton, ON',
    text: 'Fast, reliable, and reasonably priced. The technicians were knowledgeable and answered all my questions. I\'ll definitely be using their services again in the future.'
  },
  {
    name: 'Lisa Rodriguez',
    location: 'Oakville, ON',
    text: 'Excellent customer service and quality work. They were able to schedule me in quickly and completed the job efficiently. My allergies have improved significantly!'
  },
  {
    name: 'Robert Taylor',
    location: 'Vaughan, ON',
    text: 'I\'ve used several duct cleaning services over the years, but Reflection Ducts is by far the best. Thorough, professional, and honest. You won\'t be disappointed!'
  }
]
</script>

