<template>
  <section id="lead-form" class="py-16 bg-white">
    <div class="container-custom">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get a Free Quote
          </h2>
          <p class="text-lg text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
          </p>
        </div>
        
        <form @submit.prevent="submitForm" class="bg-gray-50 rounded-xl p-8 shadow-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                :class="{ 'border-red-500': errors.name }"
                placeholder="Enter your full name"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
            </div>
            
            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                :class="{ 'border-red-500': errors.phone }"
                placeholder="(647) 123-4567"
                @input="validatePhone"
              />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                :class="{ 'border-red-500': errors.email }"
                placeholder="your@email.com"
                @input="validateEmail"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>
            
            <!-- Postal Code -->
            <div>
              <label for="postalCode" class="block text-sm font-medium text-gray-700 mb-2">
                Postal Code *
              </label>
              <input
                id="postalCode"
                v-model="form.postalCode"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                :class="{ 'border-red-500': errors.postalCode }"
                placeholder="M5A 1A1"
                @input="validatePostalCode"
              />
              <p v-if="errors.postalCode" class="mt-1 text-sm text-red-600">{{ errors.postalCode }}</p>
            </div>
          </div>
          
          <!-- Message -->
          <div class="mb-6">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Service Needed *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              :class="{ 'border-red-500': errors.message }"
              placeholder="Please describe the service you need (e.g., residential duct cleaning, dryer vent cleaning, etc.)"
            ></textarea>
            <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
          </div>
          
          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isSubmitting">Get My Free Quote</span>
            <span v-else class="flex items-center justify-center">
              <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Submitting...
            </span>
          </button>
          
          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <div class="flex items-center">
              <CheckCircle class="w-5 h-5 mr-2" />
              <span>Thank you! We'll contact you within 24 hours with your free quote.</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { CheckCircle } from 'lucide-vue-next'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  postalCode: '',
  message: ''
})

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  postalCode: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const validatePhone = () => {
  const phoneRegex = /^[\d\s\-\(\)]+$/
  if (!phoneRegex.test(form.phone)) {
    errors.phone = 'Phone number must contain only digits, spaces, hyphens, and parentheses'
  } else {
    errors.phone = ''
  }
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errors.email = 'Please enter a valid email address'
  } else {
    errors.email = ''
  }
}

const validatePostalCode = () => {
  const postalCodeRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/
  if (!postalCodeRegex.test(form.postalCode)) {
    errors.postalCode = 'Please enter a valid Canadian postal code (e.g., M5A 1A1)'
  } else {
    errors.postalCode = ''
  }
}

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })
  
  // Validate required fields
  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }
  
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required'
    isValid = false
  } else {
    validatePhone()
    if (errors.phone) isValid = false
  }
  
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else {
    validateEmail()
    if (errors.email) isValid = false
  }
  
  if (!form.postalCode.trim()) {
    errors.postalCode = 'Postal code is required'
    isValid = false
  } else {
    validatePostalCode()
    if (errors.postalCode) isValid = false
  }
  
  if (!form.message.trim()) {
    errors.message = 'Please describe the service you need'
    isValid = false
  }
  
  return isValid
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
    
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

