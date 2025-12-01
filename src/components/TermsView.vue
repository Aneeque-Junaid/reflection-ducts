<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>

        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance</h2>
          <p class="text-gray-700 mb-6">
            By using our website or services, you agree to these Terms & Conditions.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Quotes & Pricing</h2>
          <p class="text-gray-700 mb-6">
            All pricing is based on the information provided by the customer. Final pricing may vary after onsite inspection.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Service Conditions</h2>
          <ul class="list-disc pl-6 text-gray-700 mb-6">
            <li>Customers must ensure clear access to all vents, furnace area, and HVAC system.</li>
            <li>Technicians are not responsible for pre-existing damage.</li>
          </ul>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Liability</h2>
          <p class="text-gray-700 mb-6">
            We are not liable for:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-6">
            <li>Damages caused by hidden defects in the HVAC system</li>
            <li>Losses resulting from misuse of the website</li>
            <li>Service delays caused by weather, emergencies, or technical issues</li>
          </ul>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Appointment Cancellation</h2>
          <p class="text-gray-700 mb-6">
            Customers must notify us 24 hours before cancellation. Short-notice cancellations may be charged.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
          <p class="text-gray-700 mb-6">
            All text, images, branding, and layout belong to Reflection Duct Cleaning. Unauthorized use is prohibited.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Third-Party Links</h2>
          <p class="text-gray-700 mb-6">
            We are not responsible for content hosted on external websites.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
          <p class="text-gray-700 mb-6">
            These terms follow the laws of Ontario, Canada.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Modification of Terms</h2>
          <p class="text-gray-700 mb-6">
            Using our website after updates indicates acceptance of the new Terms & Conditions.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <p class="text-gray-700 mb-2"><strong>Reflection Ducts Cleaning</strong></p>
            <p class="text-gray-700 mb-2">Phone: 
              <a href="tel:+12264552415" class="text-blue-600 hover:text-blue-800">
                +1 (226) 455-2415
              </a>
            </p>
            <p class="text-gray-700 mb-2">Email: 
              <a href="mailto:Info.reflectionducts@gmail.com" class="text-blue-600 hover:text-blue-800">
                Info.reflectionducts@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200">
          <router-link 
            to="/" 
            class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft class="w-4 h-4 mr-2" />
            Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
</script>
