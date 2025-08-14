<template>
  <header class="header sticky top-0 z-20 p-4 backdrop-blur-md bg-gray-900/80 dark:bg-gray-900/80 light:bg-gray-50/80 border-b border-gray-700/50">
    <div class="flex items-center justify-between">
      <!-- Left Section -->
      <div class="flex items-center">
        <button
          @click="$emit('toggleSidebar')"
          class="p-2 rounded-md hover:bg-cyan-500/10 text-gray-400 transition-colors duration-200"
        >
          <!-- Updated to use Tabler icon -->
          <IconMenu2 class="h-6 w-6" />
        </button>
        <h1 class="ml-4 text-xl font-semibold text-gray-200 hidden sm:block">
          {{ pageTitle }}
        </h1>
      </div>

      <!-- Search Bar - Hidden on mobile -->
      <div class="flex-1 max-w-lg mx-4 hidden md:block">
        <div class="relative">
          <input
            type="text"
            placeholder="> global_search --query"
            class="w-full py-2 px-4 bg-transparent border border-cyan-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-sm text-gray-200 placeholder-gray-400 transition-all duration-200"
          />
          <div class="absolute inset-y-0 right-0 flex items-center pr-3">
            <!-- Updated to use Tabler icon -->
            <IconSearch class="h-5 w-5 text-cyan-400" />
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex items-center space-x-2 sm:space-x-4">
        <!-- Search button for mobile -->
        <button class="p-2 rounded-full hover:bg-cyan-500/10 text-gray-400 transition-colors duration-200 md:hidden">
          <IconSearch class="h-5 w-5" />
        </button>

        <!-- Notifications -->
        <button class="relative p-2 rounded-full hover:bg-cyan-500/10 text-gray-400 transition-colors duration-200">
          <!-- Updated to use Tabler icon -->
          <IconBell class="h-5 w-5 sm:h-6 sm:w-6" />
          <!-- Fixed notification badge positioning -->
          <span class="absolute -top-1 -right-1 h-3 w-3">
            <span class="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-pulse"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
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
