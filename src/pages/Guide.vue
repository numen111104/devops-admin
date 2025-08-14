<template>
  <div class="space-y-8 border rounded-lg bg-gray-800/50 backdrop-blur-md border-gray-700/50 sm:p-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="mb-4 text-3xl font-bold text-gray-100">Component Guide</h1>
      <p class="text-gray-400">
        Complete guide to using CyberOps UI components with examples and best practices.
      </p>
    </div>

    <!-- Breadcrumb Example -->
    <section class="p-6 border border-gray-700 bg-gray-800/50 rounded-xl">
      <h2 class="mb-4 text-xl font-semibold text-gray-100">Breadcrumb</h2>
      <div class="mb-4">
        <CyberBreadcrumb :items="breadcrumbItems" />
      </div>
      <details class="mt-4">
        <summary class="cursor-pointer text-cyan-400 hover:text-cyan-300">View Code</summary>
        <pre class="p-4 mt-2 overflow-x-auto text-sm text-gray-300 bg-gray-900 rounded-lg"><code>&lt;CyberBreadcrumb :items="[
  { label: 'Home', to: '/', icon: IconHome },
  { label: 'Components', to: '/components' },
  { label: 'Guide' }
]" /&gt;</code></pre>
      </details>
    </section>

    <!-- Button Examples -->
    <section class="p-6 border border-gray-700 bg-gray-800/50 rounded-xl">
      <h2 class="mb-4 text-xl font-semibold text-gray-100">Buttons</h2>

      <!-- Button Variants -->
      <div class="space-y-4">
        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-200">Variants</h3>
          <div class="flex flex-wrap gap-3">
            <CyberButton variant="primary">Primary</CyberButton>
            <CyberButton variant="secondary">Secondary</CyberButton>
            <CyberButton variant="success">Success</CyberButton>
            <CyberButton variant="danger">Danger</CyberButton>
            <CyberButton variant="warning">Warning</CyberButton>
            <CyberButton variant="info">Info</CyberButton>
            <CyberButton variant="ghost">Ghost</CyberButton>
            <CyberButton variant="outline">Outline</CyberButton>
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-200">Sizes</h3>
          <div class="flex flex-wrap items-center gap-3">
            <CyberButton size="sm">Small</CyberButton>
            <CyberButton size="md">Medium</CyberButton>
            <CyberButton size="lg">Large</CyberButton>
            <CyberButton size="xl">Extra Large</CyberButton>
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-200">States</h3>
          <div class="flex flex-wrap gap-3">
            <CyberButton :icon="IconRocket">With Icon</CyberButton>
            <CyberButton loading>Loading</CyberButton>
            <CyberButton disabled>Disabled</CyberButton>
            <CyberButton full-width>Full Width</CyberButton>
          </div>
        </div>
      </div>

      <details class="mt-4">
        <summary class="cursor-pointer text-cyan-400 hover:text-cyan-300">View Code</summary>
        <pre class="p-4 mt-2 overflow-x-auto text-sm text-gray-300 bg-gray-900 rounded-lg"><code>&lt;CyberButton variant="primary" size="md" :icon="IconRocket"&gt;
  Click me
&lt;/CyberButton&gt;</code></pre>
      </details>
    </section>

    <!-- Alert Examples -->
    <section class="p-6 border border-gray-700 bg-gray-800/50 rounded-xl">
      <h2 class="mb-4 text-xl font-semibold text-gray-100">Alerts</h2>

      <div class="space-y-4">
        <CyberAlert variant="success" title="Success!" message="Your operation completed successfully."
          :dismissible="true" />
        <CyberAlert variant="danger" title="Error!" message="Something went wrong. Please try again."
          :dismissible="true" />
        <CyberAlert variant="warning" title="Warning!" message="Please review your settings before proceeding."
          :dismissible="true" />
        <CyberAlert variant="info" title="Info" message="Here's some helpful information for you."
          :dismissible="true" />
      </div>

      <details class="mt-4">
        <summary class="cursor-pointer text-cyan-400 hover:text-cyan-300">View Code</summary>
        <pre class="p-4 mt-2 overflow-x-auto text-sm text-gray-300 bg-gray-900 rounded-lg"><code>&lt;CyberAlert 
  variant="success" 
  title="Success!" 
  message="Your operation completed successfully."
  :dismissible="true"
