<template>
  <div class="min-h-screen">
    <MatrixBackground />
    <div class="grid-pattern"></div>
    
    <!-- Mobile Overlay -->
    <div 
      v-show="showMobileOverlay"
      @click="closeMobileSidebar"
      class="fixed inset-0 bg-black/50 z-30 md:hidden"
    ></div>

    <div class="flex h-screen">
      <Sidebar 
        :is-collapsed="isSidebarCollapsed"
        :show-mobile="showMobileSidebar"
        @toggle="toggleSidebar"
        @close-mobile="closeMobileSidebar"
      />
      
      <div 
        class="flex-grow relative transition-all duration-300 ease-in-out"
        :class="{
          'md:ml-20': isSidebarCollapsed,
          'md:ml-64': !isSidebarCollapsed
        }"
      >
        <Header @toggle-sidebar="toggleSidebar" />
        <MainContent />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MatrixBackground from './components/MatrixBackground.vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import MainContent from './components/MainContent.vue'

const isSidebarCollapsed = ref(false)
const showMobileSidebar = ref(false)
const showMobileOverlay = ref(false)

const toggleSidebar = () => {
  const isMobile = window.innerWidth < 768
  
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
  const isMobile = window.innerWidth < 768
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
