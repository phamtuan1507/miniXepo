<template lang="">
  <div
    class="container mx-auto px-4 pt-[80px] bg-gradient-to-b from-[#fcf2ee] to-transparent sm:px-6 lg:px-8 bg-[url(/bg-author.jpg)]"
  >
    <h3 class="text-[#a05c3c] mb-[18px] uppercase text-center">
      Chăm sóc khách hàng
    </h3>
    <h2 class="text-center font-bold text-[48px] text-[#121f38]">
      Khách hàng đánh giá
    </h2>
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
          <SwiperSlide v-for="(item, idx) in customer" :key="idx">
            <div
              class="bg-[#fff] relative p-[55px_30px_30px_30px] m-[40px_0_30px_0] transition-colors duration-300 border-b-4 border-solid border-transparent hover:border-[#9a563a] mb-[30px] group"
            >
              <div
                class="w-[80px] h-[80px] rounded-full overflow-hidden mx-auto mb-4 absolute top-[-40px] p-[7px] bg-white shadow-lg"
              >
                <img
                  :src="item.avatar"
                  alt=""
                  class="object-cover w-full h-full rounded-full"
                />
              </div>
              <div>
                <svg
                  class="absolute opacity-[0.2] group-hover:opacity-100 right-[40px] top-0 text-[#9a563a] mt-[-30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 290 290"
                  width="50"
                  height="50"
                >
                  <path
                    d="M267.88 145V47.35h-97.65V145h48.82c0 26.92-21.9 48.82-48.82 48.82v48.82c53.93.01 97.65-43.71 97.65-97.64zM22.12 193.82v48.82c53.93 0 97.65-43.72 97.65-97.65V47.35H22.12V145h48.82c.01 26.92-21.89 48.82-48.82 48.82z"
                    fill="#9a563a"
                    class="text-[10px]"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="">
                  <div ref="starContainer" class="flex space-x-1 text-2xl">
                    <span
                      v-for="i in 5"
                      :key="i"
                      :class="{
                        'text-[#9a563a]': i <= item.rating,
                        'text-gray-300': i > item.rating,
                      }"
                    >
                      ★
                    </span>
                  </div>
                </div>
              </div>
              <p class="mb-4 text-[16px] text-[#555555]">
                "{{ item.comment }}"
              </p>
              <p class="text-[22px] font-semibold">
                {{ item.author }}
              </p>
              <p class="text-[12px] text-[#9a563a]">{{ item.authorType }}</p>
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

import { ref } from "vue";

const customer = ref([
  {
    avatar: "/author1.png",
    comment:
      "Da của tôi cảm thấy sảng khoái và mịn màng sau liệu trình. Tôi chắc chắn sẽ quay lại và khuyên bạn bè của tôi thử nghiệm dịch vụ spa tại đây.",
    author: "Manh Manh",
    authorType: "Khách hàng",
    rating: 4,
  },
  {
    avatar: "/author2.png",
    comment:
      "Da của tôi cảm thấy sảng khoái và mịn màng sau liệu trình. Tôi chắc chắn sẽ quay lại và khuyên bạn bè của tôi thử nghiệm dịch vụ spa tại đây.",
    author: "Điều Gianh",
    authorType: "Khách hàng",
    rating: 3,
  },
  {
    avatar: "/author3.png",
    comment:
      "Da của tôi cảm thấy sảng khoái và mịn màng sau liệu trình. Tôi chắc chắn sẽ quay lại và khuyên bạn bè của tôi thử nghiệm dịch vụ spa tại đây.",
    author: "Bạch Kim",
    authorType: "Khách hàng",
    rating: 2,
  },
  {
    avatar: "/author1.png",
    comment: "Da của tôi cảm thấy sảng khoái và mịn màng sau liệu trình. Tôi chắc chắn sẽ quay lại và khuyên bạn bè của tôi thử nghiệm dịch vụ spa tại đây.",
    author: "Thi An",
    authorType: "Khách hàng",
    rating: 1,
  },
]);

const starContainer = ref(null);
</script>
