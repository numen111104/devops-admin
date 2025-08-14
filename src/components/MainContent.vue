<template>
  <main class="p-4 space-y-4">
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        v-for="stat in statsData"
        :key="stat.title"
        :title="stat.title"
        :value="stat.value"
        :change="stat.change"
        :subtitle="stat.subtitle"
      />
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
      <NetworkChart class="lg:col-span-3" />
      <ThreatChart class="lg:col-span-2" />
    </div>

    <!-- Transactions Table -->
    <TransactionsTable />
  </main>
</template>

<script setup>
import StatsCard from './StatsCard.vue'
import NetworkChart from './NetworkChart.vue'
import ThreatChart from './ThreatChart.vue'
import TransactionsTable from './TransactionsTable.vue'

const statsData = [
  {
    title: 'Total Revenue',
    value: '$54,321',
    change: '+12.5%',
    subtitle: 'vs. last month',
    changeType: 'positive'
  },
  {
    title: 'Active Sessions',
    value: '1,287',
    change: '-3.2%',
    subtitle: 'realtime users',
    changeType: 'negative'
  },
  {
    title: 'New Tickets',
    value: '24',
    change: '+5',
    subtitle: 'awaiting response',
    changeType: 'warning'
  },
  {
    title: 'System Load',
    value: '45.7%',
    change: 'OK',
    subtitle: 'CPU utilization',
    changeType: 'positive'
  }
]
</script>
