<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Breadcumb from "./Breadcumb.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

// State
const spaItems = ref([]);
const isLoading = ref(false);

// Router
const router = useRouter();

// Dữ liệu tĩnh cho Swiper (detailsService và partners)
const detailsService = [
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

const partners = [
  { id: 1, image: "/pn1.png" },
  { id: 2, image: "/pn2.png" },
  { id: 3, image: "/pn3.png" },
  { id: 4, image: "/pn4.png" },
  { id: 5, image: "/pn5.png" },
  { id: 6, image: "/pn1.png" },
  { id: 7, image: "/pn4.png" },
  { id: 8, image: "/pn5.png" },
  { id: 9, image: "/pn1.png" },
];

// Lấy danh sách dịch vụ từ API
const fetchSpaItems = async () => {
  isLoading.value = true;
  try {
    const response = await fetch(
      "https://miniassignmentxepo-production.up.railway.app/service-relax"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy danh sách dịch vụ");
    const data = await response.json();
    spaItems.value = data.map((item) => ({
      id: item.id,
      image: item.image || "https://placehold.co/600x400",
      title: item.title,
      category: item.category,
    }));
  } catch (error) {
    console.error("Lỗi khi lấy dịch vụ:", error);
    spaItems.value = [];
  } finally {
    isLoading.value = false;
  }
};

// Điều hướng đến chi tiết dịch vụ
const goToServiceDetail = (id) => {
  router.push({ name: "ServiceDetails", params: { id } });
};

// Khởi tạo dữ liệu
onMounted(async () => {
  await fetchSpaItems();
});
</script>

<template>
  <Header />
  <Breadcumb />
  <div class="container px-4 mx-auto py-[80px]">
    <div v-if="isLoading" class="text-center">
      <p>Đang tải dịch vụ...</p>
    </div>
    <div v-else-if="spaItems.length === 0" class="text-center">
      <p>Không tìm thấy dịch vụ nào!</p>
    </div>
    <div v-else class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div
        v-for="(item, index) in spaItems"
        :key="index"
        class="relative col-span-1 cursor-pointer"
        @click="goToServiceDetail(item.id)"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="object-cover w-full transition-opacity duration-300 ease-in-out h-100"
        />
        <div
          class="absolute inset-[13px] z-10 flex flex-col items-center justify-center p-4 text-center bg-white bg-opacity-80 transition-all ease-in-out transform opacity-0 visibility-hidden duration-600 hover:opacity-100 hover:visibility-visible"
        >
          <span class="text-4xl font-bold">+</span>
          <p class="text-lg font-semibold">{{ item.title }}</p>
          <p class="text-sm text-gray-600">{{ item.category }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-[45px]">
    <div>
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
        <SwiperSlide v-for="(item, idx) in detailsService" :key="idx">
          <div
            class="bg-white z-1 hover:bg-[#a05c3c] hover:text-[#ffffff] text-center shadow-[1.5px_2.598px_14.88px_1.12px_rgba(54,72,89,0.05)] py-6 px-4 transition-colors duration-300 border border-solid border-[rgba(154,86,58,0.25)] outline-1 outline-[#a05c3c] hover:outline-[#ffffff] outline-offset-[-9px] mb-[30px]"
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
                strokeWidth="1.5"
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
                strokeWidth="1.5"
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
                strokeWidth="1.5"
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
                strokeWidth="1.5"
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
            <p class="text-lg font-semibold">{{ item.name }}</p>
            <p class="mb-4">"{{ item.text }}"</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>

  <div class="container px-4 mx-auto py-[80px] bg-[#FDE5D7]">
    <div>
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
            <img :src="item.image" alt="" class="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 10s linear infinite;
}
</style>
