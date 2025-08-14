<template>
  <div class="terminal-window p-4 rounded-lg">
    <h3 class="text-gray-200 font-semibold mb-2">Threats by Type</h3>
    <div class="h-64 w-full space-y-4 pt-4 pr-4">
      <div 
        v-for="threat in threatData" 
        :key="threat.name"
        class="flex items-center group"
      >
        <span class="w-24 text-sm text-gray-400 font-mono">{{ threat.name }}</span>
        <div class="flex-1 bg-gray-700/50 rounded-full h-3 ml-4 overflow-hidden">
          <div
            class="h-3 rounded-full transition-all duration-1000 ease-out"
            :class="threat.colorClass"
            :style="{ width: threat.percentage + '%' }"
          ></div>
        </div>
        <span class="ml-2 text-xs text-gray-400 font-mono w-8">{{ threat.percentage }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const threatData = [
  { name: 'Malware', percentage: 75, colorClass: 'bg-cyan-400' },
  { name: 'Phishing', percentage: 45, colorClass: 'bg-cyan-400' },
  { name: 'DDoS', percentage: 60, colorClass: 'bg-yellow-400' },
  { name: 'Intrusion', percentage: 20, colorClass: 'bg-red-500' }
]
</script>
