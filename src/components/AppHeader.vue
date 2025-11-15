<template>
  <header class="bg-slate-800 text-white shadow-lg">
    <div class="container-custom">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <div class="bg-white text-slate-800 px-4 py-2 rounded-lg font-bold text-xl">
              REFLECTION DUCTS
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="hover:text-secondary-400 transition-colors duration-200"
            :class="{ 'text-secondary-400': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link 
            to="/services" 
            class="hover:text-secondary-400 transition-colors duration-200"
            :class="{ 'text-secondary-400': $route.path === '/services' }"
          >
            Services
          </router-link>
          <router-link 
            to="/process" 
            class="hover:text-secondary-400 transition-colors duration-200"
            :class="{ 'text-secondary-400': $route.path === '/process' }"
          >
            Process
          </router-link>
          <router-link 
            to="/reviews" 
            class="hover:text-secondary-400 transition-colors duration-200"
            :class="{ 'text-secondary-400': $route.path === '/reviews' }"
          >
            Reviews
          </router-link>
          <router-link 
            to="/contact" 
            class="hover:text-secondary-400 transition-colors duration-200"
            :class="{ 'text-secondary-400': $route.path === '/contact' }"
          >
            Contact
          </router-link>
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
          <a 
            href="https://wa.me/+12264552415"
            target="_blank" 
            rel="noopener noreferrer"
            class="text-green-400 hover:text-green-300 transition-colors duration-200"
          >
            <MessageCircle class="w-5 h-5" />
          </a>
          <a 
            href="https://www.facebook.com/Info.reflectionducts" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <Facebook class="w-5 h-5" />
          </a>
          <a 
              href="https://www.instagram.com/info.reflectionducts?igsh=dDdidzlnMzFubXZ0" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-pink-400 hover:text-pink-300 transition-colors duration-200"
            >
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
          <router-link 
            to="/" 
            @click="closeMobileMenu"
            class="hover:text-secondary-400 transition-colors duration-200"
            :class="{ 'text-secondary-400': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link 
            to="/services" 
            @click="closeMobileMenu"
            class="hover:text-secondary-400 transition-colors duration-200"
            :class="{ 'text-secondary-400': $route.path === '/services' }"
          >
            Services
          </router-link>
          <router-link 
            to="/process" 
            @click="closeMobileMenu"
            class="hover:text-secondary-400 transition-colors duration-200"
            :class="{ 'text-secondary-400': $route.path === '/process' }"
          >
            Process
          </router-link>
          <router-link 
            to="/reviews" 
            @click="closeMobileMenu"
            class="hover:text-secondary-400 transition-colors duration-200"
            :class="{ 'text-secondary-400': $route.path === '/reviews' }"
          >
            Reviews
          </router-link>
          <router-link 
            to="/contact" 
            @click="closeMobileMenu"
            class="hover:text-secondary-400 transition-colors duration-200"
            :class="{ 'text-secondary-400': $route.path === '/contact' }"
          >
            Contact
          </router-link>
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
              <a 
                href="https://wa.me/+12264552415"
                target="_blank" 
                rel="noopener noreferrer"
                class="text-green-400 hover:text-green-300 transition-colors duration-200"
              >
                <MessageCircle class="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/Info.reflectionducts" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <Facebook class="w-5 h-5" />
              </a>
              <a 
              href="https://www.instagram.com/info.reflectionducts?igsh=dDdidzlnMzFubXZ0" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-pink-400 hover:text-pink-300 transition-colors duration-200"
              >
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

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

