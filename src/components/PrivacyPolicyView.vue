<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p class="text-gray-700 mb-6">
            Reflection Duct Cleaning (“we”, “our”, “us”) is committed to protecting the privacy of our customers and website users. 
            This Privacy Policy outlines how we collect, use, store, and protect your personal information.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <ul class="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Personal Information:</strong> Name, phone number, email, address, service request details.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, pages visited, cookies.</li>
            <li><strong>Communication Records:</strong> Messages, call details, inquiry history.</li>
          </ul>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <ul class="list-disc pl-6 text-gray-700 mb-6">
            <li>To provide quotes and schedule services</li>
            <li>To communicate service updates and confirmations</li>
            <li>To improve website performance and user experience</li>
            <li>For payment processing and recordkeeping</li>
            <li>For safety, fraud prevention, and legal obligations</li>
          </ul>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Sharing</h2>
          <p class="text-gray-700 mb-4">We do not sell personal information.</p>
          <p class="text-gray-700 mb-2">We may share limited information with:</p>
          <ul class="list-disc pl-6 text-gray-700 mb-6">
            <li>Service technicians</li>
            <li>Payment processors</li>
            <li>Third-party CRM or booking tools</li>
          </ul>
          <p class="text-gray-700 mb-6">Only for service fulfillment purposes.</p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
          <p class="text-gray-700 mb-6">
            We use reasonable technical and administrative safeguards to protect your information.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
          <ul class="list-disc pl-6 text-gray-700 mb-6">
            <li>Request correction of your information</li>
            <li>Request deletion of your data</li>
            <li>Access your stored personal information</li>
            <li>Opt out of marketing messages</li>
          </ul>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies & Tracking</h2>
          <p class="text-gray-700 mb-6">
            Cookies are used for performance, analytics, and service improvements. Users may disable cookies in their browser settings.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Policy Updates</h2>
          <p class="text-gray-700 mb-6">
            This policy may be updated without notice. A revised date will always be shown.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
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
