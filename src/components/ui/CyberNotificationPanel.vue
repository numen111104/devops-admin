<template>
  <div class="relative">
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 scale-95 translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-2"
    >
      <div
        v-if="show"
        class="absolute right-0 top-full mt-2 w-80 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 backdrop-blur-md z-50"
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 class="text-lg font-semibold text-gray-100">Notifications</h3>
          <div class="flex items-center gap-2">
            <button
              @click="markAllAsRead"
              class="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Mark all read
            </button>
            <button
              @click="close"
              class="p-1 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <IconX class="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <!-- Notifications List -->
        <div class="max-h-96 overflow-y-auto">
          <div v-if="notifications.length === 0" class="p-6 text-center text-gray-400">
            <IconBell class="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No notifications</p>
          </div>
          
          <div v-else class="divide-y divide-gray-700">
            <div
              v-for="notification in notifications"
              :key="notification.id"
              class="p-4 hover:bg-gray-700/50 transition-colors cursor-pointer"
              :class="{ 'bg-gray-700/30': !notification.read }"
              @click="markAsRead(notification.id)"
            >
              <div class="flex items-start gap-3">
                <div :class="getNotificationIconClasses(notification.type)">
                  <component :is="getNotificationIcon(notification.type)" class="w-5 h-5" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-100">{{ notification.title }}</p>
                  <p class="text-sm text-gray-400 mt-1">{{ notification.message }}</p>
                  <p class="text-xs text-gray-500 mt-2">{{ formatTime(notification.timestamp) }}</p>
                </div>
                <div v-if="!notification.read" class="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-gray-700">
          <button class="w-full text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
            View all notifications
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { 
  IconX, 
  IconBell, 
  IconInfoCircle, 
  IconCheckCircle, 
  IconExclamationTriangle, 
  IconAlertCircle 
} from '@tabler/icons-vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  notifications: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['close', 'mark-read', 'mark-all-read'])

const close = () => {
  emit('close')
}

const markAsRead = (id) => {
  emit('mark-read', id)
}

const markAllAsRead = () => {
  emit('mark-all-read')
}

const getNotificationIcon = (type) => {
  const icons = {
    info: IconInfoCircle,
    success: IconCheckCircle,
    warning: IconExclamationTriangle,
    error: IconAlertCircle
  }
  return icons[type] || IconInfoCircle
}

const getNotificationIconClasses = (type) => {
  const baseClasses = 'flex items-center justify-center w-8 h-8 rounded-full'
  const typeClasses = {
    info: 'bg-blue-500/20 text-blue-400',
    success: 'bg-emerald-500/20 text-emerald-400',
    warning: 'bg-amber-500/20 text-amber-400',
    error: 'bg-red-500/20 text-red-400'
  }
  return `${baseClasses} ${typeClasses[type] || typeClasses.info}`
}

const formatTime = (timestamp) => {
  const now = new Date()
  const time = new Date(timestamp)
  const diff = now - time
  
  if (diff < 60000) return 'Just now'
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
  return `${Math.floor(diff / 86400000)}d ago`
}
</script>
