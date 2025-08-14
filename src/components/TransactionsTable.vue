<template>
  <div class="terminal-window rounded-lg overflow-hidden">
    <h3 class="text-gray-200 font-semibold p-4">Recent Transactions</h3>
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs uppercase bg-gray-800/50">
          <tr>
            <th scope="col" class="px-6 py-3 text-gray-300">Transaction ID</th>
            <th scope="col" class="px-6 py-3 text-gray-300">Source IP</th>
            <th scope="col" class="px-6 py-3 text-gray-300">Amount</th>
            <th scope="col" class="px-6 py-3 text-gray-300">Status</th>
            <th scope="col" class="px-6 py-3 text-gray-300">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="transaction in transactions" 
            :key="transaction.id"
            class="border-t border-gray-700/50 hover:bg-cyan-500/5 transition-colors duration-200"
          >
            <td class="px-6 py-4 font-mono text-gray-300">{{ transaction.id }}</td>
            <td class="px-6 py-4 text-gray-400">{{ transaction.sourceIp }}</td>
            <td class="px-6 py-4 text-gray-300">{{ transaction.amount }}</td>
            <td class="px-6 py-4">
              <span 
                class="px-2 py-1 rounded-full text-xs font-medium"
                :class="getStatusClass(transaction.status)"
              >
                {{ transaction.status }}
              </span>
            </td>
            <td class="px-6 py-4 font-mono text-gray-400">{{ transaction.timestamp }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const transactions = [
  {
    id: 'TXN7B4C...',
    sourceIp: '192.168.1.101',
    amount: '$2,499.00',
    status: 'Completed',
    timestamp: '2025-08-12 10:11'
  },
  {
    id: 'TXN8A1D...',
    sourceIp: '10.0.0.42',
    amount: '$99.50',
    status: 'Pending',
    timestamp: '2025-08-12 10:10'
  },
  {
    id: 'TXN3F5E...',
    sourceIp: '203.0.113.8',
    amount: '$1,200.00',
    status: 'Failed',
    timestamp: '2025-08-12 10:09'
  }
]

const getStatusClass = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-900/50 text-green-300 border border-green-500/30'
    case 'Pending':
      return 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/30'
    case 'Failed':
      return 'bg-red-900/50 text-red-300 border border-red-500/30'
    default:
      return 'bg-gray-900/50 text-gray-300 border border-gray-500/30'
  }
}
</script>
