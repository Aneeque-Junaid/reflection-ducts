<template>
  <footer class="bg-slate-900 text-white">
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="bg-white text-slate-800 px-4 py-2 rounded-lg font-bold text-xl inline-block mb-4">
            REFLECTION DUCTS
          </div>
          <p class="text-gray-300 mb-4">
            Professional duct cleaning services serving Canada – Ontario, Calgary & Beyond. 
            Licensed, insured, and committed to providing clean air for your home and business.
          </p>
          <div class="flex items-center space-x-4">
            <a 
              href="https://wa.me/+12264552415"
              target="_blank" 
              rel="noopener noreferrer"
              class="text-green-400 hover:text-green-300 transition-colors duration-200"
            >
              <MessageCircle class="w-6 h-6" />
            </a>
            <a 
              href="https://www.facebook.com/Info.reflectionducts" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <Facebook class="w-6 h-6" />
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

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/" 
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link 
                to="/services" 
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Services
              </router-link>
            </li>
            <li>
              <router-link 
                to="/process" 
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Process
              </router-link>
            </li>
            <li>
              <router-link 
                to="/reviews" 
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Reviews
              </router-link>
            </li>
            <li>
              <router-link 
                to="/contact" 
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-300">
              <Phone class="w-4 h-4 mr-2" />
              <a 
                href="tel:+16474777772" 
                class="hover:text-white transition-colors duration-200"
              >
                (647) 477-7772
              </a>
            </li>
            <li class="flex items-center text-gray-300">
              <Mail class="w-4 h-4 mr-2" />
              <a 
                href="mailto:info@reflectionducts.com" 
                class="hover:text-white transition-colors duration-200"
              >
                info@reflectionducts.com
              </a>
            </li>
            <li class="flex items-start text-gray-300">
              <MapPin class="w-4 h-4 mr-2 mt-1" />
              <span>Serving Ontario, Calgary & Beyond</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-slate-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Reflection Ducts Cleaning. All rights reserved. Licensed & Insured.
          </div>
          <div class="flex space-x-6 text-sm">
            <router-link 
              to="/privacy-policy" 
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </router-link>
            <router-link 
              to="/terms" 
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-vue-next'
</script>

