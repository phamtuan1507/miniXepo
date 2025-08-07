<template lang="">
  <div class="container mx-auto px-4 pt-[80px] bg-gradient-to-b from-[#fcf2ee] to-transparent sm:px-6 lg:px-8">
    <h3 class="text-[#a05c3c] mb-[18px] uppercase text-center">
      Chăm sóc da mặt
    </h3>
    <h2 class="text-center font-bold text-[48px] text-[#121f38]">
      Điều trị da mặt & toàn thân
    </h2>
    <div class="flex justify-center">
      <img src="/shape1.png" alt="" />
    </div>
    <section class="pt-[45px]">
      <div class="">
        <Swiper
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }"
          class="w-full"
        >
          <SwiperSlide v-for="(item, idx) in testimonials" :key="idx">
            <div
              class="bg-white z-1 hover:bg-[#a05c3c] hover:text-[#ffffff] text-center shadow-[1.5px_2.598px_14.88px_1.12px_rgba(54, 72, 89, 0.05)] py-6 px-4 transition-colors duration-300 border border-solid border-[rgba(154,86,58,0.25)] outline-1 outline-[#a05c3c] hover:outline-[#ffffff] outline-offset-[-9px] mb-[30px]"
            >
              <div
                class="w-24 h-24 mx-auto flex items-center justify-center rounded-full border border-dashed border-[#a05c3c] hover:border-[#ffffff] p-4 animate-spin-slow bg-[#fde7da] bg-cover bg-center mb-4"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="object-cover w-full h-full rounded-full"
                />
              </div>
              <div class="flex justify-center gap-1 text-[#a05c3c] z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  class="w-[14px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  class="w-[14px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  class="w-[14px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  class="w-[14px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>
              <p class="text-lg font-semibold">
                {{ item.name }}
              </p>
              <p class="mb-4">"{{ item.text }}"</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    image: "/fe1.png",
    text: "Sử dụng ánh sáng LED tiên tiến để kích thích sản xuất collagen, làm mờ nếp nhăn, giảm mụn và làm sáng da.",
    name: "Điều trị ánh sáng LED hiện đại",
  },
  {
    image: "/fe2.png",
    text: "Sử dụng tinh dầu thảo dược tự nhiên để làm dịu, làm sạch và cung cấp dưỡng chất cho da và cơ thể.",
    name: "Điều trị bằng tinh dầu thảo dược",
  },
  {
    image: "/fe.png",
    text: "Kết hợp đá nóng và đá lạnh để kích thích tuần hoàn máu, làm săn chắc da và giảm sưng viêm.",
    name: "Điều trị bằng kỹ thuật đá nóng lạnh",
  },
  {
    image: "/fe1.png",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    name: "Roger Scott",
  },
  {
    image: "/fe2.png",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    name: "Roger Scott",
  },
];
</script>
