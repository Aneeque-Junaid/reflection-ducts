<template>
  <div>
    <!-- Lead Form Section -->
    <LeadForm ref="leadFormRef" />
    
    <!-- Service Process Section -->
    <ServiceProcess id="process" />
    
    <!-- Pricing Section -->
    <!-- <PricingSection /> -->

    <!-- Packages & Deals Section -->
    <PricingOffers id="packages" @select="handleSelect" @open-form="handleOpenForm" />
    
    <!-- Before & After Gallery -->
    <BeforeAfterGallery />
    
    <!-- Reviews Section -->
    <ReviewsSection id="reviews" />
    
    <!-- Contact Section -->
    <ContactSection id="contact" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LeadForm from '../components/LeadForm.vue'
import ServiceProcess from '../components/ServiceProcess.vue'
import PricingOffers from '../components/PricingOffers.vue'
import BeforeAfterGallery from '../components/BeforeAfterGallery.vue'
import ReviewsSection from '../components/ReviewsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import PricingSection from './PricingSection.vue'

const leadFormRef = ref<InstanceType<typeof LeadForm> | null>(null)

const handleSelect = (text: string) => {
  // defensive check
  if (leadFormRef.value && typeof leadFormRef.value.updatePrefillMessage === 'function') {
    leadFormRef.value.updatePrefillMessage(text)
  } else {
    // Fallback: just scroll to form and (optionally) set a temporary global
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
    console.warn('leadFormRef not available yet')
  }
}

// Called when CTA "Get a Custom Quote" is clicked (no prefill)
const handleOpenForm = () => {
  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
}


</script>
