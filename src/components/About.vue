<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Breadcumb from "./Breadcumb.vue";
import TeamList from "./home/TeamList.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";

// Define the words for circular text
const words = ref("at all day how make your".split(" "));

const teamB = [
  {
    image: "/about1.jpg",
  },
  {
    image: "/about2.jpg",
  },
  {
    image: "/about1.jpg",
  },
];

const customer = ref([
  {
    avatar: "/author1.png",
    comment:
      "Da của tôi cảm thấy sảng khoái và mịn màng sau liệu trình. Tôi chắc chắn sẽ quay lại và khuyên bạn bè của tôi thử nghiệm dịch vụ spa tại đây.",
    author: "Manh Manh",
    authorType: "Khách hàng",
  },
  {
    avatar: "/author2.png",
    comment:
      "Da của tôi cảm thấy sảng khoái và mịn màng sau liệu trình. Tôi chắc chắn sẽ quay lại và khuyên bạn bè của tôi thử nghiệm dịch vụ spa tại đây.",
    author: "Điều Gianh",
    authorType: "Khách hàng",
  },
  {
    avatar: "/author3.png",
    comment:
      "Da của tôi cảm thấy sảng khoái và mịn màng sau liệu trình. Tôi chắc chắn sẽ quay lại và khuyên bạn bè của tôi thử nghiệm dịch vụ spa tại đây.",
    author: "Bạch Kim",
    authorType: "Khách hàng",
  },
  {
    avatar: "/author1.png",
    comment:
      "Da của tôi cảm thấy sảng khoái và mịn màng sau liệu trình. Tôi chắc chắn sẽ quay lại và khuyên bạn bè của tôi thử nghiệm dịch vụ spa tại đây.",
    author: "Thi An",
    authorType: "Khách hàng",
  },
]);
</script>

<template>
  <Header />
  <Breadcumb />
  <div class="container mx-auto px-4 pt-[120px] pb-[90px]">
    <div class="flex items-center justify-around">
      <div>
        <h3 class="text-[#a05c3c] mb-[18px] uppercase">Chào mừng</h3>
        <h2 class="font-bold text-[48px] text-[#121f38]">
          Làn da nên luôn tươi tắn và khỏe mạnh
        </h2>
      </div>
      <div class="hidden md:block">
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
  </div>
  <div class="container px-4 mx-auto">
    <div class="">
      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }"
        class="w-full"
      >
        <SwiperSlide v-for="(item, idx) in teamB" :key="idx">
          <div class="">
            <img :src="item.image" alt="" class="w-full h-auto" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div>
      <p class="text-[20px] text-[#555] mt-[20px] mb-[48px]">
        Chúng tôi nghĩ rằng da của bạn nên trông tươi tắn và sảng khoái. Nuôi
        dưỡng sắc đẹp bên trong và bên ngoài của bạn với những thành phần thiết
        yếu của chúng tôi.
      </p>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="">
          <h3 class="text-[#121f38] text-[36px]">
            KHÁM PHÁ DỊCH VỤ
            <span class="text-[#9a563a]">Mona Media</span>
          </h3>
          <div class="text-[#7a7a7a] text-[18px]">
            Tại đây, chúng tôi cung cấp các dịch vụ spa đa dạng, từ tẩy tế bào
            chết, mát-xa thư giãn đến mặt nạ dưỡng da toàn diện. Với sự kết hợp
            tuyệt vời giữa kỹ thuật chuyên nghiệp và sản phẩm chất lượng, chúng
            tôi cam kết đem đến cho bạn làn da mềm mịn, tươi trẻ và tinh thần
            thư thái.
          </div>
        </div>
        <div class="flex justify-start gap-3 md:justify-center">
          <div class="text-[#121f38] text-[45px] content-start">01</div>
          <div class="">
            <h3 class="text-[#121f38] text-[26px]">Sản phẩm làm đẹp</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Feature Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Expeort Care
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Brand Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Quite Enviorment</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Outstanding Look</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Popular Service</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-start gap-3 md:justify-center">
          <div class="text-[#121f38] text-[45px] content-start">02</div>
          <div class="">
            <h3 class="text-[#121f38] text-[26px]">Sản phẩm làm đẹp</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Feature Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Expeort Care
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Brand Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Quite Enviorment</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Outstanding Look</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-[#a05c3c] flex items-center text-[14px] gap-3"
                >
                  Popular Service</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[url(/bg-about.jpg)] py-[80px] mx-auto">
      <h3 class="text-[#a05c3c] mb-[18px] uppercase text-center">
        Chăm sóc khách hàng
      </h3>
      <h2 class="text-center font-bold text-[48px] text-[#121f38]">
        Khách hàng đánh giá
      </h2>
      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }"
        class="w-full md:w-[50%]"
      >
        <SwiperSlide v-for="(item, idx) in customer" :key="idx">
          <div
            class="bg-[#fff] relative p-[55px_30px_30px_30px] m-[40px_0_30px_0] transition-colors duration-300 border-b-4 border-solid border-transparent hover:border-[#9a563a] mb-[30px] group"
          >
            <div
              class="w-[80px] h-[80px] rounded-full overflow-hidden mx-auto mb-4 absolute top-[-40px] left-1/2 p-[7px] bg-white shadow-lg"
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
            <p class="mb-4 text-[16px] text-[#555555]">"{{ item.comment }}"</p>
            <p class="text-[22px] font-semibold">
              {{ item.author }}
            </p>
            <p class="text-[12px] text-[#9a563a]">{{ item.authorType }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  <TeamList class="pb-16" />
  <Footer />
</template>

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
