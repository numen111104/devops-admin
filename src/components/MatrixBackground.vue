<template>
  <canvas 
    ref="matrixCanvas" 
    class="fixed top-0 left-0 w-full h-full -z-10 dark:block hidden"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const matrixCanvas = ref(null)
let animationId = null

onMounted(() => {
  const canvas = matrixCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}"
  const matrixArray = matrix.split("")
  const fontSize = 12
  const columns = canvas.width / fontSize
  const drops = Array.from({ length: columns }).fill(1)

  const drawMatrix = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#00ffff"
    ctx.font = fontSize + "px monospace"
    
    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      drops[i]++
    }
    
    animationId = requestAnimationFrame(drawMatrix)
  }

  const handleResize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  window.addEventListener('resize', handleResize)
  drawMatrix()

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  })
})
</script>
