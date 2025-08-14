<template>
  <!-- Mobile Overlay -->
  <div 
    v-if="isMobile && showMobile"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
    @click="emit('closeMobile')"
  ></div>

  <aside 
    class="sidebar fixed top-0 left-0 h-full z-40 backdrop-blur-md transition-all duration-300 ease-in-out"
    :class="sidebarClasses"
  >
    <!-- Mobile Close Button -->
    <button
      v-if="isMobile && showMobile"
      @click="emit('closeMobile')"
      class="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors lg:hidden"
    >
      <IconX class="h-5 w-5 text-gray-300" />
    </button>

    <div class="flex flex-col h-full p-4">
      <!-- Logo Section -->
      <div 
        class="flex items-center mb-8 shrink-0 transition-all duration-300 ease-in-out"
        :class="{ 'justify-center': isCollapsed && !isMobile }"
      >
        <IconShield
          class="h-8 w-8 text-cyan-400 shrink-0 transition-all duration-300 ease-in-out"
        />
        <span
          class="ml-3 text-xl font-semibold text-gray-200 whitespace-nowrap transition-all duration-300 ease-in-out"
          :class="logoTextClasses"
        >
          CYBEROPS
        </span>
      </div>

      <!-- Navigation -->
      <nav class="flex-grow overflow-hidden">
        <ul class="space-y-2">
          <li v-for="item in navigationItems" :key="item.name">
            <router-link
              :to="item.path"
              class="sidebar-item group"
              :class="{ 
                'justify-center': isCollapsed && !isMobile
              }"
              active-class="active"
              @click="handleNavClick"
            >
              <component 
                :is="item.icon" 
                class="nav-icon shrink-0 transition-all duration-300 ease-in-out"
              />
              <span
                class="nav-text transition-all duration-300 ease-in-out"
                :class="navTextClasses"
              >
                {{ item.name }}
              </span>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Theme Toggle -->
      <div class="shrink-0 mt-4">
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
  IconDashboard, 
  IconChartBar, 
  IconUsers, 
  IconSettings,
  IconShield,
  IconX,
  IconBook
} from '@tabler/icons-vue'

const props = defineProps({
  isCollapsed: Boolean,
  showMobile: Boolean
})

const emit = defineEmits(['toggle', 'closeMobile'])

const isMobile = computed(() => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 1024 // Updated breakpoint to lg (1024px)
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
  { name: 'Dashboard', icon: IconDashboard, path: '/' },
  { name: 'Analytics', icon: IconChartBar, path: '/analytics' },
  { name: 'Users', icon: IconUsers, path: '/users' },
  { name: 'Settings', icon: IconSettings, path: '/settings' },
  { name: 'Guide', icon: IconBook, path: '/guide' }
]

const handleNavClick = () => {
  if (isMobile.value && props.showMobile) {
    emit('closeMobile')
  }
}

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
