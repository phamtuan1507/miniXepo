<template>
  <div
    class="container px-4 py-5 mx-auto sm:px-6 lg:px-8 bg-[url(/advise.jpg)] bg-no-repeat bg-cover overflow-hidden transition-[background,border,border-radius,box-shadow] duration-300 lg:py-20"
  >
    <div>
      <div
        class="relative flex items-center justify-center"
      >
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
    <h2 class="text-center text-white text-[36px] lg:text-[55px] font-normal leading-[66px] pt-[10px] pb-[30px]">
      Nhận tư vấn miễn phí
    </h2>

    <div class="flex justify-center gap-6">
      <button
        class="relative z-[1] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
      >
        Đăng ký
        <span
          class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
        ></span>
        <span
          class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
        ></span>
      </button>
      <div>
        <button
          class="relative z-[1] flex items-center ps-[5px] pb-[5px] pt-[5px] pe-[20px] text-sm font-bold uppercase tracking-wider text-[#a05c3c] hover:text-[#fff] bg-[#ffffff] border-none rounded-none overflow-hidden text-center group cursor-pointer"
        >
          <span class="bg-[#a05c3c] p-[10px] me-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              class="size-6 text-[#fff]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
          Gọi ngay
          <span
            class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
          ></span>
          <span
            class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
          ></span>
        </button>
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
