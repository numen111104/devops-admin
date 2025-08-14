<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="(item, index) in items" :key="index" class="inline-flex items-center">
        <IconChevronRight 
          v-if="index > 0" 
          class="w-4 h-4 text-gray-500 mx-1" 
        />
        <router-link
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <component v-if="item.icon" :is="item.icon" class="w-4 h-4 mr-2" />
          {{ item.label }}
        </router-link>
        <span
          v-else
          class="inline-flex items-center text-sm font-medium"
          :class="index === items.length - 1 ? 'text-cyan-400' : 'text-gray-400'"
        >
          <component v-if="item.icon" :is="item.icon" class="w-4 h-4 mr-2" />
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { IconChevronRight } from '@tabler/icons-vue'

defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => items.every(item => item.label)
  }
})
</script>
