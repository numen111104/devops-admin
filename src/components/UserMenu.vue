<template>
  <div class="relative">
    <button
      @click="toggleMenu"
      class="flex items-center space-x-2 hover:bg-cyan-500/10 rounded-lg p-1 transition-colors duration-200"
    >
      <img
        src="https://i.pravatar.cc/40?u=admin"
        alt="User Avatar"
        class="h-9 w-9 rounded-full border-2 border-cyan-400/50"
      />
      <span class="hidden md:inline text-gray-200">root_admin</span>
    </button>
    
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 transform scale-95 -translate-y-2"
      enter-to-class="opacity-100 transform scale-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 transform scale-100 translate-y-0"
      leave-to-class="opacity-0 transform scale-95 -translate-y-2"
    >
      <div
        v-show="showMenu"
        class="absolute right-0 mt-2 w-48 terminal-window rounded-lg shadow-lg py-1 z-50"
      >
        <a
          href="#"
          class="block px-4 py-2 text-sm hover:bg-cyan-500/10 text-gray-300 transition-colors duration-200"
        >
          Profile
        </a>
        <a
          href="#"
          class="block px-4 py-2 text-sm hover:bg-cyan-500/10 text-gray-300 transition-colors duration-200"
        >
          Settings
        </a>
        <div class="border-t border-cyan-300/20 my-1"></div>
        <a
          href="#"
          class="block px-4 py-2 text-sm hover:bg-red-500/10 text-red-400 transition-colors duration-200"
        >
          Logout
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const handleClickOutside = (event) => {
  const menu = event.target.closest('.relative')
  if (!menu && showMenu.value) {
    showMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
