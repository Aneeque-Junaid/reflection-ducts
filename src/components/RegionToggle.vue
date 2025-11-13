<template>
  <div class="flex items-center justify-center gap-4 mb-8">
    <span
      :class="[
        'text-lg font-semibold transition-colors duration-300',
        activeRegion === 'ontario' ? 'text-primary-600' : 'text-gray-400'
      ]"
    >
      Ontario
    </span>
    
    <button
      @click="$emit('toggle')"
      :class="[
        'relative w-16 h-8 rounded-full transition-colors duration-300',
        'focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2',
        activeRegion === 'alberta' ? 'bg-primary-600' : 'bg-gray-200'
      ]"
    >
      <span
        :class="[
          'absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md',
          'transition-transform duration-300 ease-in-out',
          activeRegion === 'alberta' ? 'translate-x-8' : 'translate-x-0'
        ]"
      />
    </button>
    
    <span
      :class="[
        'text-lg font-semibold transition-colors duration-300',
        activeRegion === 'alberta' ? 'text-primary-600' : 'text-gray-400'
      ]"
    >
      Alberta
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  activeRegion: 'ontario' | 'alberta';
}>();

defineEmits<{
  toggle: [];
}>();
</script>