<template>
  <div class="container w-full mx-auto">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 4000 }"
      :pagination="{ clickable: true }"
      class="h-[400px] md:h-[600px] rounded-lg"
    >
      <swiper-slide v-for="(slide, idx) in slides" :key="idx" class="relative">
        <img
          :src="slide.img"
          :alt="slide.alt"
          class="object-cover w-full h-full"
        />
        <!-- Nội dung bên trái -->
        <div
          class="absolute top-0 left-0 z-10 flex flex-col justify-center h-full pl-16 md:pl-32"
        >
          <div class="text-lg md:text-xl font-medium mb-2 text-[#1a2233]">
            {{ slide.subTitle }}
          </div>
          <h2
            class="text-3xl md:text-5xl font-bold text-[#1a2233] mb-4 leading-tight"
          >
            {{ slide.title }}
          </h2>
          <p class="max-w-lg text-base md:text-lg text-[#1a2233] mb-6">
            {{ slide.desc }}
          </p>
          <div>
            <button
              class="relative z-[1] flex items-center pe-[10px] pb-[10px] pt-[10px] ps-[25px] text-sm font-bold uppercase tracking-wider text-[#a05c3c] hover:text-[#fff] bg-[#ffffff] border-none rounded-none overflow-hidden text-center group cursor-pointer"
            >
              Đặt lịch ngay
              <span class="bg-[#a05c3c] p-[10px] ms-[15px]">
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
              <span
                class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
              <span
                class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
            </button>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";


const slides = [
  {
    img: "/banner1.jpg",
    alt: "Banner 1",
    subTitle: "Spa & Beauty Center",
    title: "Chăm sóc toàn diện cơ thể",
    desc: "Với sự kết hợp hoàn hảo giữa yêu thương và chăm sóc, chúng tôi cam kết mang đến cho bạn trải nghiệm spa vượt trội tại thành phố của bạn.",
  },
  {
    img: "/banner2.jpg",
    alt: "Banner 2",
    subTitle: "Spa & Beauty Center",
    title: "Spa thư giãn Và phục hồi",
    desc: "Tất cả những điều bạn cần để tận hưởng một trải nghiệm spa tuyệt vời đều có tại Spa chúng tôi.",
  },
  {
    img: "/banner3.jpg",
    alt: "Banner 3",
    subTitle: "Spa & Beauty Center",
    title: "Liệu pháp spa chuyên nghiệp",
    desc: "Chúng tôi mong muốn mang đến cho bạn trải nghiệm tuyệt vời nhất, nơi mà bạn có thể thư giãn, phục hồi và tận hưởng cuộc sống toàn diện nhất.",
  },
];



</script>
