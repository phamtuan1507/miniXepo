<template lang="">
  <div class="container px-4 py-5 mx-auto sm:px-6 lg:px-8">
    <h3 class="text-[#a05c3c] mb-[18px] uppercase text-center">
      Chuyên gia làm đẹp
    </h3>
    <h2 class="text-center font-bold text-[48px] text-[#121f38]">
      Đội ngũ chuyên nghiệp
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
          <SwiperSlide v-for="item in teamList" :key="item.id">
            <router-link :to="`/experts/${item.id}`">
              <div
                class="bg-[#e5d4ce] rounded-[9999px] overflow-hidden m-[7px] relative outline-1 outline-[#a05c3c] hover:outline-[#ffffff] outline-offset-[5px] transition-colors duration-300 group cursor-pointer"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="object-cover w-full h-full rounded-full"
                />
                <span
                  class="absolute top-0 left-0 w-0 h-1/2 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:w-full group-focus:w-full"
                ></span>
                <span
                  class="absolute bottom-0 right-0 w-0 h-1/2 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:w-full group-focus:w-full"
                ></span>
              </div>
              <p
                class="text-center text-[26px] mt-[30px] mb-[6px] hover:text-[#a05c3c] cursor-pointer"
              >
                {{ item.name }}
              </p>
              <p class="text-center text-[#9a563a] uppercase m-0 text-[14px]">
                {{ item.deg }}
              </p>
            </router-link>
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const teamList = ref([]);

const fetchExperts = async () => {
  try {
    const response = await fetch("http://localhost:3000/experts");
    if (response.ok) {
      teamList.value = await response.json();
    } else {
      console.error("Lỗi khi lấy danh sách chuyên gia:", response.status);
    }
  } catch (error) {
    console.error("Lỗi kết nối:", error);
  }
};

onMounted(() => {
  fetchExperts();
});
</script>
