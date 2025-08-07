<template lang="">
  <div class="relative mb-[50px] group">
    <div
      class="absolute left-1/2 bottom-[-20px] transform -translate-x-1/2 transition-all duration-400 ease-in-out"
    >
      <div class="relative flex items-center justify-center">
        <div
          class="relative flex items-center justify-center w-25 h-25 rounded-full bg-[#8b5e3c] group"
        >
          <!-- Circular text with rotation -->
          <div
            class="absolute flex items-center justify-center w-full h-full animate-spin-slow"
          >
            <span
              v-for="(word, index) in words"
              :key="index"
              class="absolute p-8 text-[10px] font-semibold text-white"
              :style="{
                transform: `rotate(${index * 45}deg) translateY(-50%)`,
              }"
            >
              {{ word }}
            </span>
          </div>
          <!-- Central arrow -->
          <svg
            class="w-12 h-12 text-white border rounded-full bg-[#8b5e3c] group-hover:bg-white group-hover:text-[#8b5e3c] duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

// Define the words for circular text
const words = ref("at all day how make your".split(" "));
</script>
<style scoped>
/* Custom animation for slower spin */
.animate-spin-slow {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

