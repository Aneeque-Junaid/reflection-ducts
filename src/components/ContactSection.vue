<template>
  <section class="py-16 bg-gray-100">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get In Touch
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to improve your indoor air quality? Contact us today for a free quote or to schedule your duct cleaning service.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Phone -->
          <div class="flex items-start">
            <div class="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mr-4">
              <Phone class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <a 
                href="tel:+16474777772" 
                class="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                (647) 477-7772
              </a>
              <p class="text-gray-600 mt-1">Available 24/7 for emergency services</p>
            </div>
          </div>
          
          <!-- Email -->
          <div class="flex items-start">
            <div class="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mr-4">
              <Mail class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <a 
                href="mailto:info@reflectionducts.com" 
                class="text-lg text-secondary-600 hover:text-secondary-700 transition-colors duration-200"
              >
                info@reflectionducts.com
              </a>
              <p class="text-gray-600 mt-1">We'll respond within 24 hours</p>
            </div>
          </div>
          
          <!-- Service Area -->
          <div class="flex items-start">
            <div class="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mr-4">
              <MapPin class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
              <p class="text-gray-700">
                Ontario: Toronto, Mississauga, Brampton, Oakville, Vaughan, Milton, Burlington
              </p>
              <p class="text-gray-700 mt-1">
                Alberta: Calgary and surrounding areas
              </p>
              <p class="text-gray-600 mt-2">Licensed and insured in all service areas</p>
            </div>
          </div>
          
          <!-- Social Media -->
          <div class="flex items-start">
            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
              <Facebook class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Follow Us</h3>
              <div class="flex space-x-4">
                <a 
                  href="https://www.facebook.com/Info.reflectionducts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <Facebook class="w-5 h-5 mr-2" />
                  @reflectionducts
                </a>
                <a 
                  href="https://wa.me/16474777772" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200"
                >
                  <MessageCircle class="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
              <p class="text-gray-600 mt-2">See our latest work and customer stories</p>
            </div>
          </div>
        </div>
        
        <!-- Quick Contact Form -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
          
          <form @submit.prevent="submitQuickContact" class="space-y-4">
            <div>
              <label for="quickName" class="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="quickName"
                v-model="quickForm.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label for="quickPhone" class="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                id="quickPhone"
                v-model="quickForm.phone"
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                placeholder="Your phone number"
              />
            </div>
            
            <div>
              <label for="quickMessage" class="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="quickMessage"
                v-model="quickForm.message"
                rows="3"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmittingQuick"
              class="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmittingQuick">Send Message</span>
              <span v-else class="flex items-center justify-center">
                <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </span>
            </button>
          </form>
          
          <div v-if="showQuickSuccess" class="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
            Message sent! We'll contact you soon.
          </div>
        </div>
      </div>
      
      <!-- Emergency Service Banner -->
      <div class="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
        <div class="flex items-center justify-center">
          <!-- <AlertCircle class="w-6 h-6 text-red-600 mr-3" /> -->
          <div class="text-center">
            <h3 class="text-lg font-semibold text-red-800">Emergency Duct Cleaning Service</h3>
            <p class="text-red-700">
              Fire damage, flooding, or urgent air quality issues? We provide 24/7 emergency duct cleaning services.
            </p>
            <a 
              href="tel:+16474777772" 
              class="inline-block mt-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Call Now: (647) 477-7772
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Phone, Mail, MapPin, Facebook, MessageCircle, AlertCircle } from 'lucide-vue-next'

const quickForm = reactive({
  name: '',
  phone: '',
  message: ''
})

const isSubmittingQuick = ref(false)
const showQuickSuccess = ref(false)

const submitQuickContact = async () => {
  isSubmittingQuick.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form
    Object.keys(quickForm).forEach(key => {
      quickForm[key as keyof typeof quickForm] = ''
    })
    
    showQuickSuccess.value = true
    setTimeout(() => {
      showQuickSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Quick contact form error:', error)
  } finally {
    isSubmittingQuick.value = false
  }
}
</script>

