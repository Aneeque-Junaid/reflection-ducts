<template>
  <div
    :class="[
      'transition-all duration-500 ease-in-out',
      isVisible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 translate-x-8 absolute pointer-events-none'
    ]"
  >
    <div
      class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 divide-y divide-gray-100"
    >
      <div
        v-for="(item, index) in items"
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
              item.price === 'Included FREE' || item.price === 'Included in packages'
                ? 'text-green-600'
                : 'text-primary-700',
            ]"
          >
            {{ item.price }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PricingItem {
  service: string;
  price: string;
}

defineProps<{
  items: PricingItem[];
  isVisible: boolean;
}>();
</script>