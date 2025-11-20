<template>
  <section class="py-16 bg-white">
    <div class="container-custom">
      <!-- ... header ... -->

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PackageCard
          v-for="pkg in packages"
          :key="pkg.name"
          v-bind="pkg"
          @select="$emit('select', $event)"
        />
      </div>

      <div class="bg-gray-50 rounded-xl">
        <!-- ... deals header ... -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DealCard
            v-for="deal in deals"
            :key="deal.dealTitle"
            v-bind="deal"
            @select="$emit('select', $event)"
          />
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <button @click="$emit('open-form', null)" class="btn-secondary text-lg px-8 py-4">
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
import { Packages, Deals } from '@/utils/pricingData.js'

const regionStore = useRegionStore()
const packages = computed(() => Packages[regionStore.region])
const deals = computed(() => Deals[regionStore.region])

// This component will re-emit 'select' and 'open-form' events to its parent
// No direct refs to LeadForm here.
</script>
