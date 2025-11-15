<template>
  <section class="py-16 bg-white">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Pricing & Packages
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive packages or special deals designed to meet your specific needs and budget.
        </p>
      </div>

      <!-- Packages -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PackageCard
          v-for="pkg in packages"
          :key="pkg.name"
          v-bind="pkg"
        />
      </div>

      <!-- Special Deals -->
      <div class="bg-gray-50 rounded-xl p-8">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Special Deals</h3>
          <p class="text-gray-600">Mix and match services for the best value</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DealCard
            v-for="deal in deals"
            :key="deal.title"
            v-bind="deal"
          />
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">Not sure which package is right for you?</p>
        <button @click="scrollToForm" class="btn-secondary text-lg px-8 py-4">
          Get a Custom Quote
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PackageCard from './PackageCard.vue'
import DealCard from './DealCard.vue'
import { useRegionStore } from '@/store/regionStore'
import { Packages, Deals } from '@/utils/pricingData'

const regionStore = useRegionStore()

const packages = computed(() => Packages[regionStore.region])
const deals = computed(() => Deals[regionStore.region])

const scrollToForm = () => {
  const formElement = document.getElementById('lead-form')
  if (formElement) formElement.scrollIntoView({ behavior: 'smooth' })
}
</script>
