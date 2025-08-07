<template lang="">
  <div class="container px-4 mx-auto overflow-hidden sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-16 md:grid-cols-2">
      <div class="relative pb-[50px] mb-[30px] z-1">
        <div
          class="relative w-max max-w-full z-[5] shadow-[1.5px_2.598px_14.88px_1.12px_rgba(18,27,36,0.1)] overflow-hidden"
        >
          <img
            class="transform scale-[1.001] transition-all duration-400 ease-in-out hover:scale-105"
            src="/exp1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="/exp2.png"
            alt=""
            class="absolute left-[-145px] bottom-[55px] z-[4]"
          />
        </div>
        <div
          class="absolute left-[-40px] right-[-40px] bottom-0 h-full max-h-[380px] bg-[#fde7da] z-[3]"
        >
          <span
            class="absolute right-[-75px] top-[140px] text-[60px] leading-none text-[#4d4a49] uppercase opacity-15 rotate-90 writing-mode-vertical-rl font-title"
            >Feature</span
          >
        </div>
      </div>
      <div class="pt-[24px] mb-[30px] col-auto">
        <span class="ms-[0px] text-[#9a563a]">
          Kinh nghiệm chăm sóc da
          <span
            class="bg-[#fde6d8] text-[#9a563a] inline-block p-[6px_17px_6px_20px] ms-[5px]"
            >25 năm
          </span>
        </span>
        <h2 class="ms-[0px] mb-[25px] text-[48px]">
          Khám phá
          <span class="text-[#9a563a]">mới </span>
        </h2>
        <div
          class="mb-[22px] relative flex items-center m-[20px_0_28px_32px] py-[10px] bg-[linear-gradient(120deg,_rgb(253,230,216)_0%,_rgb(254,254,254)_70%)]"
        >
          <div class="m-[0_20px_0_-32px]">
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
          <div class="text-[#464f56] text-[18px] leading-[26px] font-semibold">
            Chúng tôi đến cho bạn một trải nghiệm thư giãn tuyệt vời và chăm sóc
            toàn diện cho cơ thể và tâm hồn.
          </div>
        </div>
        <div class="mx-auto">
          <span class="text-[#464f56] text-[18px] leading-[26px] font-semibold">
            Với dịch vụ spa chất lượng cao và nhân viên chuyên nghiệp, chúng tôi
            cam kết mang đến cho bạn những giây phút thư thái và đắm chìm trong
            không gian yên bình.
          </span>
        </div>
        <div class="mt-[40px]">
          <div
            class="border-t border-b border-[#4d4a492e] bg-[linear-gradient(120deg,_rgb(253,230,216)_0%,_rgb(254,254,254)_70%)] p-[16px_20px] text-[#464f56] text-[18px] leading-[26px] font-semibold"
          >
            Dịch vụ chất lượng cao và hiện đại nhất
          </div>
          <div
            class="border-t border-b border-[#4d4a492e] p-[16px_20px] text-[#464f56] text-[18px] leading-[26px] font-semibold"
          >
            Spa chuyên nghiệp, thoải mái và sang trọng
          </div>
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
