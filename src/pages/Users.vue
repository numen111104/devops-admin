<template>
  <div class="p-4 sm:p-6">
    <div class="max-w-4xl mx-auto">
      <div class="bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-700/50 p-6 sm:p-8">
        <div class="text-center">
          <!-- Updated to use Tabler icon -->
          <IconUsers class="h-16 w-16 text-cyan-400 mx-auto mb-4" />
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-200 mb-2">Users Page</h1>
          <p class="text-gray-400 text-sm sm:text-base">
            User management and administration panel
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconUsers } from '@tabler/icons-vue'
</script>
