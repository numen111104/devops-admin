<template>
  <button
    @click="toggleTheme"
    class="w-full sidebar-item text-gray-400"
    :class="{ 'justify-center': isCollapsed }"
  >
    <component 
      :is="currentTheme === 'dark' ? SunIcon : MoonIcon" 
      class="nav-icon"
    />
    <span
      class="nav-text"
      :class="navTextClasses"
    >
      {{ currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode' }}
    </span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { SunIcon, MoonIcon } from './icons'

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
