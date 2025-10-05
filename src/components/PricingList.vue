<template>
  <section class="py-16 bg-gradient-to-br from-white via-primary-50 to-primary-100">
    <div class="container-custom">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Affordable Pricing – Pay Only for What You Need
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Transparent, no-hidden-fees pricing — choose only the services you require.
        </p>
      </div>

      <div
        class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 divide-y divide-gray-100 max-w-3xl mx-auto"
      >
        <div
          v-for="(item, index) in pricingList"
          :key="index"
          class="flex justify-between items-center px-6 py-4 hover:bg-primary-50/60 transition-colors duration-200"
        >
          <div class="flex items-center space-x-3">
            <span class="w-2 h-2 rounded-full bg-primary-500"></span>
            <span class="text-gray-800 font-medium">{{ item.service }}</span>
          </div>

          <div>
            <span
              :class="[
                'text-lg font-semibold',
                item.price === 'Included FREE'
                  ? 'text-green-600'
                  : 'text-primary-700',
              ]"
            >
              {{ item.price }}
            </span>
          </div>
        </div>
      </div>

      <div class="text-center mt-10">
        <button
          class="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Get a Quote
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { pricingList } from '@/utils/pricingData';
</script>
