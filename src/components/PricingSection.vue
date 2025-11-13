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

      <!-- Region Toggle -->
      <RegionToggle 
        :active-region="activeRegion" 
        @toggle="handleToggle" 
      />

      <!-- Pricing Lists with Slide Animation -->
      <div class="max-w-3xl mx-auto relative min-h-[600px]">
        <PricingList 
          :items="pricingData.ontario" 
          :is-visible="activeRegion === 'ontario'" 
        />
        <PricingList 
          :items="pricingData.alberta" 
          :is-visible="activeRegion === 'alberta'" 
        />
      </div>

      <div class="text-center mt-10">
        <button
          class="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Get a Quote
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { pricingData } from '@/utils/pricingData';
import RegionToggle from '@/components/RegionToggle.vue';
import PricingList from '@/components/PricingList.vue';

type Region = 'ontario' | 'alberta';

const activeRegion = ref<Region>('ontario');

const handleToggle = () => {
  activeRegion.value = activeRegion.value === 'ontario' ? 'alberta' : 'ontario';
};
</script>