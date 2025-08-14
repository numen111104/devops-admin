<template>
  <header
    class="sticky top-0 z-20 p-4 border-b header backdrop-blur-md bg-gray-900/80 dark:bg-gray-900/80 light:bg-gray-50/80 border-gray-700/50">
    <div class="flex items-center justify-between">
      <!-- Left Section -->
      <div class="flex items-center">
        <button @click="$emit('toggleSidebar')"
          class="p-2 text-gray-400 transition-colors duration-200 rounded-md hover:bg-cyan-500/10">
          <!-- Updated to use Tabler icon -->
          <IconMenu2 class="w-6 h-6" />
        </button>
        <h1 class="hidden ml-4 text-xl font-semibold text-gray-200 sm:block">
          {{ pageTitle }}
        </h1>
      </div>

      <!-- Search Bar - Hidden on mobile -->
      <div class="flex-1 hidden max-w-lg mx-4 md:block">
        <div class="relative">
          <input type="text" placeholder="> global_search --query"
            class="w-full px-4 py-2 text-sm text-gray-200 placeholder-gray-400 transition-all duration-200 bg-transparent border rounded-lg border-cyan-300/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <div class="absolute inset-y-0 right-0 flex items-center pr-3">
            <!-- Updated to use Tabler icon -->
            <IconSearch class="w-5 h-5 text-cyan-400" />
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex items-center space-x-2 sm:space-x-4">
        <!-- Search button for mobile -->
        <button class="p-2 text-gray-400 transition-colors duration-200 rounded-full hover:bg-cyan-500/10 md:hidden">
          <IconSearch class="w-5 h-5" />
        </button>

        <!-- Notifications -->
        <button class="relative p-2 text-gray-400 transition-colors duration-200 rounded-full hover:bg-cyan-500/10">
          <!-- Updated to use Tabler icon -->
          <IconBell class="w-5 h-5 sm:h-6 sm:w-6" />
          <!-- Fixed notification badge positioning -->
          <span class="absolute w-3 h-3 -top-1 -right-1">
            <span class="absolute inline-flex w-full h-full bg-red-500 rounded-full opacity-75 animate-pulse"></span>
            <span class="relative inline-flex w-3 h-3 bg-red-600 rounded-full"></span>
          </span>
        </button>

        <!-- User Menu -->
        <UserMenu />
      </div>
    </div>
  </header>
</template>

<script setup>
import UserMenu from './UserMenu.vue'
import { IconMenu2, IconSearch, IconBell } from '@tabler/icons-vue'

defineProps({
  pageTitle: {
    type: String,
    default: 'Dashboard'
  }
})

defineEmits(['toggleSidebar'])
</script>
