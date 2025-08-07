<template lang="">
  <div class="pt-[80px]">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <h3 class="text-[#a05c3c] mb-[18px] uppercase text-center">
        chất lượng hàng đầu
      </h3>
      <h2 class="text-center font-bold text-[48px] text-[#121f38]">
        Sản phẩm mới nhất
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
              1024: { slidesPerView: 4 },
            }"
            class="w-full"
          >
            <SwiperSlide v-for="(item, idx) in product" :key="idx">
              <div class="relative group">
                <div class="bg-[#f1f1f1] overflow-hidden">
                  <img
                    :src="item.image"
                    alt=""
                    class="object-cover w-full h-full transition-transform duration-300 rounded-full group-hover:scale-105"
                  />
                  <div
                    class="absolute top-[10px] right-[10px] flex items-center justify-center transition-all duration-300 bg-opacity-0 group-hover:bg-opacity-50"
                  >
                    <a
                      href="#"
                      class="transition-opacity duration-300 opacity-0 cart-icon group-hover:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 text-[#9a563a] bg-[#fff] hover:text-[#fff] hover:bg-[#9a563a] transition-all duration-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <span
                  v-if="item.sale"
                  class="absolute top-[10px] left-[10px] bg-[#a05c3c] text-white text-xs font-bold px-2 py-1 rounded"
                >
                  {{ item.sale }}
                </span>
                <div
                  class="flex justify-center gap-1 text-[#a05c3c] z-10"
                ></div>
                <p class="text-lg font-semibold text-center">
                  {{ item.name }}
                </p>
                <p class="mb-4 text-center">
                  {{ item.price }}
                </p>
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

const product = [
  {
    image: "/product1.png",
    price: 1111,
    name: "Safari",
    sale: null, // Không có sale
  },
  {
    image: "/product2.png",
    price: 1111,
    name: "Lipstick",
    sale: "Sale!", // Giá sau giảm
  },
  {
    image: "/product3.png",
    price: 1111,
    name: "Hair Shine",
    sale: "Sale!", // % giảm giá
  },
  {
    image: "/product4.png",
    price: 1111,
    name: "Roger Scott",
    sale: "Sale!", // Không có sale
  },
  {
    image: "/product5.png",
    price: 1111,
    name: "Nail Polish",
    sale: "Sale!", // Giá sau giảm
  },
];
</script>
