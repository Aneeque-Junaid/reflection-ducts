<template>
  <header class="bg-slate-800 text-white shadow-lg">
    <div class="container-custom">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#top" class="flex items-center">
            <div class="bg-white text-slate-800 px-4 py-2 rounded-lg font-bold text-xl">
              REFLECTION DUCTS
            </div>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">

          <button @click="scrollTo('process')" 
            class="hover:text-secondary-400 transition-colors duration-200">
            Process
          </button>

          <button @click="scrollTo('packages')" 
            class="hover:text-secondary-400 transition-colors duration-200">
            Packages & Deals
          </button>

          <button @click="scrollTo('reviews')" 
            class="hover:text-secondary-400 transition-colors duration-200">
            Reviews
          </button>

          <button @click="scrollTo('contact')" 
            class="hover:text-secondary-400 transition-colors duration-200">
            Contact
          </button>

          <!-- Region Change Button -->
          <button
            @click="regionStore.setRegion(null)"
            class="bg-secondary-400 text-slate-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-secondary-300 transition-all duration-200"
          >
            Change Region
          </button>
        </nav>

        <!-- Contact Info & Social -->
        <div class="hidden lg:flex items-center space-x-4">
          <a 
            href="tel:+12264552415" 
            class="flex items-center text-secondary-400 hover:text-secondary-300 transition-colors duration-200"
          >
            <Phone class="w-4 h-4 mr-2" />
            +1 (226) 455-2415
          </a>

          <a href="https://wa.me/+12264552415" target="_blank" rel="noopener" class="text-green-400 hover:text-green-300 transition-colors duration-200">
            <MessageCircle class="w-5 h-5" />
          </a>

          <a href="https://www.facebook.com/Info.reflectionducts" target="_blank" rel="noopener" class="text-blue-400 hover:text-blue-300 transition-colors duration-200">
            <Facebook class="w-5 h-5" />
          </a>

          <a href="https://www.instagram.com/info.reflectionducts?igsh=dDdidzlnMzFubXZ0" target="_blank" rel="noopener" class="text-pink-400 hover:text-pink-300 transition-colors duration-200">
            <Instagram class="w-6 h-6" />
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu" 
          class="lg:hidden text-white hover:text-secondary-400 transition-colors duration-200"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden border-t border-slate-700 py-4"
      >
        <nav class="flex flex-col space-y-4">

          <button @click="scrollAndClose('process')" class="hover:text-secondary-400 transition-colors duration-200">
            Process
          </button>

          <button @click="scrollAndClose('packages')" class="hover:text-secondary-400 transition-colors duration-200">
            Packages & Deals
          </button>

          <button @click="scrollAndClose('reviews')" class="hover:text-secondary-400 transition-colors duration-200">
            Reviews
          </button>

          <button @click="scrollAndClose('contact')" class="hover:text-secondary-400 transition-colors duration-200">
            Contact
          </button>

          <!-- Region Change Mobile -->
          <button
            @click="() => { regionStore.setRegion(null); closeMobileMenu(); }"
            class="bg-secondary-400 text-slate-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-secondary-300 transition-all duration-200"
          >
            Change Region
          </button>
        </nav>

        <!-- Mobile Contact Info -->
        <div class="mt-6 pt-4 border-t border-slate-700">
          <div class="flex flex-col space-y-3">
            <a 
              href="tel:+12264552415" 
              class="flex items-center text-secondary-400 hover:text-secondary-300 transition-colors duration-200"
            >
              <Phone class="w-4 h-4 mr-2" />
              +1 (226) 455-2415
            </a>

            <div class="flex items-center space-x-4">
              <a href="https://wa.me/+12264552415" target="_blank" rel="noopener" class="text-green-400 hover:text-green-300 transition-colors duration-200">
                <MessageCircle class="w-5 h-5" />
              </a>

              <a href="https://www.facebook.com/Info.reflectionducts" target="_blank" rel="noopener" class="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                <Facebook class="w-5 h-5" />
              </a>

              <a href="https://www.instagram.com/info.reflectionducts?igsh=dDdidzlnMzFubXZ0" target="_blank" rel="noopener" class="text-pink-400 hover:text-pink-300 transition-colors duration-200">
                <Instagram class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Phone, MessageCircle, Facebook, Menu, X, Instagram } from 'lucide-vue-next'
import { useRegionStore } from '@/store/regionStore'

const regionStore = useRegionStore()

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Smooth scroll function
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const scrollAndClose = (id: string) => {
  scrollTo(id)
  closeMobileMenu()
}
</script>
