<template lang="">
  <div class="container mx-auto px-4 py-5 bg-[#a05c3c] sm:px-6 lg:px-8">
    <section class="py-[45px]">
      <!-- <div>
        <Swiper
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :breakpoints="{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }"
          class="w-full"
        >
          <SwiperSlide v-for="(item, idx) in partners" :key="idx">
            <div class="text-center">
              <img
                :src="item.image"
                alt=""
                class=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div> -->
      <div class="grid grid-cols-2 lg:grid-cols-6">
        <div v-for="(item, idx) in partners" :key="idx">
            <div class="flex items-center justify-center my-4">
              <img
                :src="item.image"
                alt=""
                class=""
              />
            </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const partners = [
  {
    id: 1,
    image: "/p1.png",
  },
  {
    id: 2,
    image: "/p2.png",
  },
  {
    id: 3,
    image: "/p3.png",
  },
  {
    id: 4,
    image: "/p4.png",
  },
  {
    id: 5,
    image: "/p5.png",
  },
  {
    id: 6,
    image: "/p6.png",
  },
];
</script>