/&gt;</code></pre>
      </details>
    </section>

    <!-- Modal Example -->
    <section class="p-6 border border-gray-700 bg-gray-800/50 rounded-xl">
      <h2 class="mb-4 text-xl font-semibold text-gray-100">Modal</h2>

      <div class="flex flex-wrap gap-3 mb-4">
        <CyberButton @click="showModal = true">Open Modal</CyberButton>
        <CyberButton variant="secondary" @click="showLargeModal = true">Large Modal</CyberButton>
      </div>

      <CyberModal v-model="showModal" title="Example Modal" :icon="IconSettings">
        <p class="text-gray-300">This is a modal dialog example with CyberOps styling.</p>
        <template #footer>
          <CyberButton variant="ghost" @click="showModal = false">Cancel</CyberButton>
          <CyberButton variant="primary" @click="showModal = false">Confirm</CyberButton>
        </template>
      </CyberModal>

      <CyberModal v-model="showLargeModal" title="Large Modal Example" size="lg" :icon="IconDatabase">
        <div class="space-y-4">
          <p class="text-gray-300">This is a larger modal with more content space.</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="font-medium text-gray-100">Feature 1</h4>
              <p class="text-sm text-gray-400">Description of feature 1</p>
            </div>
            <div class="p-4 bg-gray-700 rounded-lg">
              <h4 class="font-medium text-gray-100">Feature 2</h4>
              <p class="text-sm text-gray-400">Description of feature 2</p>
            </div>
          </div>
        </div>
        <template #footer>
          <CyberButton variant="outline" @click="showLargeModal = false">Close</CyberButton>
          <CyberButton variant="success" @click="showLargeModal = false">Save Changes</CyberButton>
        </template>
      </CyberModal>

      <details class="mt-4">
        <summary class="cursor-pointer text-cyan-400 hover:text-cyan-300">View Code</summary>
        <pre class="p-4 mt-2 overflow-x-auto text-sm text-gray-300 bg-gray-900 rounded-lg"><code>&lt;CyberModal
      v-model="showModal"
      title="Example Modal"
      :icon="IconSettings"
      &gt;
      &lt;p&gt;Modal content here&lt;/p&gt;
      &lt;template #footer&gt;
      &lt;CyberButton variant="primary"&gt;Confirm&lt;/CyberButton&gt;
      &lt;/template&gt;
      &lt;/CyberModal&gt;</code></pre>
      </details>
    </section>

    <!-- Notification Panel Example -->
    <section class="p-6 border border-gray-700 bg-gray-800/50 rounded-xl">
      <h2 class="mb-4 text-xl font-semibold text-gray-100">Notification Panel</h2>

      <div class="flex gap-3 mb-4">
        <CyberButton @click="showNotifications = !showNotifications">
          Toggle Notifications
        </CyberButton>
        <CyberButton variant="secondary" @click="addNotification">
          Add Notification
        </CyberButton>
      </div>

      <div class="relative">
        <CyberNotificationPanel :show="showNotifications" :notifications="sampleNotifications"
          @close="showNotifications = false" @mark-read="markNotificationRead"
          @mark-all-read="markAllNotificationsRead" />
      </div>

      <details class="mt-4">
        <summary class="cursor-pointer text-cyan-400 hover:text-cyan-300">View Code</summary>
        <pre class="p-4 mt-2 overflow-x-auto text-sm text-gray-300 bg-gray-900 rounded-lg"><code>&lt;CyberNotificationPanel
        :show="showNotifications"
        :notifications="notifications"
        @close="showNotifications = false"
        @mark-read="markNotificationRead"
        @mark-all-read="markAllNotificationsRead"
        /&gt;</code></pre>
      </details>
    </section>

    <!-- Color System -->
    <section class="p-6 border border-gray-700 bg-gray-800/50 rounded-xl">
      <h2 class="mb-4 text-xl font-semibold text-gray-100">CyberOps Color System</h2>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="space-y-2">
          <h3 class="font-medium text-gray-200">Primary</h3>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <span class="text-sm text-gray-400">Cyan to Blue</span>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="font-medium text-gray-200">Success</h3>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded bg-gradient-to-r from-emerald-500 to-green-600"></div>
            <span class="text-sm text-gray-400">Emerald to Green</span>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="font-medium text-gray-200">Danger</h3>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded bg-gradient-to-r from-red-500 to-rose-600"></div>
            <span class="text-sm text-gray-400">Red to Rose</span>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="font-medium text-gray-200">Warning</h3>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded bg-gradient-to-r from-amber-500 to-orange-600"></div>
            <span class="text-sm text-gray-400">Amber to Orange</span>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="font-medium text-gray-200">Info</h3>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <span class="text-sm text-gray-400">Blue to Indigo</span>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="font-medium text-gray-200">Secondary</h3>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gray-700 rounded"></div>
            <span class="text-sm text-gray-400">Gray</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  IconHome,
  IconSettings,
  IconDatabase,
  IconRocket
} from '@tabler/icons-vue'
import CyberBreadcrumb from '../components/ui/CyberBreadcrumb.vue'
import CyberButton from '../components/ui/CyberButton.vue'
import CyberAlert from '../components/ui/CyberAlert.vue'
import CyberModal from '../components/ui/CyberModal.vue'
import CyberNotificationPanel from '../components/ui/CyberNotificationPanel.vue'

const showModal = ref(false)
const showLargeModal = ref(false)
const showNotifications = ref(false)

const breadcrumbItems = [
  { label: 'Home', to: '/', icon: IconHome },
  { label: 'Components', to: '/guide' },
  { label: 'Guide' }
]

const sampleNotifications = ref([
  {
    id: 1,
    type: 'success',
    title: 'Deployment Successful',
    message: 'Your application has been deployed successfully.',
    timestamp: Date.now() - 300000,
    read: false
  },
  {
    id: 2,
    type: 'warning',
    title: 'High CPU Usage',
    message: 'Server CPU usage is above 80%.',
    timestamp: Date.now() - 600000,
    read: false
  },
  {
    id: 3,
    type: 'info',
    title: 'System Update',
    message: 'A new system update is available.',
    timestamp: Date.now() - 900000,
    read: true
  }
])

const addNotification = () => {
  const types = ['success', 'warning', 'error', 'info']
  const titles = ['New Alert', 'System Update', 'Security Notice', 'Performance Report']
  const messages = [
    'This is a sample notification message.',
    'Your system has been updated successfully.',
    'Please review your security settings.',
    'Performance metrics are now available.'
  ]

  const randomType = types[Math.floor(Math.random() * types.length)]
  const randomTitle = titles[Math.floor(Math.random() * titles.length)]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]

  sampleNotifications.value.unshift({
    id: Date.now(),
    type: randomType,
    title: randomTitle,
    message: randomMessage,
    timestamp: Date.now(),
    read: false
  })
}

const markNotificationRead = (id) => {
  const notification = sampleNotifications.value.find(n => n.id === id)
  if (notification) {
    notification.read = true
  }
}

const markAllNotificationsRead = () => {
  sampleNotifications.value.forEach(notification => {
    notification.read = true
  })
}
</script>
