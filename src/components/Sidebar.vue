<template>
  <aside 
    class="sidebar fixed top-0 left-0 h-full z-40 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden"
    :class="sidebarClasses"
  >
    <div class="flex flex-col h-full p-4">
      <!-- Logo Section -->
      <div 
        class="flex items-center mb-8 shrink-0 transition-all duration-300 ease-in-out"
        :class="{ 'justify-center': isCollapsed && !isMobile }"
      >
        <svg
          class="h-8 w-8 text-cyan-400 shrink-0 transition-all duration-300 ease-in-out"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
        </svg>
        <span
          class="ml-3 text-xl font-semibold text-gray-200 whitespace-nowrap transition-all duration-300 ease-in-out"
          :class="logoTextClasses"
        >
          CYBEROPS
        </span>
      </div>

      <!-- Navigation -->
      <nav class="flex-grow">
        <ul class="space-y-2">
          <li v-for="item in navigationItems" :key="item.name">
            <a
              href="#"
              class="sidebar-item"
              :class="{ 
                'active': item.active,
                'text-gray-400': !item.active,
                'justify-center': isCollapsed && !isMobile
              }"
            >
              <component 
                :is="item.icon" 
                class="nav-icon"
              />
              <span
                class="nav-text"
                :class="navTextClasses"
              >
                {{ item.name }}
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Theme Toggle -->
      <div class="shrink-0">
        <ThemeToggle 
          :is-collapsed="isCollapsed && !isMobile"
          :nav-text-classes="navTextClasses"
        />
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { 
  HomeIcon, 
  ChartBarIcon, 
  UsersIcon, 
  CogIcon 
} from './icons'

const props = defineProps({
  isCollapsed: Boolean,
  showMobile: Boolean
})

const emit = defineEmits(['toggle', 'closeMobile'])

const isMobile = computed(() => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
})

const sidebarClasses = computed(() => ({
  'w-20': props.isCollapsed && !isMobile.value,
  'w-64': !props.isCollapsed || isMobile.value,
  'translate-x-0': props.showMobile || !isMobile.value,
  '-translate-x-full': !props.showMobile && isMobile.value,
  'sidebar bg-gray-900/80 dark:bg-gray-900/80 light:bg-gray-50/80': true
}))

const logoTextClasses = computed(() => ({
  'opacity-0 w-0 ml-0': props.isCollapsed && !isMobile.value,
  'opacity-100 w-auto ml-3': !props.isCollapsed || isMobile.value
}))

const navTextClasses = computed(() => ({
  'opacity-0 w-0 ml-0': props.isCollapsed && !isMobile.value,
  'opacity-100 w-auto ml-4': !props.isCollapsed || isMobile.value
}))

const navigationItems = [
  { name: 'Dashboard', icon: HomeIcon, active: true },
  { name: 'Analytics', icon: ChartBarIcon, active: false },
  { name: 'Users', icon: UsersIcon, active: false },
  { name: 'Settings', icon: CogIcon, active: false }
]

const handleClickOutside = (event) => {
  if (isMobile.value && props.showMobile) {
    const sidebar = event.target.closest('aside')
    if (!sidebar) {
      emit('closeMobile')
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
