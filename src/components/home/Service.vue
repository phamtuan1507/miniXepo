<template lang="">
  <div class="container px-4 py-5 mx-auto sm:px-6 lg:px-8">
    <h3 class="text-[#a05c3c] mb-[18px] uppercase text-center">
      Dịch vụ của chúng tôi
    </h3>
    <h2 class="text-center font-bold text-[48px] text-[#121f38]">
      Dịch vụ chuyên nghiệp
    </h2>
    <div class="flex justify-center">
      <img src="/shape1.png" alt="" />
    </div>
    <section class="pt-[45px]">
      <div class="relative">
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
          <SwiperSlide v-for="(item, idx) in services" :key="idx">
            <div
              class="pt-0 overflow-hidden transition-all ease-in-out gallery-img duration-400"
            >
              <img
                :src="item.image"
                alt=""
                class="object-cover w-full h-auto transition-transform ease-in-out duration-400 hover:scale-105"
              />
            </div>

            <Button />
          </SwiperSlide>
        </Swiper>
        <div
          class="absolute left-0 right-0 top-0 h-[304px] bg-[rgba(253,231,218,0.58)] bg-gradient-to-b from-[#fff8f5] to-transparent"
        ></div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { ref, onMounted } from "vue";
import Button from "./Button.vue";

const services = [
  {
    image: "/dichvu1.jpg",
  },
  {
    image: "/dichvu2.jpg",
  },
  {
    image: "/dichvu3.jpg",
  },
  {
    image: "/dichvu4.jpg",
  },
  {
    image: "/dichvu1.jpg",
  },
  {
    image: "/dichvu2.jpg",
  },
];

const text = ref("how make your makeup last all day".split(""));
const rotation = ref(0);

const getCharStyle = (index) => {
  const angle = index * (360 / text.value.length) + rotation.value;
  const radius = 80; // Adjust this value to control the radius of the circle
  return {
    transform: `translate(${radius * Math.cos((angle * Math.PI) / 180)}px, ${
      radius * Math.sin((angle * Math.PI) / 180)
    }px) rotate(${-angle}deg)`,
  };
};

onMounted(() => {
  const animateText = () => {
    rotation.value += 1;
    requestAnimationFrame(animateText);
  };
  animateText();
});
</script>
<style scoped>
@keyframes rotate-text {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-border {
  from {
    transform: rotate(0deg) translate(-50%, -50%);
  }
  to {
    transform: rotate(360deg) translate(-50%, -50%);
  }
}

.animate-rotate-text {
  animation: rotate-text 10s linear infinite;
}

.animate-rotate-border {
  animation: rotate-border 10s linear infinite;
}
</style>
