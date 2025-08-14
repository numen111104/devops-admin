<template>
  <div class="relative">
    <Transition enter-active-class="transition-all duration-300" enter-from-class="scale-95 translate-y-2 opacity-0"
      enter-to-class="scale-100 translate-y-0 opacity-100" leave-active-class="transition-all duration-200"
      leave-from-class="scale-100 translate-y-0 opacity-100" leave-to-class="scale-95 translate-y-2 opacity-0">
      <div v-if="show"
        class="absolute right-0 z-50 mt-2 bg-gray-800 border border-gray-700 shadow-2xl top-full w-80 rounded-xl backdrop-blur-md">
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 class="text-lg font-semibold text-gray-100">Notifications</h3>
          <div class="flex items-center gap-2">
            <button @click="markAllAsRead" class="text-xs transition-colors text-cyan-400 hover:text-cyan-300">
              Mark all read
            </button>
            <button @click="close" class="p-1 transition-colors rounded-lg hover:bg-gray-700">
              <IconX class="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <!-- Notifications List -->
        <div class="overflow-y-auto max-h-96">
          <div v-if="notifications.length === 0" class="p-6 text-center text-gray-400">
            <IconBell class="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No notifications</p>
          </div>

          <div v-else class="divide-y divide-gray-700">
            <div v-for="notification in notifications" :key="notification.id"
              class="p-4 transition-colors cursor-pointer hover:bg-gray-700/50"
              :class="{ 'bg-gray-700/30': !notification.read }" @click="markAsRead(notification.id)">
              <div class="flex items-start gap-3">
                <div :class="getNotificationIconClasses(notification.type)">
                  <component :is="getNotificationIcon(notification.type)" class="w-5 h-5" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-100">{{ notification.title }}</p>
                  <p class="mt-1 text-sm text-gray-400">{{ notification.message }}</p>
                  <p class="mt-2 text-xs text-gray-500">{{ formatTime(notification.timestamp) }}</p>
                </div>
                <div v-if="!notification.read" class="w-2 h-2 mt-2 rounded-full bg-cyan-400"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-gray-700">
          <button class="w-full text-sm transition-colors text-cyan-400 hover:text-cyan-300">
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
  IconCircleDashedNumber1,
  IconExclamationCircle,
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
    success: IconCircleDashedNumber1,
    warning: IconExclamationCircle,
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
