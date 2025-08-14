import { defineStore } from "pinia";
import { ref } from "vue";

export const useUiStore = defineStore("ui", () => {
  // STATE: Ini adalah data utama kita
  const isMobileSidebarOpen = ref(false);

  // ACTIONS: Ini adalah fungsi untuk mengubah state
  function toggleMobileSidebar() {
    isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
  }

  function closeMobileSidebar() {
    isMobileSidebarOpen.value = false;
  }

  return {
    isMobileSidebarOpen,
    toggleMobileSidebar,
    closeMobileSidebar,
  };
});
