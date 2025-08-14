<template>
  <div v-if="show" :class="alertClasses" role="alert">
    <div class="flex items-start">
      <component :is="iconComponent" :class="iconClasses" />
      <div class="flex-1 ml-3">
        <h3 v-if="title" class="text-sm font-medium" :class="titleClasses">
          {{ title }}
        </h3>
        <div class="text-sm" :class="messageClasses">
          <slot>{{ message }}</slot>
        </div>
      </div>
      <button v-if="dismissible" @click="dismiss"
        class="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 hover:bg-black/10 focus:ring-2 focus:ring-offset-2"
        :class="dismissClasses">
        <IconX class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
  IconInfoCircle,
  IconCircleDashedNumber1,
  IconExclamationCircle,
  IconCircleX,
  IconX
} from '@tabler/icons-vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'danger', 'warning', 'info'].includes(value)
  },
  title: String,
  message: String,
  dismissible: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue', 'dismiss'])

const show = ref(props.modelValue)

const dismiss = () => {
  show.value = false
  emit('update:modelValue', false)
  emit('dismiss')
}

const iconComponent = computed(() => {
  const icons = {
    success: IconCircleDashedNumber1,
    danger: IconCircleX,
    warning: IconExclamationCircle,
    info: IconInfoCircle
  }
  return icons[props.variant]
})

const alertClasses = computed(() => {
  const baseClasses = 'p-4 rounded-lg border backdrop-blur-sm'
  const variantClasses = {
    success: 'bg-emerald-900/20 border-emerald-500/30 text-emerald-100',
    danger: 'bg-red-900/20 border-red-500/30 text-red-100',
    warning: 'bg-amber-900/20 border-amber-500/30 text-amber-100',
    info: 'bg-blue-900/20 border-blue-500/30 text-blue-100'
  }
  return `${baseClasses} ${variantClasses[props.variant]}`
})

const iconClasses = computed(() => {
  const variantClasses = {
    success: 'text-emerald-400',
    danger: 'text-red-400',
    warning: 'text-amber-400',
    info: 'text-blue-400'
  }
  return `w-5 h-5 ${variantClasses[props.variant]}`
})

const titleClasses = computed(() => {
  const variantClasses = {
    success: 'text-emerald-100',
    danger: 'text-red-100',
    warning: 'text-amber-100',
    info: 'text-blue-100'
  }
  return variantClasses[props.variant]
})

const messageClasses = computed(() => {
  const variantClasses = {
    success: 'text-emerald-200',
    danger: 'text-red-200',
    warning: 'text-amber-200',
    info: 'text-blue-200'
  }
  return variantClasses[props.variant]
})

const dismissClasses = computed(() => {
  const variantClasses = {
    success: 'text-emerald-400 focus:ring-emerald-500',
    danger: 'text-red-400 focus:ring-red-500',
    warning: 'text-amber-400 focus:ring-amber-500',
    info: 'text-blue-400 focus:ring-blue-500'
  }
  return variantClasses[props.variant]
})
</script>
