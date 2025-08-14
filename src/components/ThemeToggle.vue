<template>
  <button
    @click="toggleTheme"
    class="w-full sidebar-item text-gray-400"
    :class="{ 'justify-center': isCollapsed }"
  >
    <!-- Updated to use Tabler icons -->
    <component 
      :is="currentTheme === 'dark' ? IconSun : IconMoon" 
      class="nav-icon shrink-0 transition-all duration-300 ease-in-out"
    />
    <span
      class="nav-text transition-all duration-300 ease-in-out"
      :class="navTextClasses"
    >
      {{ currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode' }}
    </span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { IconSun, IconMoon } from '@tabler/icons-vue'

defineProps({
  isCollapsed: Boolean,
  navTextClasses: Object
})

const currentTheme = ref('dark')

const toggleTheme = () => {
  const html = document.documentElement
  
  if (currentTheme.value === 'dark') {
    html.classList.remove('dark')
    html.classList.add('light')
    currentTheme.value = 'light'
  } else {
    html.classList.remove('light')
    html.classList.add('dark')
    currentTheme.value = 'dark'
  }
  
  localStorage.setItem('theme', currentTheme.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  currentTheme.value = savedTheme
  
  const html = document.documentElement
  html.classList.remove('dark', 'light')
  html.classList.add(savedTheme)
})
</script>
