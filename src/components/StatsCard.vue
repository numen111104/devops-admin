<template>
  <div class="terminal-window p-4 rounded-lg hover:scale-105 transition-transform duration-300">
    <div class="flex justify-between items-center">
      <h3 class="text-sm font-medium text-gray-400">{{ title }}</h3>
      <span 
        class="font-mono text-sm"
        :class="changeColorClass"
      >
        {{ change }}
      </span>
    </div>
    <p class="text-3xl font-bold mt-2 text-gray-200">{{ value }}</p>
    <div class="text-xs text-gray-400 mt-1">{{ subtitle }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  value: String,
  change: String,
  subtitle: String,
  changeType: {
    type: String,
    default: 'neutral'
  }
})

const changeColorClass = computed(() => {
  switch (props.changeType) {
    case 'positive':
      return 'text-green-400'
    case 'negative':
      return 'text-red-400'
    case 'warning':
      return 'text-yellow-400'
    default:
      return 'text-gray-400'
  }
})
</script>
