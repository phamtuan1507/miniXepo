<template lang="">
  <div class="py-5">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <h3 class="text-[#a05c3c] mb-[18px] uppercase text-center">
        Tin tức & blog
      </h3>
      <h2 class="text-center font-bold text-[48px] text-[#121f38]">
        Tin tức nổi bật
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
            <SwiperSlide v-for="(item, idx) in blog" :key="idx">
              <div class="relative group">
                <div class="">
                  <img
                    :src="item.image"
                    alt=""
                    class="w-full transition-transform duration-300 cursor-pointer group-hover:scale-105"
                  />
                </div>
                <p
                  class="text-[#121f38] hover:text-[#a05c3c] cursor-pointer mb-[15px] mt-[22px]"
                >
                  {{ item.title }}
                </p>
                <p class="font-semibold text-lg text-[#555555] mb-[18px]">
                  {{ item.description }}
                </p>
                <div class="border-t-1 border-[#a1a1a180] mt-[15px] pt-[16px]">
                <span>
                    <span class="text-[#6f6c6c] hover:text-[#a05c3c] cursor-pointer">{{ item.author }}</span> /
                    <span class="text-[#6f6c6c] hover:text-[#a05c3c] cursor-pointer">{{ item.createTime }}</span>
                </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const blog = [
  {
    image: "/blog1.jpg",
    description:
      "Discover the latest trends in facial care with our expert tips and products.",
    title: "Safari",
    author: "abc",
    createTime: "15 Tháng Ba, 2023",
  },
  {
    image: "/blog2.jpg",
    description:
      "Explore our new range of facial care products designed for all skin types.",
    title: "Lipstick",
    author: "Sale!",
    createTime: "15 Tháng Ba, 2023",
  },
  {
    image: "/blog3.jpg",
    description:
      "Enhance your beauty routine with our innovative facial care solutions.",
    title: "Hair Shine",
    author: "Sale!",
    createTime: "15 Tháng Ba, 2023",
  },
  {
    image: "/blog1.jpg",
    description:
      "Experience the best in facial care with our premium products and expert advice.",
    title: "Roger Scott",
    author: "Sale!",
    createTime: "15 Tháng Ba, 2023",
  },
  {
    image: "/blog2.jpg",
    description:
      "Achieve glowing skin with our top-rated facial care products.",
    title: "Nail Polish",
    author: "Sale!",
    createTime: "15 Tháng Ba, 2023",
  },
];
</script>
