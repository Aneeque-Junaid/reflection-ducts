<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Lead Form Section -->
    <LeadForm />
    
    <!-- Service Process Section -->
    <ServiceProcess id="process" />
    
    <!-- Pricing Section -->
    <!-- <PricingSection /> -->

    <!-- Packages & Deals Section -->
    <PricingOffers id="packages" />
    
    <!-- Before & After Gallery -->
    <BeforeAfterGallery />
    
    <!-- Reviews Section -->
    <ReviewsSection id="reviews" />
    
    <!-- Contact Section -->
    <ContactSection id="contact" />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import LeadForm from '../components/LeadForm.vue'
import ServiceProcess from '../components/ServiceProcess.vue'
import PricingOffers from '../components/PricingOffers.vue'
import BeforeAfterGallery from '../components/BeforeAfterGallery.vue'
import ReviewsSection from '../components/ReviewsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import PricingSection from './PricingSection.vue'
</script>
