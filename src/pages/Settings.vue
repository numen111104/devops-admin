<template>
  <div class="p-4 sm:p-6">
    <div class="max-w-4xl mx-auto">
      <div class="bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-700/50 p-6 sm:p-8">
        <div class="text-center">
          <!-- Updated to use Tabler icon -->
          <IconSettings class="h-16 w-16 text-cyan-400 mx-auto mb-4" />
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-200 mb-2">Settings Page</h1>
          <p class="text-gray-400 text-sm sm:text-base">
            System configuration and preferences
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconSettings } from '@tabler/icons-vue'
</script>
