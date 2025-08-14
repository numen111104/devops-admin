<template>
  <div class="p-4 sm:p-6 space-y-6">
    <!-- Responsive dashboard layout -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <StatsCard
        title="Active Threats"
        value="23"
        change="+12%"
        trend="up"
        icon="IconShieldAlert"
      />
      <StatsCard
        title="System Health"
        value="98.5%"
        change="+0.3%"
        trend="up"
        icon="IconActivity"
      />
      <StatsCard
        title="Network Load"
        value="67%"
        change="-5%"
        trend="down"
        icon="IconNetwork"
      />
      <StatsCard
        title="Users Online"
        value="1,247"
        change="+8%"
        trend="up"
        icon="IconUsers"
      />
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <NetworkChart />
      <ThreatChart />
    </div>

    <!-- Transactions Table -->
    <div class="overflow-hidden">
      <TransactionsTable />
    </div>
  </div>
</template>

<script setup>
import StatsCard from '../components/StatsCard.vue'
import NetworkChart from '../components/NetworkChart.vue'
import ThreatChart from '../components/ThreatChart.vue'
import TransactionsTable from '../components/TransactionsTable.vue'
</script>
