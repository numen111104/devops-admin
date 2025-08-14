<template>
  <div class="min-h-screen">
    <MatrixBackground />
    <div class="grid-pattern"></div>
    
    <!-- Mobile Overlay -->
    <div 
      v-show="showMobileOverlay"
      @click="closeMobileSidebar"
      class="fixed inset-0 bg-black/50 z-30 lg:hidden"
    ></div>

    <div class="flex h-screen">
      <Sidebar 
        :is-collapsed="isSidebarCollapsed"
        :show-mobile="showMobileSidebar"
        @toggle="toggleSidebar"
        @close-mobile="closeMobileSidebar"
      />
      
      <!-- Improved responsive layout with better breakpoints -->
      <div 
        class="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out overflow-hidden"
        :class="{
          'lg:ml-20': isSidebarCollapsed,
          'lg:ml-64': !isSidebarCollapsed
        }"
      >
        <!-- Pass current page title to Header component -->
        <Header 
          :page-title="currentPageTitle" 
          @toggle-sidebar="toggleSidebar" 
        />
        <!-- Added router-view for SPA functionality -->
        <main class="flex-1 overflow-auto">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import MatrixBackground from './components/MatrixBackground.vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'

// Move hook call to the very top before any other declarations
const route = useRoute()

const isSidebarCollapsed = ref(false)
const showMobileSidebar = ref(false)
const showMobileOverlay = ref(false)

const currentPageTitle = computed(() => {
  return route.name || 'Dashboard'
})

const toggleSidebar = () => {
  const isMobile = window.innerWidth < 1024 // Updated breakpoint to lg (1024px)
  
  if (isMobile) {
    showMobileSidebar.value = !showMobileSidebar.value
    showMobileOverlay.value = showMobileSidebar.value
  } else {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
  }
}

const closeMobileSidebar = () => {
  showMobileSidebar.value = false
  showMobileOverlay.value = false
}

const handleResize = () => {
  const isMobile = window.innerWidth < 1024 // Updated breakpoint to lg (1024px)
  if (!isMobile) {
    showMobileSidebar.value = false
    showMobileOverlay.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
