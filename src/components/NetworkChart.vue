<template>
  <div class="terminal-window p-4 rounded-lg">
    <h3 class="text-gray-200 font-semibold mb-2">
      Network Traffic :: Incoming Packets (M)
    </h3>
    <div class="h-64 w-full text-cyan-400">
      <svg
        class="w-full h-full"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 250"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#00ffff;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#00ffff;stop-opacity:0.1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#00ffff;stop-opacity:0.4" />
            <stop offset="100%" style="stop-color:#00ffff;stop-opacity:0.05" />
          </linearGradient>
        </defs>
        
        <!-- Primary line with area fill -->
        <path
          d="M0 180 C 40 120, 80 100, 120 130 S 200 200, 240 160, 280 100, 320 120, 360 80, 400 100 L 400 250 L 0 250 Z"
          fill="url(#gradient1)"
        />
        <path
          d="M0 180 C 40 120, 80 100, 120 130 S 200 200, 240 160, 280 100, 320 120, 360 80, 400 100"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          vector-effect="non-scaling-stroke"
        />
        
        <!-- Secondary line with area fill -->
        <path
          d="M0 200 C 40 180, 80 160, 120 190 S 200 230, 240 210, 280 160, 320 190, 360 150, 400 180 L 400 250 L 0 250 Z"
          fill="url(#gradient2)"
        />
        <path
          d="M0 200 C 40 180, 80 160, 120 190 S 200 230, 240 210, 280 160, 320 190, 360 150, 400 180"
          stroke="currentColor"
          stroke-width="2"
          stroke-opacity="0.4"
          fill="none"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
  </div>
</template>
